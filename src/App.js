import './App.css'
import NavBar from './components/NavBar'
import ChatBox from './components/ChatBox'
import Welcome from './components/Welcome'
import Loading from './components/Loading'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user, loading] = useAuthState(auth)

  return (
    <div className="App">
      <NavBar />
      {loading ? (
        <Loading />
      ) : !user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  )
}

export default App
