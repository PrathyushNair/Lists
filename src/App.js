
import './App.css';

import Opsys from './components/mobileopsys';
import Manufact from './components/mbmanu';
import Ul from './components/operatingsys';
import M from './components/manufacturers';
function App() {
  return (
    // <div className="App">
      <header >
        <div id="opsys">
            <Opsys></Opsys>
            <Ul></Ul>
        </div>
        <div id="manu">
            <Manufact></Manufact>
           <M></M>
        </div>
       

      </header>
    // </div>
  );
}

export default App;
