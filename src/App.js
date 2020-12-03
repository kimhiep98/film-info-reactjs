import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Movie from './SingleMovie'
import { Children } from 'react';
import Home from './Home'


function App() {
  return (
    <section className="movies-control">
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/movies/:id' children={<Movie/>} >
        </Route>
      </Switch>
      
     
    </section>
  );
}

export default App;
