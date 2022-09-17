import React from 'react';
//destructuring props in the body
const DestrPropStateFunc = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

//instead of using props, we extract the actual variable
//destructuring props in parameter
// const DestrPropState = ({ name, heroName }) => {
//     return (
//       <div>
//         <h1>
//           Hello {name} a.k.a {heroName}
//         </h1>
//       </div>
//     );
//   };
export default DestrPropStateFunc;
