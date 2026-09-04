
import CoreConcept from "../../CoreConcept/CoreConcept.jsx";
import CORE_CONCEPTS from "../../CoreConcept/data.js";
import Section from "../Section.jsx";

const CoreConceptSection = () => {
    return (
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            { CORE_CONCEPTS.map(item => <CoreConcept key={crypto.randomUUID()} {...item}/> ) }
          </ul>
        </Section>
    )
}

export default CoreConceptSection;
