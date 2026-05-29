import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
  Progress,
  Slider,
  Spinner,
  Switch,
  Textarea
} from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-5">
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-3">
          <Chip color="primary" variant="flat">HeroUI v3</Chip>
          <h1 className="text-4xl font-bold">HeroUI Playground</h1>
          <p className="text-default-500">Real HeroUI components, mobile friendly.</p>
        </div>

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
            <Button isLoading color="primary">Loading</Button>
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
            <Slider label="Power level" defaultValue={72} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Status</h2>
          </CardHeader>
          <Divider />
          <CardBody className="space-y-5">
            <div className="flex items-center gap-4">
              <Badge content="9+" color="danger">
                <Avatar name="H" />
              </Badge>

              <Chip color="success" variant="flat">Online</Chip>
              <Spinner color="primary" />
            </div>

            <Progress label="Build progress" value={86} color="primary" />
            <Progress label="Chaos level" value={43} color="warning" />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}
