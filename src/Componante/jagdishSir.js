import logo from './logo.svg';
import './App.css';
import List from './components/molecules/list/list';
import { number , names } from './components/const';
import RegistrationForm from './components/organisms/form/form';
import { useState } from 'react';
import Card from './components/atoms/card/card';
import axios from 'axios';




function App() {


   async function getUsers () {


    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then((response)=> response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error))


    // axios.get('https://dog.ceo/api/breeds/image/random')
    // .then((response)=> console.log({data : response.data}) )
    // .catch((error) => console.log(error))


    // const response = await fetch('https://dog.ceo/api/breeds/image/random')
    // const data = await response.json()
    // console.log(data)


    // const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    // console.log(response.data)

    // const data = await axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // });

    

 
  }



  return (
    <div className="App">
      <button onClick={getUsers}>Get User</button>
    </div>
  );
}

export default App;