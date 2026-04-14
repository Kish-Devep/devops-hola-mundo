# Ciclo DevOps - Hola Mundo con Node.js + Docker

Práctica del ciclo completo DevOps: desarrollo de app, contenerización con Docker y publicación en Docker Hub.

## Tecnologías usadas

- **Node.js** + Express — aplicación web
- **Docker** — contenerización
- **Docker Hub** — registro de imágenes

## Estructura del proyecto

```
devops-practica/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## Paso 1 — Correr la app localmente

```bash
npm install
npm start
```

Abre http://localhost:3000 en tu navegador.

---

## Paso 2 — Construir la imagen Docker

```bash
docker build -t hola-mundo-devops .
```

Verificar que la imagen fue creada:

```bash
docker images
```

---

## Paso 3 — Correr el contenedor localmente

```bash
docker run -d -p 3000:3000 hola-mundo-devops
```

Abre http://localhost:3000 y verás la app corriendo dentro del contenedor.

---

## Paso 4 — Subir imagen a Docker Hub

```bash
# 1. Iniciar sesión en Docker Hub
docker login

# 2. Etiquetar la imagen con tu usuario de Docker Hub
docker tag hola-mundo-devops TU_USUARIO_DOCKERHUB/hola-mundo-devops:latest

# 3. Subir la imagen
docker push TU_USUARIO_DOCKERHUB/hola-mundo-devops:latest
```

---

## Paso 5 — Verificar en Docker Hub

Entra a https://hub.docker.com y verifica que la imagen aparece en tu perfil.

Para descargar y correr la imagen desde Docker Hub en cualquier máquina:

```bash
docker pull TU_USUARIO_DOCKERHUB/hola-mundo-devops:latest
docker run -d -p 3000:3000 TU_USUARIO_DOCKERHUB/hola-mundo-devops:latest
```

---

## Resultado

Al acceder a http://localhost:3000 verás:

```
Hola Mundo!
Práctica DevOps - Node.js + Docker
Contenedor corriendo correctamente
```
