import { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.js";
import Headers from "./components/Headers.js";
import TabButton from './components/TabButton.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState("please click a button");



  function handleSelect(selectedButton) {
    //selectedButton => 'components',jsx,props,'state'

    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  return (
    <div className="App">
      <Headers />
      <main>
        <section id='core-concepts'>       <h2>it's time to start</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts     {...CORE_CONCEPTS[1]} />
            <CoreConcepts     {...CORE_CONCEPTS[2]} />
            <CoreConcepts     {...CORE_CONCEPTS[3]} />

          </ul></section>
        <section id='examples'>
          <h2>example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>

          </menu>
          {selectedTopic}


        </section>

      </main>

    </div>
  );
}

export default App;
