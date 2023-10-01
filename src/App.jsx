import Badge from "./components/Badge";
import "./App.css";
import "./scss/global.scss";
import "./scss/app.scss";

function App() {
  return (
    <>
      <section className="badges">
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
        <Badge rounded={true}>Badge</Badge>
      </section>
    </>
  );
}

export default App;
