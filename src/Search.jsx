import { useEffect, useState } from "react";
import { API_URL } from "./constants";

function Search({ setUsers, onClean }) {

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.length === 0) return
    fetch(`${API_URL}?q=${search}`)
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }

  useEffect(() => {
    if (search.length === 0)
      onClean()
  }, [search]);

  return (
    <>
      <div className="my-4 flex justify-center items-center gap-x-3">
        <input type="text" placeholder="Search by name" className="px-2" onChange={(e) => setSearch(e.target.value)} />
        <button className="px-5 rounded-md bg-stone-300 hover:bg-stone-200 duration-75" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
}

export default Search;