import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Background from './image.jpeg';
import Trips from './Components/MyTrips/Trips';
import Home from './Components/MyHome/Home';
import Book from './Components/MyBooks/Book'
import './App.css';

function App() {
  return (
      
    <div className="App">
    	<Router>
      <div>
      	<Switch>
      		<Route path="/" exact>
            <Home />
      		</Route>

        <Route path="/trips" exact>
          <Trips />
    		</Route>

        <Route>
          <Book />
        </Route>
  	    </Switch>
      </div>


      </Router>

    {// if yor need particle animation in all pages un-commnet 
  		//<Particles className='particles' params={particlesOptions} />

    }
  	</div>

  );
}

export default App;
