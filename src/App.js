import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state= {
      toggleAnimation: false,
      toggleNav: false,
    }
  }

  toggleNav() {
    console.log('hi');
    this.setState({
      toggleNav: !this.state.toggleNav
    })
  }

  toggleAnimation() {
    this.setState({
      toggleAnimation: !this.state.toggleAnimation
    })
  }

  render() {
    console.log(this.state);
    return (
      <section className="App">
        <header>
          <nav>
            <h2>Start Bootstrap</h2>
            <div className="good-burger" onClick={() => this.toggleNav()}>
              <div className="ingredients">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="nav-menu">
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Service</h3>
              <h3>Contact</h3>
            </div>
          </nav>
        </header>
        <div className={this.state.toggleNav ? 'show-nav mobile-nav' : 'mobile-nav'}>
          <div className="mobile-nav-content">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Service</h3>
            <h3>Contact</h3>
          </div>
        </div>
        <div className="animation">
          <div className="perspective">
            <div className={this.state.toggleAnimation ? "animation-example playing" : 'animation-example'} />
          </div>
          <button onClick={() => {this.toggleAnimation()}}>toggle animation</button>

        </div>
      </section>
    );
  }
}

export default App;


