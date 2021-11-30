import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from './component/Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './component/BlogDetails';
import NotFound from './component/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>   
  );
}

export default App;
