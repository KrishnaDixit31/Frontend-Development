import { About } from "./components/About";
import { BioProvider } from "./components/CreateContext";
import { Home } from "./components/Home";

function App() {
  return (
    <BioProvider>
      <Home />
      <About/>
    </BioProvider>
  );
}

export default App;
