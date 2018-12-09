import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import routes from './routes'
import './App.css'
import Header from './components/Dumb/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {routes.map(route => <Route key={route.name} {...route} /> )}
        </Switch>
      </div>
    )
  }
}

export default App;
