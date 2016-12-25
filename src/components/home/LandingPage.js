import React, {Component} from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props)
  }
  _onSignUpClick() {
    console.log('clicked sign up');
  }
  _onSignInClick() {
    console.log('clicked sign in');
  }
  render() {
    return (
      <div>
        <div className="sign-up">
          <button onClick={this._onSignUpClick.bind(this)}>SIGN UP</button>
        </div>
        <div className="sign-in">
          <button onClick={this._onSignInClick.bind(this)}>SIGN IN</button>
        </div>
      </div>
    );
  }
}
export default LandingPage;
