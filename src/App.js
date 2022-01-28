import React from "react";
import ReactDOM  from "react";
import Info from "./Info"
import Interests from "./Interests";
import About from "./About";

export default function App()
{
  return(
  <div className="content">
    <Info/>
    <About/>
    <Interests/>
  </div>
  )
}