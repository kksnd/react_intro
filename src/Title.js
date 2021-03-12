import React, { useEffect, useState } from "react";

const Title = (props) => {
  const [name, setName] = useState("My");

  useEffect(() => {
    if (props.count < 0) {
      setName("Bad");
    } else if (props.count < 5) {
      setName("My");
    } else if (props.count < 10) {
      setName("Good");
    } else if (props.count < 20) {
      setName("Great");
    } else {
      setName("Crazy");
    }
  }, [props.count]);

  return (
    <div>
      <h1>
        {name + " "}Counter
      </h1>
    </div>
  );
};

export default Title;