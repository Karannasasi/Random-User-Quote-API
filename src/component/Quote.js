import React from "react";

function Quote(props) {
  return (
    <li className="list-group-item list-group-item-danger p-4 mt-1 shadow ">
      <div className="row align-items-center">
        <div className="col-5">
          <h4>{props.author}</h4>
          <p>length: {props.length} </p>
          <p>{props.dateAdded} </p>
        </div>
        <div className="col-7">
          <p>
            <em>"{props.content} "</em>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Quote;
