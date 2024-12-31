import { useEffect, useState } from 'react'
import Search from './Search';
import { API_URL } from './constants';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    callUsers()
  }, []);

  const callUsers = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(setUsers)
  }

  return (
    <>
      <div className='w-[1000px] mx-auto mt-10'>
        <h1 className='text-center font-semibold text-3xl'>
          Users list
        </h1>

        <div className='w-full mt-5'>

          <Search setUsers={setUsers} onClean={() => callUsers()} />

          <table className='w-2/3 mx-auto border bg-slate-100 rounded-lg overflow-hidden'>
            <thead>
              <tr className='border-b-2'>
                <th className='text-left pl-4'>
                  Name
                </th>
                <th className='text-left pl-4'>
                  Age
                </th>
                <th>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr>
                  <td className='text-left py-0.5 pl-4'>
                    {user.name}
                  </td>
                  <td className='text-left py-0.5 pl-4'>
                    {user.age}
                  </td>
                  <td className='text-center py-0.5'>
                    {user.status ? "Active" : "Dead"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
