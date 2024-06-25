import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './pages/userList'
import { Provider } from 'react-redux'
import Store from './redux/store/index'

function App() {
  const get_store = Store();

  return (
    <>
      <Provider store={get_store}>
        <UsersList />
      </Provider>
    </>
  )
}

export default App
