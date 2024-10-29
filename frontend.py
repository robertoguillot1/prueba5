import os
import subprocess

# Ruta donde se encuentran los modelos en el backend
BACKEND_MODELS_PATH = '../src/models/'  # Ruta al directorio 'src/models' desde la carpeta 'frontend'

# Función para ejecutar comandos en la terminal
def run_command(command):
    subprocess.run(command, shell=True, check=True)

# Crear la carpeta del frontend si no existe
if not os.path.exists('frontend'):
    os.makedirs('frontend')

# Navegar a la carpeta frontend
os.chdir('frontend')

# Verificar si Angular CLI está disponible
try:
    run_command("ng version")
except subprocess.CalledProcessError:
    print("Angular CLI no está instalado. Por favor, instala Angular CLI para continuar.")
    exit(1)

# Verificar si el proyecto Angular ya existe
if not os.path.isfile('angular.json'):
    print("Inicializando un nuevo proyecto Angular en la carpeta 'frontend'...")

    # Crear el proyecto Angular directamente en la carpeta 'frontend' sin crear otra subcarpeta
    run_command("ng new frontend-project --directory . --defaults --skip-git")  # Crea el proyecto en el directorio actual

else:
    print("El proyecto Angular ya existe.")

# Crear los componentes de Angular layout (header, aside, content, footer)
components = ['header', 'aside', 'content', 'footer']
for component in components:
    run_command(f"ng g c components/layout/{component}")

# Crear la carpeta 'models' dentro de 'src/app' si no existe
models_path = 'src/app/models'
if not os.path.exists(models_path):
    os.makedirs(models_path)

# Función para copiar y resumir los modelos del backend al frontend
def copiar_modelos_resumidos_backend():
    # Verificar si la carpeta de modelos del backend existe
    if not os.path.exists(BACKEND_MODELS_PATH):
        print(f"La carpeta de modelos del backend no se encontró en: {BACKEND_MODELS_PATH}")
        return

    # Listar todos los archivos .ts en el directorio de modelos del backend
    for modelo in os.listdir(BACKEND_MODELS_PATH):
        if modelo.endswith('.ts'):
            backend_model_path = os.path.join(BACKEND_MODELS_PATH, modelo)
            frontend_model_path = os.path.join(models_path, modelo)
            
            # Procesar el archivo de modelo para extraer solo la interfaz resumida
            with open(backend_model_path, 'r', encoding='utf-8') as backend_model:
                lines = backend_model.readlines()

            # Filtrar para obtener solo la interfaz exportada
            interface_lines = []
            recording_interface = False

            for line in lines:
                if "export interface" in line:
                    recording_interface = True
                if recording_interface:
                    interface_lines.append(line)
                if recording_interface and "}" in line:
                    recording_interface = False

            # Si se encontró la interfaz, escribirla en el frontend
            if interface_lines:
                with open(frontend_model_path, 'w', encoding='utf-8') as frontend_model:
                    frontend_model.write(''.join(interface_lines))
                print(f"Modelo {modelo} copiado y resumido desde {backend_model_path} a {frontend_model_path}.")

# Función para reemplazar completamente el archivo 'src/app/app.component.ts'
def reemplazar_app_component_ts():
    app_component_ts_path = 'src/app/app.component.ts'

    # Contenido nuevo para reemplazar todo el archivo
    nuevo_contenido = """import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AsideComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
"""
    try:
        with open(app_component_ts_path, 'w', encoding='utf-8') as app_ts:
            app_ts.write(nuevo_contenido)
        print(f"Archivo {app_component_ts_path} reemplazado exitosamente.")
    except FileNotFoundError:
        print(f"No se encontró el archivo {app_component_ts_path}.")

# Función para modificar el archivo 'src/app/app.component.html'
def modificar_app_component_html():
    app_component_html_path = 'src/app/app.component.html'
    
    # Contenido nuevo para reemplazar
    nuevo_contenido = """<main>
    <header>
        <app-header></app-header>
    </header>

    <aside>
        <app-aside></app-aside>
    </aside>

    <section>
        <router-outlet></router-outlet>
    </section>

    <footer>
        <app-footer></app-footer>
    </footer>
</main>
"""
    try:
        with open(app_component_html_path, 'w', encoding='utf-8') as app_html:
            app_html.write(nuevo_contenido)
        print(f"Archivo {app_component_html_path} modificado exitosamente.")
    except FileNotFoundError:
        print(f"No se encontró el archivo {app_component_html_path}.")

# Función para modificar el archivo 'src/app/app.component.css'
def modificar_app_component_css():
    app_component_css_path = 'src/app/app.component.css'

    # Contenido nuevo para reemplazar
    nuevo_css = """/* Estilos generales */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

/* Contenedor principal */
main {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "header header header header header"
        "aside section section section section"
        "footer footer footer footer footer";
    height: 98vh;
}

/* Encabezado */
header {
    grid-area: header;
    background-color: #fff;
    padding: 20px;
    text-align: center;
}

/* Menú lateral */
aside {
    grid-area: aside;
    background-color: transparent;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 5px;
    height: 100%;
}

/* Sección principal */
section {
    grid-area: section;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
}

/* Pie de página */
footer {
    grid-area: footer;
    background-color: #fff;
    text-align: center;
    padding: 10px;
}
"""

    try:
        with open(app_component_css_path, 'w', encoding='utf-8') as app_css:
            app_css.write(nuevo_css)
        print(f"Archivo {app_component_css_path} modificado exitosamente.")
    except FileNotFoundError:
        print(f"No se encontró el archivo {app_component_css_path}.")

# Ejecutar todas las modificaciones
copiar_modelos_resumidos_backend()  # Copiar los modelos en formato resumido
modificar_app_component_html()  # Modificar HTML
modificar_app_component_css()  # Modificar CSS
reemplazar_app_component_ts()  # Reemplazar app.component.ts

# Mensaje de finalización
print("El proyecto Angular y los componentes layout (header, aside, content, footer) han sido creados exitosamente.")
print("El archivo app.component.ts ha sido reemplazado y el contenido de app.component.html y app.component.css ha sido actualizado.")
