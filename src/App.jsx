import Header from "./Components/Header/Header.jsx";
import CoreConceptSection from "./Components/CoreConceptSection/CoreConceptSection.jsx";
import Examples from "./Components/ExamplesSection/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptSection />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
