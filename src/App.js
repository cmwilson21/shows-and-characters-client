import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ShowList from './components/ShowList'
// import CharacterList from './components/CharacterList'
import NewShow from './components/NewShow';
import PageNotFound from './components/PageNotFound';
import CharacterList from './components/CharacterList';
import ShowDetails from './components/ShowDetails'
import NewCharacter from './components/NewCharacter'

function App() {


  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows" component={ShowList} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/shows/:showId/characters/new" component={NewCharacter} />
        <Route exact path="/shows/new" component={NewShow} />
        <Route exact path="/shows/:id" component={ShowDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
