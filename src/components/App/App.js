import './App.css';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Header bgColor='blue' />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header bgColor='dark' />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header bgColor='dark' />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header bgColor='dark' />
          <Profile userName='Никита' />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
