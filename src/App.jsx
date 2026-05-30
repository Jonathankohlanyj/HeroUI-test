import { Button, Card, Input, Chip } from "@heroui/react";

export default function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#09090b",
      color: "white",
      padding: "24px",
      fontFamily: "system-ui"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gap: "24px"
      }}>
        <Chip color="primary" variant="flat">
          HeroUI v3
        </Chip>

        <h1 style={{
          fontSize: "42px",
          fontWeight: "700",
          margin: 0
        }}>
          HeroUI Playground
        </h1>

        <Card style={{ padding: "24px" }}>
          <h2>Buttons</h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </Card>

        <Card style={{ padding: "24px" }}>
          <h2>Inputs</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            <Input label="Username" placeholder="Type here" />
            <Input label="Email" placeholder="you@example.com" />
          </div>
        </Card>
      </div>
    </main>
  );
}
