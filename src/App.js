import React, { Component } from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/App.css';


class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return (
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={400}>
            <Switch location={location}>
              <Route exact path="/" render={(routeProps) => (
                <div className="page">
                  <PaletteList palettes={seedColors} {...routeProps} /> 
                </div>
              )} />
              <Route exact path="/:id" render={(routeProps) => (
                <div className="page">
                  <Palette 
                  palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                </div>
              )} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )}
  
}

export default App;
