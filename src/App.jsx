import React, { useEffect, useState } from 'react'
import Skeleton from './components/Skeleton'
import UserList from './components/UserList'


function App() {
  const [users, setUsers] = useState([])
  const [inviteUsers, setInviteUsers] = useState([])
  
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchvalue] = useState('')
  const [isSuccess, setSuccess] = useState(false)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json()
        .then((json) => {
          setUsers(json.data)
        })

        .catch(err => {
          console.warn(err)
          alert('Error with getting users')
        })

        .finally(() => setLoading(false))
      )
  }, [])

  const onClickInvite = (ID) => {
    if (inviteUsers.includes(ID)) 
      setInviteUsers(prev => prev.filter(pID => pID !== ID));
    else 
      setInviteUsers(prev => [...prev, ID])
  }

  return (
    <div className='h-screen w-screen sm:min-h-screen sm:bg-zinc-900 flex items-center justify-center box-border'>
      <div className='w-full h-full sm:w-[400px] sm:h-fit bg-white py-3 px-6 rounded-xl'>
        {isLoading
          ? (<div>
            <Skeleton /> <Skeleton /> <Skeleton />
          </div>)
          : < UserList
            userList={users}
            searchValue={searchValue}
            onClickInvite={onClickInvite}
            inviteUsers={inviteUsers}
            isSuccess={isSuccess}
            setSuccess={setSuccess}
            setSearchvalue={setSearchvalue}
          />
        }
      </div>
    </div>

  )
}

export default App
