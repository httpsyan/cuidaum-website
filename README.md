# 🏥 CuidaUm Website

CuidaUm is a modern and intuitive platform designed to connect healthcare professionals with patients, providing accessible and quality healthcare services. This repository contains the source code for CuidaUm's main website.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🖼️ Preview

<details>
<summary>Click to see screenshots</summary>

> ![Preview](/src/assets/preview/preview.png)

</details>

## 🚀 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (comes with Node.js) or yarn
- Git

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cuidaum-website.git
cd cuidaum-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration values.

## 🛠️ Development

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Development Workflow

1. Create a new branch for your feature
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit using semantic commit messages
```bash
git add .
git commit -m "feat: add new feature"
```

3. Push your changes and create a pull request
```bash
git push origin feature/your-feature-name
```

4. Wait for review and merge

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
