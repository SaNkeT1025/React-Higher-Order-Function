import './App.css'
import Dashboard from './components/Dashboard'
import FirstHoc from './components/FirstHoc'
import FirstWrapped from './components/FirstWrapped'
import IsAuthenticated from './components/IsAuthenticated'

const AuthenticatedUser = IsAuthenticated(Dashboard)

function App() {

  //this is for firsthoc and first wrapped component
  const EnhancedComponent = FirstHoc(FirstWrapped)


  const myUser = {name: 'sanket', isAuthincated: true}

  return (
    <>
      {/*//this is for firsthoc and first wrapped component*/}
      <EnhancedComponent name='sankey'/>
      <FirstWrapped name='developer'/>
      <AuthenticatedUser user={myUser}/>
    </>
  )
}

export default App
