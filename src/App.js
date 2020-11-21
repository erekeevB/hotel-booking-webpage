import './App.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import 'react-datepicker/dist/react-datepicker.css';
import Preloader from './components/Preloader/Preloader';
import { initializeThunk } from './redux/appReducer';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount = () => {
      
    this.props.initializeThunk();

  }

  render() {
    return (
        <div className="App">
            {!this.props.initialized ? 
                <Preloader />:
                <Wrapper />
            }
        </div>
    );
  }
}

let mStP = (state) => ({

    initialized: state.app.initialized

})

export default withRouter(connect(mStP, {initializeThunk})(App));
