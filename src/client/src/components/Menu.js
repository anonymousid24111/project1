import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus  = [
{
    name:'Home',
    to : '/',
    exact : true
},
{
    name:'Pay',
    to : '/pay',
    exact : false
},

{
    name:'Guide',
    to : '/guide',
    exact : false
},
{
    name:'Contact',
    to : '/contact',
    exact : false
},
{
    name:'Login',
    to : '/Login',
    exact : false
},
{
    name:'Signup',
    to : '/Signup',
    exact : false
}
];


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  var active;
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        active = match ? active : "";
        return (
          <li className="mynav-item">
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  HandleClick =(ev)=>{
    document.cookie="email=;";
    alert("Logout Successfully!");
  }
  render() {
    return (
        <div className="mynavbar" style={{width: 100 + 'em'}}>
          <ul className="mynavbar-nav" style={{width: 100 + 'em'}}>
            {this.showMenus(menus)}
          <li className="mynav-item"><a href="#" onClick={ev=>this.HandleClick(ev)}>Logout</a></li>
          </ul>
        </div>
    );
  }
}

export default Menu;
