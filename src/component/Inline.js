import React from "react";
import { useState, useEffect } from "react";

import Namelist from "./Namelist";

function Inline() {
  const [loadData, setLoadData] = useState(new Date());
  const [List, setList] = useState([
    {
      id: new Date(),
      picture: { medium: "https://randomuser.me/api/portraits/med/men/4.jpg" },
      name: {
        first: "Buddika",
        last: "Karannagoda",
      },

      location: { city: "Kalutara" },
      email: "jucinara.rodrigues@example.com",
      dob: { age: "45" },
    },
  ]);

  const namelistComponent = () => {
    return List.map((aName) => {
      return (
        <Namelist
          key={aName.id}
          avatar={aName.picture.medium}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          age={aName.dob.age}
        />
      );
    });
  };

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setList((List) => [...List, responseData.results[0]]);
      });
  }, [loadData]);

  const addUserHandler = () => {
    setLoadData(new Date());
  };

  return (
    <div className="container">
      <ul className="list-group">{namelistComponent()}</ul>
      <button className="btn btn-success shadow" onClick={addUserHandler}>
        Add User
      </button>
    </div>
  );
}
export default Inline;
