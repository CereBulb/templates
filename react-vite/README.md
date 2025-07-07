# Welcome to React Router!

A modern, production-ready template for building React Single Page Applications
using React Router.

## Features

- 🚀 Single Page Application
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
- [Shadcn](https://ui.shadcn.com/) - UI component library
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Tanstack Form](https://tanstack.com/form/latest/docs/overview)
- Testing suits - (vitest, react testing library, playwright)
- Eslint and Prettier
- `Bun` as a package manager

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

Install Playwright

```bash
bunx playwright install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3100:3000 my-app
```

The containerized application can be deployed to any platform that supports
Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is
production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already
configured for a simple default starting experience. You can use whatever CSS
framework you prefer.

---

Built with ❤️ using React Router.
