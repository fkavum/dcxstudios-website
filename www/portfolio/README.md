###

```bash
node v -> v26.0.0
npm v -> 11.12.1
astro v-> 5.0.6
# 1. Yeni bir Astro projesi oluştur (Sana birkaç soru soracak, "Include sample files" ve "Install dependencies" diyebilirsin)
npm create astro@latest portfolyom

# 2. Proje klasörüne gir
cd portfolyom

# 3. Sihirli komut: React ve Tailwind'i otomatik olarak projeye entegre et
npx astro add react tailwind
# (Bu komut sana "Bunu kurayım mı, ayar dosyasını güncelleyeyim mi?" diyecek, hepsine "Yes / y" de).
npx astro add mdx
```

```bash
npm run dev
```


# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).




In Astro, there is a strict difference between the `src/` directory and the `public/` directory when handling assets:

1.  **`src/assets/`**: Files here must be explicitly `import`ed into your `.astro` files so the bundler (Vite) can process them.
2.  **`public/`**: Files here are served directly at the root URL (e.g. `/icons/...`) without being touched by the bundler.

Since your `resume.json` provides the icons as raw URL strings like `/icons/linkedin-svgrepo-com.svg`, the browser requests them directly from your site's root directory. Because they were in `src/assets/icons`, Astro's dev server couldn't find them there.
