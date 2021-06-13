import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {ButtonCheck } from './Components/semantic-ui-buttons';
import { Button, List } from 'semantic-ui-react'
import {Lable} from './Components/semantic-ui-label';
import Portfolio from './Components/Portfolio';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="logic">
          <h6>Normal heading</h6>
          <List bulleted>
            <List.Item><Link to="/home">barlingan</Link></List.Item>
            <List.Item><Link to="/towel">new-bara</Link></List.Item>
            <List.Item><Link to="/portfolio">Portfolio</Link></List.Item>
          </List>
        </header>
      </div>
        <div style={{border:"1px solid black"}}>
            <Route path="/home" component={ButtonCheck}/> 
            <Route path="/towel" render={()=>
            <div>
              <label>Generated</label>
              <Button primary>Primary</Button>
              <Button loading secondary>
              Loading
              </Button>
              <Lable/>
            </div>
          }/>
          <Route path="/portfolio" component={Portfolio}/>  
      </div>
    </Router>
    
  );
}

export default App;
