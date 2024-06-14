/* eslint-disable no-unused-vars */
import { useState } from "react";
import UserTable from "./tables/usertable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

function App() {
  const usersData = [
    // { id: 1, name: "jova", username: "hammer" },
    // { id: 2, name: "tony", username: "elite" },
    // { id: 3, name: "shearp", username: "melboan" }
  ];

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(user.id);
  };
  //[delete]
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false)
    console.log(users);
  };
  const [users, setUsers] = useState(usersData);

  //[update]
  const [editing, setEditing] = useState(false);

  const initialformstate = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialformstate);
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CURD App With HOOKS</h1>

      <div className="flex-row">
        <div className="flex-large">
          {editing?(<div>
            <h2>Edit user</h2>
            <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
          </div>):(
            <div>
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
          </div>
          )
          }
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
