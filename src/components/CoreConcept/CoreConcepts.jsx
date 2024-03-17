import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
    return (
        <Section title="CORE CONCEPTS!" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem} />
                ))}
            </ul>
        </Section>
    );
}

export default CoreConcepts;