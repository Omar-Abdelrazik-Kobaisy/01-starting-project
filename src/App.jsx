import {useState} from "react";

import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import TabContent from "./Components/TabContent/TabContent.jsx";

import CORE_CONCEPTS from "./Components/CoreConcept/data.js";
import TAB_BUTTONS from "./Components/TabButton/data.js";
import EXAMPLES from "./Components/TabContent/data.js";

function App() {
  const [clickedButton, setClickedButton] = useState("components");
  
  const handleClick = (item) => {
    console.log("Button " + item + " clicked");
    setClickedButton(item);
    console.log(clickedButton);
  };
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h1 align="center">Core Concepts</h1>
          <ul>
            { CORE_CONCEPTS.map(item => <CoreConcept key={crypto.randomUUID()} {...item}/> ) }
          </ul>
        </section>
        <section id="examples">
          <h1 align="center">Examples</h1>
          <menu>
            { TAB_BUTTONS.map(item =>
                <TabButton
                    key={crypto.randomUUID()}
                    onClick={() => handleClick(item.toLowerCase())}
                    isSelected={clickedButton === item.toLowerCase()}>
                    {item}
                </TabButton>
              )
            }
          </menu>
            <div id="tab-content">
            <TabContent key={crypto.randomUUID()} {...EXAMPLES[clickedButton]}/>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
