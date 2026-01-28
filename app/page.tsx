export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-yellow-50 dark:from-black dark:to-slate-900">
      <header className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">ЖК Солнечный</div>
          <div className="flex gap-4">
            <a className="rounded-full bg-indigo-600 px-4 py-2 text-sm text-white" href="#contact">Связаться</a>
            <a className="rounded-full border border-indigo-600 px-4 py-2 text-sm text-indigo-600" href="#plan">Планировки</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-indigo-700">Комфортные квартиры в «ЖК Солнечный»</h1>
            <p className="mt-4 text-lg text-gray-700">Современный жилой комплекс в экологичном районе с удобной транспортной доступностью, детскими площадками и собственным благоустроенным двором.</p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• 1-4 комнатные квартиры</li>
              <li>• Подземный паркинг и велосипедные стоянки</li>
              <li>• Школа и детский сад в пешей доступности</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a className="rounded-full bg-indigo-600 px-6 py-3 text-white" href="#contact">Узнать цену</a>
              <a className="rounded-full border border-indigo-600 px-6 py-3 text-indigo-600" href="#plan">Посмотреть планировки</a>
            </div>
          </div>

          <div className="rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-sm dark:bg-black/50">
            <div className="h-64 rounded-md bg-gradient-to-r from-indigo-300 via-pink-200 to-yellow-200" />
            <div className="mt-4 text-center text-sm text-gray-600">Визуализация фасада жилого комплекса</div>
          </div>
        </section>

        <section id="plan" className="mt-16">
          <h2 className="text-2xl font-semibold text-indigo-700">Планировки</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="text-lg font-medium">1-комнатная</div>
              <div className="mt-2 text-sm text-gray-600">Площадь: 38 м²</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-lg font-medium">2-комнатная</div>
              <div className="mt-2 text-sm text-gray-600">Площадь: 58 м²</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-lg font-medium">3-комнатная</div>
              <div className="mt-2 text-sm text-gray-600">Площадь: 78 м²</div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-xl bg-indigo-50 p-6">
          <h2 className="text-2xl font-semibold text-indigo-700">Оставьте заявку</h2>
          <p className="mt-2 text-sm text-gray-600">Мы свяжемся с вами в ближайшее время</p>

          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-md border p-3" placeholder="Ваше имя" />
            <input className="rounded-md border p-3" placeholder="Телефон или email" />
            <textarea className="col-span-2 rounded-md border p-3" placeholder="Комментарий" />
            <button className="col-span-2 rounded-full bg-indigo-600 px-6 py-3 text-white">Отправить заявку</button>
          </form>
        </section>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 py-8 text-center text-sm text-gray-600">© 2026 ЖК Солнечный — Все права защищены</footer>
    </div>
  );
}

