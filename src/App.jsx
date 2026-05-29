export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#09090b",
      color: "white",
      padding: "32px",
      fontFamily: "system-ui"
    }}>
      <h1>BUILD GREEN TEST</h1>
      <p>If you see this, deployment works.</p>
      <button style={{
        background: "#006fee",
        color: "white",
        border: "0",
        padding: "14px 20px",
        borderRadius: "14px",
        fontWeight: "700"
      }}>
        Test Button
      </button>
    </main>
  );
}            <Button color="warning">Warning</Button>
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
