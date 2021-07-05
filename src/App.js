import React, { useState} from 'react';
import AddUser from "../src/components/Users/AddUser";
import UsersList from "../src/components/Users/UsersList"


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((usersList) => {
      return [...usersList, { name:userName, age:userAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser = {addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
