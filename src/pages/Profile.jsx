import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { format } from 'date-fns'
import Swal from 'sweetalert2'
import Loader from '../components/Loader'
import PageError from './PageError'
import useFetchData from '../hooks/useFetchData'

const Profile = () => {

  const { user, updateUser, setUser } = use(AuthContext)
  const { loading, error } = useFetchData()

  const handleUpdate = (e) => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const updatedName = name || user?.displayName;
    const updaterPhoto = photo || user?.photoURL;

    updateUser({ displayName: updatedName, photoURL: updaterPhoto })
      .then(() => {
        setUser({ ...user, displayName: updatedName, photoURL: updaterPhoto })
        form.reset()
        Swal.fire({
          title: "Done",
          text: `You've updated your profile.`,
          icon: "success"
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Ooppss!',
          text: errorMessage,
          icon: 'error'
        });
      })
  }

  if (loading) return <Loader></Loader>;
  if (error) return <PageError></PageError>

  return (
    <div className='w-11/12 mx-auto'>
      <title>My Profile | FunVille Toys</title>
      <div className='py-5 md:py-10'>
        <p className='font-semibold'>Welcome, {user?.displayName}</p>
        <p>{format(new Date(), "EE, dd LLLL uuuu")}</p>
        <div className='h-20 bg-gradient-to-r from-blue-200 to-orange-200 rounded-t-2xl mt-5'></div>
        <div className='mt-5 flex gap-3 items-center relative group'>
          <img className='rounded-full' src={user?.photoURL} alt="" />
          <span className='absolute -bottom-8 left-0 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity'>
            {user?.photoURL || "No Photo"}
          </span>
          <div>
            <p className='font-bold'>{user?.displayName}</p>
            <p className='text-gray-400'>{user?.email}</p>
          </div>
        </div>
        <hr className='mt-5 mb-5 text-gray-600' />

        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='text-center text-2xl md:text-4xl mt-10 font-bold mb-5'>Edit Your Profile</h1>
          <form onSubmit={handleUpdate} className='flex flex-col'>
            <label className="input">

              <input
                type="text"
                placeholder="Name"
                name="name"

              />
            </label><br />

            <label className="input">

              <input name="photo" type="text" placeholder="Photo URL" />
            </label>

            <button className='btn btn-accent text-white mt-5'>Save Changes</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Profile