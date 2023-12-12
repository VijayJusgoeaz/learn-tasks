import React, { useEffect, useState } from "react";

const App = () => {
  const [age, setAge] = useState(0);
  const [user, setUser] = useState({ name: "VJ", age: age, gender: "male" });
  const [users, setUsers] = useState([user]);
  const [state4, setState4] = useState(users);
  const [state5, setState5] = useState(0);
  // todo: merge map and filter together ✅
  // todo: combine 2 useEffect into 1 ✅
  useEffect(() => {
    let sum_of_ages = 0;
    let filter = users
      .filter((user: any) => user.age < 10)
      .map((user) => {
        return { ...user, filter: true };
      });

    let filter1 = users.map((user) => {
      if (user.age < 10) {
        return { ...user, filter: true };
      }
    }).filter((user)=>user);
    

    console.log("users_under_10", filter1);
    setState4(filter);
    console.log("Under 10:", filter);
    // ---------------------------
    // todo: remove map
    sum_of_ages = filter.reduce((total, user) => {
      return total + user.age;
    }, 0);
    setState5(sum_of_ages);
    console.log("sum_of_ages", sum_of_ages);
  }, [users]);

  function handleAgeIncrement() {
    let temp = age + 1;
    setAge(temp);
    console.log("age created now: ", temp);
    let userTemp = { ...user, age: temp };
    setUser(userTemp);
    console.log(userTemp);

    let usersTemp = [...users, userTemp];
    setUsers(usersTemp);
    console.log(usersTemp);
  }

  return (
    <div>
      <div>
        <div>
          {state4.map((user) => {
            return (
              <>
                <p>
                  Name:<span>{user.name}</span>
                  Age:<span>{user.age}</span>
                  Gender:<span>{user.gender}</span>
                </p>
              </>
            );
          })}
        </div>
        <button onClick={handleAgeIncrement}>Add new age</button>
      </div>
    </div>
  );
};

export default App;
