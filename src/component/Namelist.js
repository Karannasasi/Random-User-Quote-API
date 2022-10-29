import React from "react";

function Namelist(props) {
  return (
    <li className="list-group-item p-4 mb-1 active shadow">
      <div className="row align-items-center">
        <div className="col-3">
          <img
            src={props.avatar}
            className="border border-white border-4 rounded-circle"
          />
        </div>
        <div className="col-9">
          <h4>{props.name}</h4>
          <p>Age: {props.age}</p>
          <p>
            <small>
              City: {props.city} | Email: {props.email}
            </small>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Namelist;
