import React from 'react'
import Child from './Child';
// import App from './App';

const Parent = ( user ) => {
   const {name , roll} = user;
  return (
    <div>
     my name is {name } and my age is {roll }
      <Child {...user} />
    </div>
  )
};

export default Parent;
