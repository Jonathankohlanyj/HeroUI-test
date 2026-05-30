import { Button, Card, Chip, CloseButton, Input, Progress, Slider, Switch } from "@heroui/react";

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

          <p className="text-muted">
            Using the real HeroUI v3 Card API.
          </p>
        </div>

        <Card className="w-full items-stretch md:flex-row">
          <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
            <img
              alt="Cherries"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8">
                Become an ACME Creator!
              </Card.Title>

              <Card.Description>
                This is the real HeroUI horizontal card layout.
              </Card.Description>

              <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
            </Card.Header>

            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Only 10 spots
                </span>
                <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span>
              </div>

              <Button className="w-full sm:w-auto">
                Apply Now
              </Button>
            </Card.Footer>
          </div>
        </Card>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-xl font-semibold">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
          <h2 className="text-xl font-semibold">
            Form controls
          </h2>

          <div className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
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
