import { Button, Chip, Input, Progress, Slider, Switch } from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white p-5">
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-3">
          <Chip color="primary" variant="flat">
            HeroUI v3
          </Chip>

          <h1 className="text-4xl font-bold">
            HeroUI Playground
          </h1>

          <p className="text-zinc-400">
            No cards for now. Button, inputs and controls only.
          </p>
        </div>

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

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-xl font-semibold">Inputs</h2>

          <div className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-xl font-semibold">Controls</h2>

          <div className="grid gap-5">
            <Switch defaultSelected>
              Dark mode
            </Switch>

            <Slider label="Power level" defaultValue={70} />

            <Progress label="Build progress" value={85} color="primary" />
          </div>
        </section>
      </section>
    </main>
  );
}
