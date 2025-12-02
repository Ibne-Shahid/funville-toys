import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';
import PageError from './PageError';
import useFetchData from '../hooks/useFetchData';

const Profile = () => {

  const { user, updateUser, setUser } = use(AuthContext);
  const { loading, error } = useFetchData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const updatedName = name || user?.displayName;
    const updatedPhoto = photo || user?.photoURL;

    updateUser({ displayName: updatedName, photoURL: updatedPhoto })
      .then(() => {
        setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto });

        Swal.fire({
          title: "Updated!",
          text: "Your profile has been updated successfully.",
          icon: "success"
        });
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error'
        });
      });
  };

  if (loading) return <Loader />;
  if (error) return <PageError />;

  return (
    <div className="w-11/12 mx-auto py-8">

      <title>My Profile | FunVille Toys</title>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Your Profile</h1>
        <p className="text-gray-500 mt-1">
          {format(new Date(), "EE, dd LLLL uuuu")}
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Side – User Info Card */}
        <div className="bg-white/40 backdrop-blur-lg shadow-xl p-6 rounded-2xl border border-white/30">

          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white mb-4"
            />

            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-500 text-sm">{user?.email}</p>

            <div className="mt-4 w-full h-[1px] bg-gray-300/40"></div>

            <p className="mt-4 text-gray-600 text-sm text-center px-3">
              Update your personal details on the right. Make sure you use a valid photo URL.
            </p>
          </div>
        </div>

        {/* Right Side – Update Form */}
        <form
          onSubmit={handleUpdate}
          className="bg-white/60 backdrop-blur-lg shadow-xl p-6 rounded-2xl border border-white/40 flex flex-col"
        >

          <h2 className="text-xl font-bold mb-5 text-center">Edit Profile</h2>

          <label className="mb-4">
            <p className="text-sm font-semibold mb-1 text-gray-700">Name</p>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
              placeholder="Enter new name"
            />
          </label>

          <label className="mb-4">
            <p className="text-sm font-semibold mb-1 text-gray-700">Photo URL</p>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
              placeholder="Enter new photo URL"
            />
          </label>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold shadow-md hover:scale-[1.02] transition"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;
