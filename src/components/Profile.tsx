import { useContext } from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {

    const {user} = useContext(UserContext);
  return (
    <div className='bg-white text-black flex flex-col text-center p-4 max-w-[400px] items-center m-10'>
        <h1 className='p-4'>Profile</h1>
    
    {user ? <><span className='bg-black text-white p-4 m-4 rounded-md w-2/3'>{user.username}</span>
    <span className='bg-black text-white p-4 m-4 rounded-md w-2/3'>{user.password}</span></> : <></>}
    </div>
  )
}

export default Profile;