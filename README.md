# 🎶 Festival App - Sistema de Registro para Eventos Musicales

**Festival App** 🎉 es una plataforma desarrollada en Next.js para la gestión de usuarios en un festival de música. Incluye autenticación, verificación KYC, manejo de créditos y generación de QR.

## 📋 Características

- **Next.js**: Renderizado SSR y SSG.
- **SQLite**: Base de datos local integrada.
- **NextAuth**: Autenticación de usuario por credenciales.
- **KYC**: Verificación de identidad mediante subida de documentos.
- **Créditos Virtuales**: Sistema de créditos para usuarios.
- **QR Personalizado**: Generación de códigos QR para acceso al evento.

## ⚙️ Requisitos

- **Node.js** v14+
- **NPM** v6+

## 💻 Instalación

1. Clona el repositorio y entra en la carpeta del proyecto:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd festival-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura el archivo `.env.local`:
   ```env
   DATABASE_URL="file:./database.sqlite"
   ```

4. Ejecuta las migraciones para la base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```

## ▶️ Uso

Inicia el servidor de desarrollo:
```bash
npm run dev
```

Accede a [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto
```
app/               # Componentes y rutas de la aplicación
components/        # Componentes de UI reutilizables
prisma/            # Configuración de base de datos
styles/            # Estilos globales
```

## 🤝 Contribución

1. Haz un fork y crea una nueva rama (`feature/nueva-funcionalidad`).
2. Realiza los cambios y haz commit.
3. Sube los cambios y abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

¡Gracias por tu interés en Festival App! 🎉

