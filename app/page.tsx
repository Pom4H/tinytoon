export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-sky-50 dark:from-black dark:via-slate-900 dark:to-black">
      <main className="mx-6 w-full max-w-2xl rounded-2xl bg-white/80 p-12 shadow-xl backdrop-blur-sm dark:bg-black/60">
        <h1 className="text-center text-6xl font-extrabold leading-tight text-indigo-600 dark:text-indigo-400">
          Hello, World!
        </h1>
        <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300">
          Простая стартовая страница — заменил стандартный шаблон Next.js на минималистичный "Hello World" дизайн.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500"
            href="#"
          >
            Начать
          </a>
          <a
            className="rounded-full border border-indigo-200 px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300"
            href="#"
          >
            Подробнее
          </a>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ using Next.js + Bun
        </footer>
      </main>
    </div>
  );
}

