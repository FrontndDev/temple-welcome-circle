import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/church-hero.jpg";
import interior from "@/assets/church-interior.jpg";
import { CHURCH, Page, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${CHURCH} — о храме` },
      { name: "description", content: "История, святыни и жизнь прихода храма Святителя Николая Чудотворца." },
      { property: "og:title", content: `${CHURCH} — о храме` },
      { property: "og:description", content: "История, святыни и жизнь прихода храма Святителя Николая Чудотворца." },
    ],
  }),
  component: Index,
});

const facts = [
  { n: "1824", t: "год освящения" },
  { n: "5", t: "золотых глав" },
  { n: "200 лет", t: "непрерывной молитвы" },
];

const schedule = [
  ["Понедельник – Пятница", "8:00 Литургия · 17:00 Вечерня"],
  ["Суббота", "8:00 Литургия · 17:00 Всенощное бдение"],
  ["Воскресенье", "7:00 Ранняя · 10:00 Поздняя Литургия"],
];

function Index() {
  return (
    <Page>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img src={hero} alt="Храм на закате" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 text-on-image">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Мир дому сему</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">{CHURCH}</h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">Дом молитвы, открытый для каждого. Здесь двести лет совершается Божественная литургия и встречаются люди, ищущие тишины и Бога.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <img src={interior} alt="Иконостас храма" loading="lazy" width={1200} height={1504} className="rounded-sm shadow-2xl" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Что такое храм</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Место встречи человека с Богом</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>Храм — это дом Божий, где совершаются Таинства: Крещение, Венчание, Исповедь и Причастие. Здесь молятся всей общиной, а алтарь освящён для совершения Евхаристии.</p>
            <p>Наш храм построен в 1824 году на средства прихожан и освящён во имя Святителя Николая, архиепископа Мир Ликийских. Он пережил войны и годы запустения, был возвращён верующим в 1991 году и восстановлен трудами всего прихода.</p>
            <p>Главная святыня — чтимая икона Святителя Николая с частицей его мощей, принесённой из итальянского города Бари.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.t}>
              <p className="font-display text-5xl text-accent">{f.n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest opacity-80">{f.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionTitle kicker="Богослужения" title="Расписание служб" />
        <div className="divide-y divide-border border-y border-border">
          {schedule.map(([d, s]) => (
            <div key={d} className="flex flex-col justify-between gap-1 py-5 md:flex-row">
              <span className="font-display text-xl text-primary">{d}</span>
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/clergy" className="inline-block rounded-sm bg-accent px-8 py-3 text-accent-foreground transition-opacity hover:opacity-90">Познакомиться с духовенством</Link>
        </div>
      </section>
    </Page>
  );
}
