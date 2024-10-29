# models.py
import subprocess
import os

nombres_modelos = []


def run_command(command):
    subprocess.run(command, shell=True, check=True)


def input_with_prompt(prompt):
    return input(prompt)


def create_model_file(model_name: str, fields: list[tuple[str, str, bool, str]]):
    filename = f'src/models/{model_name}.ts'
    with open(filename, 'w', encoding='utf-8') as archivo:
        archivo.write(f"""import {{ Model, DataTypes }} from 'sequelize';
import {{ database }} from '../database/db';
""")
        # Import related models
        for field_name, field_type, is_foreign, related_model in fields:
            if is_foreign and related_model in nombres_modelos:
                archivo.write(f"import {{ {related_model} }} from './{related_model}';\n")
        archivo.write(f"""

export class {model_name} extends Model {{
""")
        for field_name, field_type, _, _ in fields:
            archivo.write(f"    public {field_name}!: {field_type};\n")
        archivo.write(f"""}}

export interface {model_name}I {{
""")
        for field_name, field_type, _, _ in fields:
            archivo.write(f"    {field_name}: {field_type};\n")
        archivo.write("""}

""")
        archivo.write(f"{model_name}.init(\n")
        archivo.write("    {\n")
        for field_name, field_type, is_foreign, _ in fields:
            if is_foreign:
                continue
            archivo.write(f"        {field_name}: {{\n")
            archivo.write(f"            type: DataTypes.{field_type.upper()},\n")
            archivo.write(f"            allowNull: false,\n")
            if field_name == 'telefono':
                archivo.write(f"            unique: true,\n")
            archivo.write(f"        }},\n")
        archivo.write("    },\n")
        archivo.write(f"    {{\n        sequelize: database,\n        modelName: '{model_name}',\n        timestamps: true\n    }}\n);\n")

        # Define associations if there are foreign keys
        for field_name, _, is_foreign, related_model in fields:
            if is_foreign and related_model in nombres_modelos:
                archivo.write(f"{model_name}.belongsTo({related_model}, {{ foreignKey: '{field_name}' }});\n")
                archivo.write(f"{related_model}.hasMany({model_name}, {{ foreignKey: '{field_name}' }});\n")


while True:
    model_name = input_with_prompt("Ingrese el nombre del modelo: ").capitalize()
    if not model_name:
        break
    nombres_modelos.append(model_name)
    fields = []
    while True:
        field_name = input_with_prompt("Ingrese el nombre del campo (o presione Enter para terminar): ")
        if not field_name:
            break
        field_type = input_with_prompt(f"Ingrese el tipo de datos para el campo '{field_name}': ")
        is_foreign = input_with_prompt(f"¿El campo '{field_name}' es una llave foránea? (s/n): ").lower() == 's'
        related_model = ""
        if is_foreign:
            related_model = input_with_prompt(f"¿A qué modelo está relacionado '{field_name}'?: ").capitalize()
        fields.append((field_name, field_type, is_foreign, related_model))
    create_model_file(model_name, fields)

# Crear el archivo controladores.py si no existe
if not os.path.exists('controladores.py'):
    with open('controladores.py', 'w') as archivo:
        archivo.write("# controladores.py\nimport os\nimport subprocess\n\n")

run_command("python3 controladores.py")
