import os
import subprocess

def run_command(command):
    subprocess.run(command, shell=True, check=True)

# Obtener la lista de archivos de modelos en el directorio src/models/
archivos_modelos = os.listdir('src/models/')

# Bucle para crear controladores y rutas para cada modelo
rutas_imports = ""
rutas_instancias = ""
rutas_definiciones = ""
for archivo_modelo in archivos_modelos:
    # Extraer el nombre del modelo del nombre del archivo
    nombre_modelo = os.path.splitext(archivo_modelo)[0]
    
    # Crear el archivo del controlador con el nombre del modelo
    controlador_path = f'src/controllers/{nombre_modelo}.controller.ts'
    with open(controlador_path, 'w', encoding='utf-8') as controlador_file:
        controlador_content = f"""import {{ Request, Response }} from 'express';
import {{ {nombre_modelo}, {nombre_modelo}I }} from '../models/{nombre_modelo}';

export class {nombre_modelo}Controller {{

    // Método para probar el controlador
    public async test(req: Request, res: Response): Promise<void> {{
        try {{
            res.send('Hola, método test para {nombre_modelo}');
        }} catch (error) {{
            res.status(500).json({{ message: 'Error en test de {nombre_modelo}' }});
        }}
    }}

    // Obtener todos los registros de {nombre_modelo}
    public async getAll{nombre_modelo}(req: Request, res: Response) {{
        try {{
            const {nombre_modelo.lower()}: {nombre_modelo}I[] = await {nombre_modelo}.findAll();
            res.status(200).json({{ {nombre_modelo.lower()} }});
        }} catch (error) {{
            res.status(500).json({{ message: 'Error al obtener registros de {nombre_modelo}', error }});
        }}
    }}

    // Obtener un solo registro de {nombre_modelo} por ID
    public async getOne{nombre_modelo}(req: Request, res: Response): Promise<void> {{
        const {{ id }} = req.params;

        try {{
            const {nombre_modelo.lower()}: {nombre_modelo}I | null = await {nombre_modelo}.findOne({{ 
                where: {{ id }}
            }});
            if ({nombre_modelo.lower()}) {{
                res.status(200).json({nombre_modelo.lower()});
            }} else {{
                res.status(404).json({{ message: "El registro de {nombre_modelo} no existe" }});
            }}
        }} catch (error) {{
            res.status(500).json({{ message: "Error al obtener el registro de {nombre_modelo}" }});
        }}
    }}

    // Crear un registro de {nombre_modelo}
    public async create{nombre_modelo}(req: Request, res: Response): Promise<void> {{
        try {{
            const new{nombre_modelo}: {nombre_modelo}I = await {nombre_modelo}.create(req.body);
            res.status(201).json(new{nombre_modelo});
        }} catch (error) {{
            res.status(500).json({{ message: 'Error al crear el registro de {nombre_modelo}' }});
        }}
    }}

    // Actualizar un registro de {nombre_modelo} por ID
    public async update{nombre_modelo}(req: Request, res: Response): Promise<void> {{
        const {{ id }} = req.params;

        try {{
            const {nombre_modelo.lower()}Exist: {nombre_modelo}I | null = await {nombre_modelo}.findByPk(id);
            if (!{nombre_modelo.lower()}Exist) {{
                res.status(404).json({{ message: "El registro de {nombre_modelo} no existe" }});
            }} else {{
                await {nombre_modelo}.update(req.body, {{ where: {{ id }} }});
                const updated{nombre_modelo}: {nombre_modelo}I | null = await {nombre_modelo}.findByPk(id);
                res.status(200).json(updated{nombre_modelo});
            }}
        }} catch (error) {{
            res.status(500).json({{ message: 'Error al actualizar el registro de {nombre_modelo}' }});
        }}
    }}

    // Eliminar un registro de {nombre_modelo} por ID
    public async delete{nombre_modelo}(req: Request, res: Response): Promise<void> {{
        const {{ id }} = req.params;

        try {{
            const {nombre_modelo.lower()}Exist: {nombre_modelo}I | null = await {nombre_modelo}.findByPk(id);
            if (!{nombre_modelo.lower()}Exist) {{
                res.status(404).json({{ message: "El registro de {nombre_modelo} no existe" }});
            }} else {{
                await {nombre_modelo}.destroy({{ where: {{ id }} }});
                res.status(200).json({{ message: "Registro de {nombre_modelo} eliminado" }});
            }}
        }} catch (error) {{
            res.status(500).json({{ message: 'Error al eliminar el registro de {nombre_modelo}' }});
        }}
    }}
}}
"""
        controlador_file.write(controlador_content)

    # Crear el archivo de rutas con el nombre del modelo
    rutas_path = f'src/routes/{nombre_modelo}.ts'
    with open(rutas_path, 'w', encoding='utf-8') as rutas_file:
        rutas_content = f"""import {{ Request, Response, Application }} from 'express';
import {{ {nombre_modelo}Controller }} from '../controllers/{nombre_modelo}.controller';

export class {nombre_modelo}Routes {{
    public {nombre_modelo.lower()}Controller: {nombre_modelo}Controller = new {nombre_modelo}Controller();

    public routes(app: Application): void {{
        app.route('/{nombre_modelo.lower()}').get(this.{nombre_modelo.lower()}Controller.getAll{nombre_modelo});
        app.route('/{nombre_modelo.lower()}/:id').get(this.{nombre_modelo.lower()}Controller.getOne{nombre_modelo});
        app.route('/{nombre_modelo.lower()}').post(this.{nombre_modelo.lower()}Controller.create{nombre_modelo});
        app.route('/{nombre_modelo.lower()}/:id').put(this.{nombre_modelo.lower()}Controller.update{nombre_modelo});
        app.route('/{nombre_modelo.lower()}/:id').delete(this.{nombre_modelo.lower()}Controller.delete{nombre_modelo});
    }}
}}
"""
        rutas_file.write(rutas_content)

    # Actualizar contenido para importar y definir las rutas en el archivo de configuración
    rutas_imports += f"import {{ {nombre_modelo}Routes }} from '../routes/{nombre_modelo}';\n"
    rutas_instancias += f"    public {nombre_modelo}Routes: {nombre_modelo}Routes = new {nombre_modelo}Routes();\n"
    rutas_definiciones += f"        this.routePrv.{nombre_modelo}Routes.routes(this.app);\n"

# Modificar el archivo src/config/index.ts para reflejar los modelos actuales y corregir el método routes
config_path = 'src/config/index.ts'
with open(config_path, 'r+', encoding='utf-8') as config_file:
    config_content = config_file.read()

# Reemplazar el contenido de la función routes con los modelos actuales
new_routes_section = f"""    private routes() {{
{rutas_definiciones}
    }}"""

# Sobrescribir el contenido anterior de 'private routes() {'
config_content = config_content.replace(
    'private routes() {',
    new_routes_section
)

# Eliminar posibles líneas adicionales como 'this.routePrv.routes(this.app);'
config_content = config_content.replace('this.routePrv.routes(this.app);', '')

# Sobrescribir el archivo src/config/index.ts con el contenido actualizado
with open(config_path, 'w', encoding='utf-8') as config_file:
    config_file.write(config_content)

# Modificar el archivo src/routes/index.ts para agregar solo las instancias de rutas, sin la función routes()
routes_index_path = 'src/routes/index.ts'
with open(routes_index_path, 'w', encoding='utf-8') as routes_index_file:
    routes_index_content = f"""import {{ Application }} from 'express';
{rutas_imports}
export class Routes {{
{rutas_instancias}
}}
"""
    routes_index_file.write(routes_index_content)
