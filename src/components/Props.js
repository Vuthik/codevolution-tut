import React from 'react';
const Props = (props) => {
  var age = props.age ? ` is ${props.age}` : '';
  var heroName = props.heroName ? ` aka ${props.heroName}` : '';
  return (
    <div>
      <h1>
        {props.name}
        {age}
        {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Props;
