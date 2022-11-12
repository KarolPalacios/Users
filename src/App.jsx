import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersList from './Components/UsersList'
import UsersForm from './Components/UsersForm'
import './App.css'

function App() {

  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null)

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
  }

  console.log(usersList);

  return (
    <div className="App">
        <UsersForm 
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
        />

    <h2 className='title'>Users</h2>

      <UsersList 
      usersList={usersList}
      selectUser={selectUser}
      deleteUser={deleteUser}
      />
    </div>
  )
}

export default App
