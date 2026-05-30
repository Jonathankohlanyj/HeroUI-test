import { Button } from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-5">
      <section className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-4xl font-bold">HeroUI Playground</h1>

        <p className="text-zinc-400">
          Stable base. Button works. Next we add components one by one.
        </p>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-xl font-semibold">Buttons</h2>

          <div className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="flat" color="primary">Flat</Button>
          </div>
        </section>
      </section>
    </main>
  );
}
