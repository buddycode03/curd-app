import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        onChange={handleInputChange}
        name="name"
        value={user.name}
      />
      <label>UserName</label>
      <input
        type="text"
        onChange={handleInputChange}
        name="username"
        value={user.username}
      />
      <button>Update user</button>
      <button
        className="button mutted-button"
        onClick={() => {
          props.setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};
export default EditUserForm;
