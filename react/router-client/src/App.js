import React from "react";
import { Router, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

function App(){
  return (
    <div>
      <h1>MERN APP</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}