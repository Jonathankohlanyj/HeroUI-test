import { Button } from "@heroui/react";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "white",
        padding: "32px",
        fontFamily: "system-ui"
      }}
    >
      <h1>HeroUI Button Test</h1>
      <Button color="primary" radius="lg">
        HeroUI Button
      </Button>
    </main>
  );
}
