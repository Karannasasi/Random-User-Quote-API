import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function Gadget() {
  const [Quote1, loadQuote] = useState(new Date());
  const [List, setList] = useState([
    {
      id: 5,
      content:
        "Treat people as if they were what they ought to be, and you help them to become what they are capable of being.",
      author: "Johann Wolfgang von Goethe",

      length: "111",
      dateAdded: "2020-11-13",
    },
  ]);

  const gadgetListComponent = () => {
    return List.map((quotes) => {
      return (
        <Quote
          key={quotes.id}
          content={quotes.content}
          author={quotes.author}
          length={quotes.length}
          dateAdded={quotes.dateAdded}
        />
      );
    });
  };

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((responses) => {
        return responses.json();
      })
      .then((responsesData) => {
        setList((List) => [...List, [responsesData][0]]);
      });
  }, [Quote1]);

  const addUserHandler = () => {
    loadQuote(new Date());
  };

  return (
    <div className="container">
      <ul className="list-group">{gadgetListComponent()}</ul>
      <button onClick={addUserHandler} className="btn btn-danger mt-1 mb-4">
        Add Quote
      </button>
    </div>
  );
}

export default Gadget;
