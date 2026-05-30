import {
  Button,
  Card,
  Chip,
  Input,
  Progress,
  Slider,
  Switch,
  Textarea
} from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-5">
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-3">
          <Chip color="primary" variant="flat">
            HeroUI v3
          </Chip>

          <h1 className="text-4xl font-bold">
            HeroUI Playground
          </h1>

          <p className="text-muted">
            Real HeroUI v3 components.
          </p>
        </div>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Buttons</h2>
          </Card.Header>

          <Card.Body className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Forms</h2>
          </Card.Header>

          <Card.Body className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
            <Textarea label="Message" placeholder="Write something..." />
            <Switch defaultSelected>Dark mode</Switch>
            <Slider label="Power level" defaultValue={70} />
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Status</h2>
          </Card.Header>

          <Card.Body className="grid gap-4">
            <Progress label="Build progress" value={85} color="primary" />
            <Progress label="Chaos level" value={45} color="warning" />
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}
