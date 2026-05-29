import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
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
        <Chip color="primary" variant="flat">
          Real HeroUI
        </Chip>

        <h1 className="text-4xl font-bold">
          HeroUI Playground
        </h1>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Buttons</h2>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-wrap gap-3">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="flat" color="primary">Flat</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Forms</h2>
          </CardHeader>
          <Divider />
          <CardBody className="grid gap-4">
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
            <Textarea label="Message" placeholder="Write something..." />
            <Switch defaultSelected>Dark mode</Switch>
            <Slider label="Power level" defaultValue={70} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Status</h2>
          </CardHeader>
          <Divider />
          <CardBody className="grid gap-4">
            <Progress label="Build progress" value={85} color="primary" />
            <Progress label="Chaos level" value={45} color="warning" />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
