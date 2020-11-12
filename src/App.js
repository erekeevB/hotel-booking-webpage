import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import 'react-datepicker/dist/react-datepicker.css';

class App extends React.Component {

  componentDidMount = () => {

    //store.dispatch(getSetAuth());

  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store} >
          <div className="App">
            <Main />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
