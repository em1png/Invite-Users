import React from 'react'

const User = ({ item, isInvited, onClickInvite }) => {
    return (
            <li className='flex justify-between items-center py-3 shadow-md mb-2 px-3'>
                <div className='flex items'>
                    <img className='w-[45px] h-[45px] mr-3 rounded-3xl shadow-lg' src={item.avatar} alt="Avatar" />
                    <div className='flex flex-col'>
                        <h4 className='text-sm font-semibold'>{item.first_name} {item.last_name}</h4>
                        <p className='text-xs text-zinc-400 '>{item.email}</p>
                    </div>
                </div>
                <button onClick={() => onClickInvite(item.id)}>
                    {isInvited
                        ? 
                        <svg fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} viewBox="0 0 64 64" className="rounded-lg transition-all w-8 h-8 p-1 opacity-50 hover:stroke-[5]">
                            <path d="M14 31h36M1 1h62v62H1z" />
                        </svg>                      
                        :
                        <svg fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} viewBox="0 0 64 64" className="rounded-lg transition-all w-8 h-8 p-1 opacity-60 hover:stroke-[5]">
                            <path d="M32 50V14M14 32h36 M1 1h62v62H1z" />
                        </svg>
                    }
                </button>
            </li>
    )
}

export default User