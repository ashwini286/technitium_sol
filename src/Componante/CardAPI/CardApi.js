import React, { Fragment, useState } from 'react'
import './Card.css'
function UserCard({user}){
    return(
        <div className='container'>
         <img src={user.avatar}
            alt='sory canot display' />
        <h5>{`${user.id}`}</h5>
        <p>{`${user.email}`}</p>
        <p>{`${user.first_name} ${user.last_name}`}</p>

        </div>
    );
}

function CardApi() {

    const [data, setdata] = useState([])


    async function Getdata() {
        try {
            const response = await fetch('https://reqres.in/api/users/');
            const fatchdata = await response.json()
            setdata(fatchdata.data);
        } catch (error) {
            console.log(error)
        }
    }
    function clickButton(){
        Getdata();
    }


return (
    <Fragment>
<div>
    <button onClick={clickButton} className='btn'> Show user </button>
    <div className='user-list'>
    {data.map((user) => (
        <UserCard user = {user} key={user.id} />

    ))}

    </div>
    
</div>

    </Fragment>
)
}

export default CardApi
