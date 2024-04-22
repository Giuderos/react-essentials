import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleOnSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return (
        <Section id='examples' title='Examples'>
            <Tabs
                buttons={
                    <>
                        {/* To pass arguments in a function put the entire function in an anonymous function  */}
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleOnSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleOnSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleOnSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleOnSelect('state')}>State</TabButton>
                    </>
                }>{!selectedTopic ? (<p>Please select a topic.</p>) : (
                    <div id='tab-content'>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                )}</Tabs>
        </Section>
    )
}