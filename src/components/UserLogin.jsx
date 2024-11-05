import React, { useState } from 'react'
import ChatHead from './ChatHead';
import ChatMessages from './ChatMessages';

const UserLogin = () => {

    const [name,setName] = useState('');
    const [isNameSet,setIsNameSet] = useState(false);

    console.log(name);
    console.log(!isNameSet);
    
    const handleSetName = () =>{
        if(name) {
            setIsNameSet(true); 
        }
    }
  return (
   <>
        
       {
        !isNameSet  ?
        <>
            <h1 style={{marginLeft:'300px',marginTop:'100px'}} className=' fw-bolder text-black'>CHAT APP</h1>
            <div style={{height:'400px', width:'800px'}} className="d-flex ms-3 shadow flex-row justify-content-center align-items-center">
                <div>
                <img height={'300px'} width={'300px'} className='border rounded mt-2 img-fluid' src="https://cdn.dribbble.com/users/795597/screenshots/3574014/media/af53cb8e6afe0a3a1d18eb398db22962.gif" alt="" />
                </div>
                <div className='ms-5 d-flex flex-column justify-content-center'>
                <input value={name} onChange={(e)=>setName(e.target.value)} style={{height:'40px',width:'250px',borderRadius:'10px',border:'5px solid white'}} className='ms-5 bg-white' type="text" placeholder='Enter your name here' />
                <button onClick={handleSetName} style={{width:'150px',height:'50px',borderRadius:'10px',fontSize:'18',marginLeft:'90px'}} className='mt-4 fw-bolder bg-warning text-light'>Get Started</button>
                </div>
            </div>

        </>
        :
        <div className='w-100' >
                <ChatHead name={name}/>
                <ChatMessages name={name}/>
              
            </div>
        }
   </>
  )
}

export default UserLogin