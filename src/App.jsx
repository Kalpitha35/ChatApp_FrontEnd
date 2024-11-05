
import { Provider } from 'react-redux'
import './App.css'
import UserLogin from './components/UserLogin'
import chatStore from './redux/chatStore'
import { useEffect } from 'react'
import socket from './socket'


function App() {
  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])
  
  return (
    <>
    <Provider store={chatStore}> <UserLogin/></Provider>
    </>
  )
}

export default App
