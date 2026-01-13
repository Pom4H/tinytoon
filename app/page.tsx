export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-blue-600 text-white font-bold px-3 py-1">W</div>
            <div className="text-lg font-semibold">Worken — Inspired</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="#services" className="hover:underline">Услуги</a>
            <a href="#cases" className="hover:underline">Кейсы</a>
            <a href="#about" className="hover:underline">О нас</a>
            <a href="#contacts" className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900">Связаться</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Дизайн и разработка продуктов, которые продают</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">Быстрый старт: простая команда, проверенный процесс и фокус на результате. Мы создаём интерфейсы, которые действительно работают для бизнеса.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a className="inline-block rounded-md bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700" href="#contacts">Получить консультацию</a>
              <a className="inline-block rounded-md border border-gray-200 px-5 py-3 text-gray-700 hover:bg-gray-50 dark:border-gray-800" href="#cases">Наши кейсы</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-sm text-gray-500">UX/UI</div>
              <div className="text-sm text-gray-500">Web & Mobile</div>
              <div className="text-sm text-gray-500">Branding</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 flex items-center justify-center">
            <div className="w-full h-56 bg-gradient-to-br from-blue-200 to-blue-400 rounded-md flex items-center justify-center text-blue-900 font-bold">Hero Image</div>
          </div>
        </section>

        <section id="services" className="mt-16">
          <h2 className="text-2xl font-semibold">Услуги</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Коротко о том, что мы делаем для клиентов.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Исследования и прототипы', desc: 'Понимаем пользователей и быстро проверяем гипотезы.' },
              { title: 'Дизайн интерфейсов', desc: 'Простые и продающие интерфейсы для web и mobile.' },
              { title: 'Разработка', desc: 'Современные решения на React/Next.js и других стэках.' },
              { title: 'Тестирование и поддержка', desc: 'Поддерживаем продукт и улучшаем метрики.' },
              { title: 'Бренд и айдентика', desc: 'Создаём визуальную систему и голос бренда.' },
              { title: 'Аналитика', desc: 'Настраиваем аналитику и помогаем принимать решения.' },
            ].map((s) => (
              <div key={s.title} className="rounded-lg border border-gray-100 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="mt-16">
          <h2 className="text-2xl font-semibold">Кейсы</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">Case image</div>
              <div className="p-4">
                <h3 className="font-semibold">Проект А</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Короткое описание результата и метрик.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">Case image</div>
              <div className="p-4">
                <h3 className="font-semibold">Проект Б</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Короткое описание результата и метрик.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-16 mb-24">
          <h2 className="text-2xl font-semibold">Контакты</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Напишите нам, и мы обсудим ваш проект.</p>
          <div className="mt-4">
            <a href="mailto:hello@example.com" className="inline-block rounded-md bg-blue-600 text-white px-5 py-3">hello@example.com</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-6 text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Worken — Inspired. Все права защищены.</div>
      </footer>
    </div>
  );
}

