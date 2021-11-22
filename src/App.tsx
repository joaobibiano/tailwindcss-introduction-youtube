import "./App.css";
import { Link } from "./components/Link";
import { H1, H2 } from "./components/Typography";

function App() {
  return (
    <div
      className="
    h-screen
    flex
    flex-col
    justify-center
    items-center"
    >
      <H1 className="underline">
        O melhor <br />
        <span className="uppercase text-purple-700">açaí</span>
        <br />
        do Brasil
      </H1>

      <H2>Está chegando na sua cidade</H2>

      <Link href="/cadastro">Seja notificado &#8594;</Link>
    </div>
  );
}

export default App;
