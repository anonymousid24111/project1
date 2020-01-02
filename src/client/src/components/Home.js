import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';

import routes from "./../routes";

class Home extends Component {
  showMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => { 
        return (
          <Route 
            key={index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
          );
      });
    }
    return <Switch > {result} < /Switch> ;
  };
  render() {
    return (
      <div className="container">
        <div className="myrow">
            {this.showMenus(routes) }
        </div>
      </div>
    );
  };
}

export default Home;
