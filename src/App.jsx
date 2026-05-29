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
}
