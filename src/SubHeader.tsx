import "./SubHeader.css"
import React, { useState } from "react";

export function SubHeader() {
  const [subHeaderClicked, setSubHeaderClicked] = useState(false);
  const [subHeaderName, setSubHeaderName] = useState("");

  function handleSubHeaderClicked() {
    setSubHeaderClicked(subHeaderClicked ? false : true)
  }

  function DisplaySubMenu() {
    if (subHeaderClicked) {
      if (subHeaderName === "View") {
        return (
          <p>test</p>
        )
      } else if (subHeaderName === "Task"){
        return (
          <p>test2</p>
        )
      } else if (subHeaderName === "Settings"){
        return (
          <p>test3</p>
        )
      }
    }
  }

  return (
    <>
      <div className="sub-header">
        <div
          className="view sub-header-tab"
          onClick={() => handleSubHeaderClicked()}
          onMouseEnter={() => setSubHeaderName("View")}
        >View</div>
        <div 
          className="task sub-header-tab"
          onClick={() => handleSubHeaderClicked()}
          onMouseEnter={() => setSubHeaderName("Task")}
        >Task</div>
        <div 
          className="settings sub-header-tab"
          onClick={() => handleSubHeaderClicked()}
          onMouseEnter={() => setSubHeaderName("Settings")}
        >Settings</div>
      </div>

      {/*Then in your JSX:*/}
      <DisplaySubMenu />
    </>
  ) 
}