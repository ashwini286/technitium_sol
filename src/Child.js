import React from 'react'

function Child({user}) {
  const {name , roll} = user;
  return (
    <div>
      child = my name is {name } and my age is {roll }
    </div>
  );
};

export default Child;
