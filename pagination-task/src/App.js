import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const searchUser = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPage = Math.ceil(searchUser.length / itemPerPage);

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemPerPage;
  const currentUser = searchUser.slice(startIndex, startIndex + itemPerPage);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/users");
    data
      .then((res) => {
        return res.json();
      })
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <p>Search the user</p>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {search &&
        currentUser.map((user) => (
          <div className="userData" key={user.id}>
            <p> name : {user.name}</p>
            <p>username : {user.username}</p>
            <p>email : {user.email}</p>
            <p>
              address :{`user.street , user.suite, user.city, user.zipcode`}
            </p>
          </div>
        ))}

      {search && (
        <div className="page">
          <button onClick={goToPrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            page {currentPage} of {totalPage}
          </span>
          <button onClick={goToNext} disabled={currentPage === totalPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
