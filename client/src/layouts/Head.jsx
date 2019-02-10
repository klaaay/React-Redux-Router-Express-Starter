import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Head extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <NavLink to="/">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
