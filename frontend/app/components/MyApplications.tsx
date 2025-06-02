export default function MyApplications() {
  // Exemple de postulations
  const applications = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'SkincareSoft',
      status: 'Pending',
      appliedAt: '2025-05-12',
    },
    {
      id: 2,
      title: 'React Engineer',
      company: 'BeautyTech',
      status: 'Interview',
      appliedAt: '2025-05-18',
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">My Applications</h3>
      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-yellow-600">{app.title}</h4>
              <p className="text-gray-600">{app.company}</p>
              <p className="text-sm text-gray-400">Applied on {app.appliedAt}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                app.status === 'Pending'
                  ? 'bg-yellow-100 text-yellow-600'
                  : app.status === 'Interview'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-green-100 text-green-600'
              }`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
