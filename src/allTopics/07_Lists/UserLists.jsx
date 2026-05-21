const UserLists = () => {

    const users = [
        {id: 1, name: "Jhon"},
        {id: 2, name: "Clark"},
        {id: 3, name: "Jane"},
        {id: 4, name: "Henery"},
        {id: 5, name: "Bathell"}
    ]

  return (
    <>
      <h1> Learn List in React</h1>
      {users.map((users) => {
        return (
            <div key={users.id}>
                <h3>{users.name}</h3>
            </div>
        )
      })}


    </>
  );
};

export default UserLists;
