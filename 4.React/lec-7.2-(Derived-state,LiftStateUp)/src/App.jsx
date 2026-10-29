import { DerivedState } from "./components/DerivedState";
import { LiftingState } from "./components/LiftStateUp";

function App() {
  return (
    <section>
      <DerivedState />
      <hr />
      <LiftingState />
    </section>
  );
}

export default App;
