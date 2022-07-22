import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component = {Home} />
        <Route exact path='/home/:id' component={RecipeDetail}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
