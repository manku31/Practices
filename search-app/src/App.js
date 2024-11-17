import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setuser] = useState([]);
  const [search, setSearch] = useState("");

  const searchUser = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const data = axios.get("https://jsonplaceholder.typicode.com/users");
    data
      .then((response) => setuser(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <p>Search the user</p>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search &&
        searchUser.map((user) => (
          <div className="userData" key={user.id}>
            <p> name : {user.name}</p>
            <p>username : {user.username}</p>
            <p>email : {user.email}</p>
            <p>
              address :{`user.street , user.suite, user.city, user.zipcode`}
            </p>
          </div>
        ))}
    </div>
  );
}

export default App;
