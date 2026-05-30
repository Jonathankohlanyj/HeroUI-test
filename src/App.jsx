import { Button } from "@heroui/react";

export default function App() {
  return (
    <main>
      <section className="playground">
        <h1 className="title">HeroUI Playground</h1>

        <p className="desc">
          Stable base. No Tailwindpoop layout dependency.
        </p>

        <section className="panel">
          <h2>Buttons</h2>

          <div className="button-row">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="flat" color="primary">Flat</Button>
          </div>
        </section>
      </section>
    </main>
  );
}
