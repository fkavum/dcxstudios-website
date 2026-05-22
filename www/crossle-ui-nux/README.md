# Crossle - Online Word Duel

Crossle is a real-time multiplayer word game where players compete in crossword-style duels. This is the landing page and web interface for the game application.

## 🚀 Features

- **Modern Landing Page**: Built with Nuxt 4 and Tailwind CSS.
- **Interactive Elements**: Playable concept demo and gameplay trailers.
- **App Store Links**: Direct links to download iOS and Android apps.
- **Fully Responsive**: Optimized for both desktop and mobile devices.

## 🛠 Prerequisites

- Node.js (v20 or higher)
- pnpm (recommended package manager)
- Docker (optional, for containerization)

## 💻 Local Development

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Start Development Server**

   Start the development server on `http://localhost:3000`:

   ```bash
   pnpm dev
   ```

3. **Build for Production**

   Build the application for production:

   ```bash
   pnpm build
   ```

   Locally preview the production build:

   ```bash
   pnpm preview
   ```

## 🐳 Docker Deployment

You can containerize the application using the included `Dockerfile`.

### 1. Build the Docker Image

Run the following command in the project root:

```bash
docker build -t crossle-app .
```

### 2. Run the Container

Run the container, mapping port 3000:

```bash
docker run -p 3000:3000 crossle-app
```

The application will be accessible at `http://localhost:3000`.

### Docker Compose (Optional)

If you prefer using Docker Compose, you can create a `docker-compose.yml` file:

```yaml
version: '3'
services:
  crossle:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=YOUR_ID_HERE
```

## 📁 Project Structure

- `app/`: Main application source code (pages, components, assets).
- `public/`: Static assets (images, videos, icons).
- `nuxt.config.ts`: Nuxt project configuration.
- `Dockerfile`: Container definition for production deployment.

## 📄 License

© 2025 DCX Studios. All rights reserved.
