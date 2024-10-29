# backend.py
import subprocess
import os
import json

def input_with_prompt(prompt):
    return input(prompt)

mysql = False
postgres = False
mssql = False
sequalize_content = ""
driver = ""

# Prompt for database type
while True:
    try:
        elegir = int(input_with_prompt("""\
¿Qué tipo de base de datos usarás?
1. MYSQL
2. POSTGRES
3. SQL SERVER
R/ """))
        if elegir in [1, 2, 3]:
            break
        else:
            print("Por favor, elige una opción válida.")
    except ValueError:
        print("Entrada inválida. Ingresa un número entre 1 y 3.")

database = input_with_prompt("Ingresa el nombre de tu base de datos: ")
contraseña = input_with_prompt("Contraseña del usuario por defecto: ")

# Setting up database connection
if elegir == 1:
    mysql = True
    driver = "mysql2"
    sequalize_content = f"""new Sequelize('{database}', 'admin', '{contraseña}', {{ host: '127.0.0.1', dialect: 'mysql', port: 3306 }});"""
elif elegir == 2:
    postgres = True
    driver = "pg"
    sequalize_content = f"""new Sequelize('{database}', 'admin', '{contraseña}', {{ host: 'localhost', dialect: 'postgres', port: 5432 }});"""
elif elegir == 3:
    mssql = True
    driver = "tedious"
    sequalize_content = f"""new Sequelize('{database}', 'sa', '{contraseña}', {{ host: 'localhost', dialect: 'mssql', port: 1433 }});"""

# Function to run shell commands
def run_command(command):
    subprocess.run(command, shell=True, check=True)

# Replace content in a file
def replace_in_file(nombre_archivo, patron, reemplazo):
    with open(nombre_archivo, 'r', encoding='utf-8') as archivo:
        contenido = archivo.read()
    contenido = contenido.replace(patron, reemplazo)
    with open(nombre_archivo, 'w', encoding='utf-8') as archivo:
        archivo.write(contenido)

# Setting up the Node project
run_command("npm init -y")
run_command("npm i -D typescript @types/express nodemon @types/morgan @types/sequelize @types/cors")
run_command(f"npm i express ts-node morgan sequelize cors {driver}")
run_command("npx tsc --init")
replace_in_file('tsconfig.json', '"target": "es2016"', '"target": "es6"')
replace_in_file('tsconfig.json', '"outDir": "./"', '"outDir": "./dist"')
replace_in_file('tsconfig.json', '// "outDir"', '"outDir"')

# Updating package.json scripts
with open('package.json', 'r', encoding='utf-8') as archivo:
    package_json_content = json.load(archivo)
package_json_content['scripts'] = {
    **package_json_content.get('scripts', {}),
    "build": "tsc",
    "dev": "nodemon src/server.ts --exec ts-node"
}
with open('package.json', 'w', encoding='utf-8') as archivo:
    json.dump(package_json_content, archivo, indent=2)

# Creating directories and files
directorios = [
    "src/config",
    "src/controllers",
    "src/database",
    "src/models",
    "src/routes"
]
archivos = [
    "src/config/index.ts",
    "src/database/db.ts",
    "src/server.ts",
    "src/routes/index.ts"
]
for directorio in directorios:
    os.makedirs(directorio, exist_ok=True)
for archivo in archivos:
    open(archivo, 'w').close()

# Writing initial content to configuration files
config_index_content = """import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from '../routes/index';
import cors from 'cors';

export class App {
    public app: Application;
    public routePrv: Routes = new Routes();

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private routes() {
        this.routePrv.routes(this.app);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
"""
with open('src/config/index.ts', 'w', encoding='utf-8') as archivo:
    archivo.write(config_index_content)

server_ts_content = """import { App } from './config/index';

async function main() {
    const app = new App(4000);
    await app.listen();
}

main();
"""
with open('src/server.ts', 'w', encoding='utf-8') as archivo:
    archivo.write(server_ts_content)

database_db_content = f"""import {{ Sequelize }} from 'sequelize';

const DB_NAME = '{database}';
export const database = {sequalize_content};

async function generateDb() {{
    try {{
        await database.sync();
        console.log('Database & tables created');
    }} catch (error) {{
        console.error('Failed to create database:', error);
    }}
}}

generateDb();
"""
with open('src/database/db.ts', 'w', encoding='utf-8') as archivo:
    archivo.write(database_db_content)

routes_index_content = """import { Application } from 'express';

export class Routes {
    public routes(app: Application): void {
        // Add routes here
    }
}
"""
with open('src/routes/index.ts', 'w', encoding='utf-8') as archivo:
    archivo.write(routes_index_content)

run_command("python3 models.py")
