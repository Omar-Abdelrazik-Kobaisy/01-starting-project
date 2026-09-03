import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import CORE_CONCEPTS from "../CoreConcept/data.js";

const CoreConceptSection = () => {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map(item => <CoreConcept key={crypto.randomUUID()} {...item}/> ) }
          </ul>
        </section>
    )
}

export default CoreConceptSection;
