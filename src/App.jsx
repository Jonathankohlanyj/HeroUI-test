import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Chip,
  Divider,
  Input,
  Progress,
  Select,
  SelectItem,
  Slider,
  Spinner,
  Switch,
  Tabs,
  Tab,
  Textarea
} from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-5">
      <section className="mx-auto max-w-6xl space-y-6">
        <div className="space-y-3">
          <Chip color="primary" variant="flat">
            Real HeroUI v3
          </Chip>

          <h1 className="text-4xl font-bold tracking-tight">
            HeroUI Playground
          </h1>

          <p className="text-default-500 max-w-2xl">
            A polished mobile-friendly playground for testing HeroUI components.
          </p>
        </div>

        <Tabs aria-label="HeroUI playground tabs" variant="underlined">
          <Tab key="buttons" title="Buttons">
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
          </Tab>

          <Tab key="forms" title="Forms">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Forms</h2>
              </CardHeader>
              <Divider />
              <CardBody className="grid gap-4">
                <Input label="Username" placeholder="Type your username" />
                <Input label="Email" placeholder="you@example.com" type="email" />
                <Textarea label="Message" placeholder="Write something cool..." />

                <Select label="Favorite framework">
                  <SelectItem key="react">React</SelectItem>
                  <SelectItem key="vite">Vite</SelectItem>
                  <SelectItem key="heroui">HeroUI</SelectItem>
                </Select>

                <Checkbox defaultSelected>Enable sigma mode</Checkbox>
                <Switch defaultSelected>Dark mode</Switch>
                <Slider label="Power level" defaultValue={72} />
              </CardBody>
            </Card>
          </Tab>

          <Tab key="status" title="Status">
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

                  <Chip color="success" variant="flat">
                    Online
                  </Chip>

                  <Spinner color="primary" />
                </div>

                <Progress label="Build progress" value={86} color="primary" />
                <Progress label="Chaos level" value={43} color="warning" />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </section>
    </main>
  );
}
