import React from 'react';
const heading = {
  fontSize: '72px',
  color: 'blue',
};
function Inline() {
  return (
    <div>
      {/* this className error is locally retrieved from App component through css styling */}
      {/* no need to import */}
      {/* this may lead to conflict */}
      <h1 className="error">Error</h1>


      {/* cannot be used in child component  */}
      {/* <h1 className={styles.success}>Success</h1> */}
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
