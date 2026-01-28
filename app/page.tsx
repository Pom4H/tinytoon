export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ЖК Солнечный</div>
          <div className="flex gap-4">
            <a className="rounded-full btn-primary" href="#contact">Связаться</a>
            <a className="rounded-full btn-outline" href="#plan">Планировки</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-primary">Комфортные квартиры в «ЖК Солнечный»</h1>
            <p className="mt-4 text-lg text-muted">Современный жилой комплекс в экологичном районе с удобной транспортной доступностью, детскими площадками и собственным благоустроенным двором.</p>

            <ul className="mt-6 space-y-2 text-muted">
              <li>• 1-4 комнатные квартиры</li>
              <li>• Подземный паркинг и велосипедные стоянки</li>
              <li>• Школа и детский сад в пешей доступности</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a className="rounded-full btn-primary" href="#contact">Узнать цену</a>
              <a className="rounded-full btn-outline" href="#plan">Посмотреть планировки</a>
            </div>
          </div>

          <div className="rounded-xl bg-card p-6 card-shadow">
            <div className="h-64 rounded-md accent-gradient" />
            <div className="mt-4 text-center text-sm text-muted">Визуализация фасада жилого комплекса</div>
          </div>
        </section>

        <section id="plan" className="mt-16">
          <h2 className="text-2xl font-semibold text-primary">Планировки</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-4 bg-card">
              <div className="text-lg font-medium text-primary">1-комнатная</div>
              <div className="mt-2 text-sm text-muted">Площадь: 38 м²</div>
            </div>
            <div className="rounded-lg border p-4 bg-card">
              <div className="text-lg font-medium text-primary">2-комнатная</div>
              <div className="mt-2 text-sm text-muted">Площадь: 58 м²</div>
            </div>
            <div className="rounded-lg border p-4 bg-card">
              <div className="text-lg font-medium text-primary">3-комнатная</div>
              <div className="mt-2 text-sm text-muted">Площадь: 78 м²</div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-xl bg-surface p-6">
          <h2 className="text-2xl font-semibold text-primary">Оставьте заявку</h2>
          <p className="mt-2 text-sm text-muted">Мы свяжемся с вами в ближайшее время</p>

          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <input className="rounded-md input" placeholder="Ваше имя" />
            <input className="rounded-md input" placeholder="Телефон или email" />
            <textarea className="col-span-2 rounded-md input" placeholder="Комментарий" />
            <button className="col-span-2 rounded-full btn-primary">Отправить заявку</button>
          </form>
        </section>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 py-8 text-center text-sm text-muted">© 2026 ЖК Солнечный — Все права защищены</footer>
    </div>
  );
}

