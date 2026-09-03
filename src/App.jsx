import {useState} from "react";

import Header from "./Components/Header/Header.jsx";
import CoreConceptSection from "./Components/CoreConceptSection/CoreConceptSection.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import TabContent from "./Components/TabContent/TabContent.jsx";

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
        <CoreConceptSection />
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
