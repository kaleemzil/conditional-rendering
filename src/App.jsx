// conditional-rendering = allows yout to control what gets rendered 
//                         in your application based on certain conditions
//                         (show , hide , or change components)

import UserGreeting from "./userGreeting.jsx"


function App() {
 
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Kaleemullah"/>
    </>
  )
}

export default App
