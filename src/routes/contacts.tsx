import { createFileRoute } from "@tanstack/react-router";
import { CHURCH, Page, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: `Контакты — ${CHURCH}` },
      { name: "description", content: "Адрес, телефон и часы работы храма Святителя Николая." },
      { property: "og:title", content: `Контакты — ${CHURCH}` },
      { property: "og:description", content: "Адрес, телефон и часы работы храма." },
    ],
  }),
  component: Contacts,
});

const items = [
  ["Адрес", "ул. Примерная, 1 (уточняется)"],
  ["Телефон", "+7 (000) 000-00-00"],
  ["Храм открыт", "Ежедневно с 7:00 до 19:00"],
  ["Требы", "Крещение, венчание, отпевание — по записи у свечного ящика"],
];

function Contacts() {
  return (
    <Page>
      <section className="mx-auto max-w-3xl px-6 pt-20">
        <SectionTitle kicker="Как нас найти" title="Контакты" />
        <dl className="divide-y divide-border border-y border-border">
          {items.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-6 md:grid-cols-3">
              <dt className="font-display text-xl text-primary">{k}</dt>
              <dd className="text-muted-foreground md:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Page>
  );
}
