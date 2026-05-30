import { Button } from "@heroui/react";

export default function App() {
  return (
    <main className="min-h-screen bg-red-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Tailwind Test
      </h1>

      <div className="flex gap-4">
        <button className="rounded-2xl bg-green-500 px-5 py-3 text-white">
          Tailwind Button
        </button>

        <Button color="primary">
          HeroUI Button
        </Button>
      </div>
    </main>
  );
}
