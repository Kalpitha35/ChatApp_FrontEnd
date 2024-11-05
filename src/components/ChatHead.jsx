import React from 'react'

const ChatHead = ({name}) => {
  return (
    <div style={{minHeight:'30px',width:'500px',marginLeft:'100px'}} className='mt-5 bg-warning p-2 d-flex justify-content-between '>
        <div className='d-flex'>
            <img className='rounded-circle ' width={'40px'} height={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_yo74-55krMtk5WaKdSrW4KGO0JItraHGf5T-hCFjQqVoRWZ2MHNWni5r87QJ2adY-E&usqp=CAU" alt="" />
            <h2 className="text-white ms-3">{name}</h2>
        </div>
        <div  className='d-flex p-3'>
        <a style={{textDecoration:'none',color:'black'}} href=""> <i class="fa-solid fa-video "></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration:'none',color:'black'}} href=""> <i class="fa-solid fa-phone"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a style={{textDecoration:'none',color:'black'}} href="">  <i class="fa-solid fa-ellipsis-vertical"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </div>
  )
}

export default ChatHead