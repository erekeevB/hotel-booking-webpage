import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
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
            <Wrapper />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
