const Linktree = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-blue-100 p-6">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        {/* Header */}
        <div className="mb-6 text-center">
          <img
            src="/furinaa.jpg"
            alt="User Avatar"
            className="rounded-full w-24 h-24 mx-auto border-4 border-blue-300 drop-shadow-md "
          />
          <h1 className="text-2xl font-bold mt-4 text-slate-900">Dwi Lestari Amelia</h1>
          <p className="text-gray-700 font-medium">
            A computer science student who loves coding and cats. 🐾
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 text-center">
          <a
            href="https://github.com/dwiameliaa"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Website 🔗
          </a>
          <a
            href="https://github.com/dwiameliaa"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            GitHub 🌟
          </a>
          <a
            href="https://www.instagram.com/douiliame/profilecard/?igsh=eW84Mjd5aHFtaDZz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Instagram 📸
          </a>
          <a
            href="https://www.linkedin.com/in/dwi-lestari-amelia "
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            LinkedIn 💼
          </a>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
