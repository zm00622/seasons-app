import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   // THIS IS THE ONLY TIME we do direct assignment
  //   // to this.state
  //   this.state = { lat: null, errorMessage: '' };
  //
  // }

  state = { lat: null, errorMessage: '' }; 
  //This one line of code equals the constructor function commented out above!
  //You can use this in place of the constructor function.
  //Babel compiles this down into a constructor function for you.


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <Spinner message="Please accept location request" />;
  }


  // React says we have to define render!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));




// My code below did not work. The code above is copied from branch 62 on Stephen Griders gitHub


// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props); //super makes sure our contructor can use React.Component. You type this every time you define your constructor inside a class based component.
//     // In the future, if error message says super() hasn't been called, then call super. Calling super looks like the code directly above this comment.
//
//     // THIS IS THE ONLY TIME we do direct assignment
//     // to this.state
//     this.state = { lat: null, errorMessage: '' };
//
//     window.navigator.geolocation.getCurrentPosition(
//       position => {
//         // we call setState!!!!
//         // Always use setState to update state
//         this.setState({ lat: position.coords.latitude });
//
//         // Notice we did NOT do the following!
//         // this.state.lat = position.coords.latitude
//       },
//       err => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }
//
//   // React says we have to define render!!
//   render() {
//     return (
//       <div>
//         Latitude: {this.state.lat}
//         <br />
//         Error: {this.state.errorMessage}
//       </div>;
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );
