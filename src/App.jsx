import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleOnSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* To pass arguments in a function put the entire function in an anonymous function  */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleOnSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleOnSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleOnSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleOnSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic.</p>) : (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
