import { Button, Card, Chip, Input } from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-5">
      <section className="mx-auto max-w-4xl space-y-6">
        <Chip color="primary" variant="flat">
          HeroUI v3
        </Chip>

        <h1 className="text-4xl font-bold">
          HeroUI Playground
        </h1>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Buttons</h2>
          </Card.Header>

          <Card.Content className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold">Inputs</h2>
          </Card.Header>

          <Card.Content className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
          </Card.Content>
        </Card>
      </section>
    </main>
  );
}
