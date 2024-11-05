import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../socket'
import { addMessage } from '../redux/chatSlice'
import ScrollableFeed from 'react-scrollable-feed'



const ChatMessages = ({ name }) => {

  const [message, setMessage] = useState('');
  const {messages} = useSelector(state => state.chatReducer)
  // console.log(messages);

  const dispatch = useDispatch()



  useEffect(() => {
    //  listen for 'chat message' event from server
    socket.on('chat message', (message) => {
      // Add the received message to the Redux store
      dispatch(addMessage(message))


    })

    return () => {
      socket.off('chat message')
    }


  }, [dispatch])
  const sendMessage = () => {
    if (message) {
      const newMessage = {
        id: Date.now(),
        text: message,
        user: name, // Use the user's name in the message
        userId: socket.id
      };

      // Emit the message to the server
      socket.emit('chat message', newMessage);

      // Reset input field
      setMessage('');
    }
  };


  return (
    <div className='d-flex flex-column justify-content-between py-3 px-2 ' style={{ backgroundColor: "#e9ecef",height:"25rem",width:'500px',marginLeft:'100px'}}>
        <ScrollableFeed>

      <ul style={{}}>

          {
            messages?.map((msg, index) => (
              <li key={index}>
                {
                  socket.id == msg.userId ?
                    <>
                      <h6 style={{ float: "right"}}> <img className='rounded-circle' width={'25px'} height={'25px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_yo74-55krMtk5WaKdSrW4KGO0JItraHGf5T-hCFjQqVoRWZ2MHNWni5r87QJ2adY-E&usqp=CAU" alt="" /> You : <h5 className='rounded p-1' style={{backgroundColor:'white',display:'inline' }}>{msg.text}</h5></h6>
                      <br />
                    </>

                    :
                    <>
                      <h6 ><img className='rounded-circle' width={'25px'} height={'25px'} src="https://t4.ftcdn.net/jpg/06/41/67/77/240_F_641677758_fQm1okUZnXAvGJF178qROMQbMFaGyWtE.jpg" alt="" /> {msg.user} : <h5 className='rounded p-1' style={{backgroundColor:'white',display:'inline' }}>{msg.text}</h5></h6>

                    </>
                }
              </li>
            ))}

      </ul>
              </ScrollableFeed>


      <div >
        <input
          className='w-75'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.code === 'Enter' ? sendMessage() : null}
        /> <a style={{textDecoration:'none',color:'black'}} href=""> <i style={{fontSize:'15px'}} className="fa-solid fa-microphone ms-2"></i></a>
        <button style={{marginLeft:'35px',marginTop:'-10px'}} onClick={sendMessage} className=' btn btn-warning rounded-circle shadow '><i class="fa-solid fa-arrow-up"></i></button>
      </div>
    </div>
  )
}

export default ChatMessages