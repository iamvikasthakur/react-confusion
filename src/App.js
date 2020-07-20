import React, {Component} from 'react';
<<<<<<< HEAD
import Main from './components/MainComponent';
=======
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
// import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
>>>>>>> master
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
<<<<<<< HEAD

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    );
  }
=======
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

   render() {
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </div>
    );
  }

>>>>>>> master
}

export default App;
