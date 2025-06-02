export default function MyProfile() {
  const user = {
    firstName: 'Sarah',
    lastName: 'Ben Ali',
    email: 'sarah.benali@example.com',
    phone: '+33 6 12 34 56 78',
    address: '45 Rue des Lilas, Paris',
    city: 'Paris',
    country: 'France',
    avatarUrl: '/avatar-placeholder.png', // à remplacer par ton système d’upload
  };

  return (
    <div className="bg-white p-8 rounded-xl mt-14 shadow-md max-w-3xl mx-auto">
      <div className="flex items-center space-x-6 mb-6">
        <img
          src={user.avatarUrl}
          alt="Profile avatar"
          className="w-24 h-24 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <p className="font-semibold">Phone</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p className="font-semibold">City</p>
          <p>{user.city}</p>
        </div>
        <div>
          <p className="font-semibold">Country</p>
          <p>{user.country}</p>
        </div>
        <div>
          <p className="font-semibold">Address</p>
          <p>{user.address}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
