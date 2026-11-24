import { createFileRoute } from "@tanstack/react-router";
import { CHURCH, Page, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/clergy")({
  head: () => ({
    meta: [
      { title: `Духовенство и состав прихода — ${CHURCH}` },
      { name: "description", content: "Настоятель, священники, диакон и служители храма Святителя Николая." },
      { property: "og:title", content: `Духовенство — ${CHURCH}` },
      { property: "og:description", content: "Настоятель, священники, диакон и служители храма." },
    ],
  }),
  component: Clergy,
});

const clergy = [
  { name: "Протоиерей Михаил Соколов", role: "Настоятель храма", text: "Служит в храме с 1998 года. Руководил восстановлением колокольни и росписи храма." },
  { name: "Иерей Алексий Воронцов", role: "Клирик", text: "Окормляет молодёжь прихода и ведёт беседы перед Крещением." },
  { name: "Иерей Сергий Белов", role: "Клирик", text: "Духовник воскресной школы, совершает требы и посещает больных." },
  { name: "Диакон Андрей Морозов", role: "Диакон", text: "Участвует в богослужениях, преподаёт в воскресной школе." },
];

const staff = [
  ["Регент хора", "Елена Кузнецова"],
  ["Староста", "Николай Петрович Ильин"],
  ["Воскресная школа", "Мария Орлова"],
  ["Звонарь", "Пётр Смирнов"],
];

function initials(n: string) {
  return n.split(" ").slice(1).map((w) => w[0]).join("");
}

function Clergy() {
  return (
    <Page>
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionTitle kicker="Состав прихода" title="Духовенство храма" />
        <div className="grid gap-8 sm:grid-cols-2">
          {clergy.map((c) => (
            <article key={c.name} className="flex gap-6 border border-border bg-card p-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-secondary font-display text-2xl text-primary">{initials(c.name)}</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">{c.role}</p>
                <h3 className="mt-1 text-2xl text-primary">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pt-24">
        <SectionTitle kicker="Служители" title="Помощники прихода" />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {staff.map(([r, n]) => (
            <div key={r} className="bg-card p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{r}</p>
              <p className="mt-2 font-display text-xl text-primary">{n}</p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
