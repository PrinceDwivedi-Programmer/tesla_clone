import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
    <div className="App">
      <Header/>
      <Home />
    </div>
    </Provider>
  );
};

export default App;
