import { useState, useEffect } from "react";
import User from "../components/User";
export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
      "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    ); // fetch the data from the API
    const data = await response.json(); // parse the data from string to javascript array
    setUsers(data); // set the data to the state}
  }

  return (
    <main className="app">
      <section className="grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
