import React from 'react'
import User from './User';

const UserList = ({ userList, searchValue, onClickInvite, inviteUsers, isSuccess, setSearchvalue, setSuccess, status }) => {
    const NewList = userList.filter(item => inviteUsers.includes(item.id))
    return (
        <div className={`${isSuccess ? 'w-full h-full sm:min-h-[584px] flex items-start justify-center' : 'h-full w-full sm:min-h-[584px]'}`}>
            {!isSuccess
                ? (
                    <div className='grid grid-rows-[min-content_1fr_min-content] h-full sm:min-h-[584px]'>
                        <h1 className='font-semibold text-[20px] text-center mb-3 border-b border-gray-100'>MY CONTACTS</h1>
                        {/* User list */}
                        <ul className='mb-3'>
                            {userList.filter(item => {
                                const fName = item.first_name.toLowerCase() + item.last_name.toLowerCase();
                                if (fName
                                    .includes(searchValue.toLowerCase()) || item.email.includes(searchValue.toLowerCase())) return true;
                            })
                                .map(item => <User key={item.id} item={item} onClickInvite={onClickInvite} isInvited={inviteUsers.includes(item.id)} />)}
                        </ul>
                        {/* Search + button invite */}
                        <div className='flex w-full h-[42px] shadow-sm mb-2 '>

                            {/* Search */}
                            <div className='relative w-full shadow-lg border border-gray-200 rounded-md'>
                                <div className="absolute inset-y-0 left-0 pointer-events-none pl-3 text-gray-500 text-sm flex items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                                    </span>
                                </div>
                                <input value={searchValue} onChange={e => setSearchvalue(e.target.value)} type="text" placeholder='Search'
                                    className='rounded-md block border-none focus:border-indigo-500 text-xs pl-9 w-full h-full' />
                            </div>

                            {/* Button invite */}
                            {inviteUsers.length > 0 && (
                                <button onClick={() => setSuccess(true)} {...status}
                                    className='ml-2 border-gray-200 shadow-lg focus:outline-none border rounded-md text-xs p-[6px] text-gray-700 font-semibold h-full w-[30%]'>Invite</button>
                            )}
                        </div>
                    </div>)
                : (
                    <div className='grid grid-rows-[1fr_min-content] w-full h-full sm:min-h-[584px]'>
                        <div className='flex flex-col items-center justify-start w-full mb-2'>
                            <h2 className='font-semibold text-[20px] text-center mb-6 border-b border-gray-200 w-full'>DONE!</h2>
                            <div className="flex -space-x-2 mb-6">
                                {NewList.map(next => <img src={next.avatar} alt="" key={next.id} className='inline-block h-10 w-10 rounded-full ring-2 ring-white'></img>)}
                            </div>
                            <h3 className='text-center mb-3 text-[16px] font-normal w-full'>{inviteUsers.length} users are invited </h3>
                            {/* Users */}
                            <ul className='w-full'>
                                {NewList.map(item =>
                                    <li key={item.id} className='flex justify-between items-center py-3 shadow-md mb-2 px-3'>
                                        <div className='flex'>
                                            <img className='w-[32px] h-[32px] mr-3 rounded-3xl shadow-lg' src={item.avatar} alt="Avatar" />
                                            <div className='flex flex-col'>
                                                <h4 className='text-sm font-semibold'>{item.first_name} {item.last_name}</h4>
                                                <p className='text-xs text-zinc-400 '>{item.email}</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* Close */}
                        <a href="" className='text-center font-semibold shadow-lg border border-gray-200 rounded-md block focus:border-indigo-500 text-sm w-full py-[9px] mb-2'>Close</a>
                    </div>
                )
            }
        </div>
    )
}

export default UserList