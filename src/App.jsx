import { Button, Card, CardBody, Chip, Input } from "@heroui/react";

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
          <CardBody className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
