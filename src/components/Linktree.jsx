const Linktree = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-100 p-6 overflow-hidden">
      {/* Blob Right */}
      <svg
        viewBox="0 0 292.5 292.5"
        xmlns="http://www.w3.org/2000/svg"
        // className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-50 translate-x-10 -translate-y-10 z-10"
        // className="absolute bottom-[5px] right-[10px] w-[300px] h-[300px] opacity-50 translate-x-0 translate-y-0 z-10"
        className="absolute bottom-0 right-0 w-[400px] h-[400px] transform translate-x-0 translate-y-0"
      >
        <path
          d="M146.25,227.71585613125353C173.4573002539365,229.2985837393555,200.83274880224204,267.72883283731665,222.481507148791,251.17366820986496C244.37062741730455,234.43469483344967,218.3904706417065,197.97306803098135,221.01426517242214,170.54238232889986C222.8070081216174,151.79999689882408,238.04174546845798,135.94583337966185,235.2847705348752,117.32084940364183C232.26385616727714,96.91279962267228,220.67044077736878,78.71631148121064,205.37271923113494,64.87455816117259C188.785266283126,49.86582426441768,168.2832813799555,40.625262764424114,146.25,36.76000725958147C120.49725478046219,32.24225348028352,91.29035123745203,26.130023541722032,69.85470545024324,41.100897772644785C48.35473665383467,56.11669585099644,48.037087498629774,86.77490461676699,39.25616516665044,111.48559568715429C30.155225885413763,137.0968572980173,10.272529151198174,161.87523601226417,17.64086272596816,188.03764181585456C25.059048594061114,214.37705588256446,50.053087399660924,234.59699657744125,76.20104916270625,242.66410948042514C99.58765080499236,249.87929350031558,121.81699337870512,226.29451723443054,146.25,227.71585613125353"
          fill="#D3D2F8"
        />
      </svg>

      {/* Blob Left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/50 blur-3xl animate-blob transform -translate-x-10 translate-y-10"
        style={{
          clipPath: "polygon(50% 0%, 90% 10%, 100% 50%, 80% 90%, 50% 100%, 20% 80%, 0% 50%, 10% 20%)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/50">
        {/* Header */}
        <div className="mb-6 text-center">
          <img
            src="/furinaa.jpg"
            alt="User Avatar"
            className="rounded-full w-24 h-24 mx-auto border-2 border-blue-300 drop-shadow-xl"
          />
          <h1 className="text-2xl font-bold mt-4 text-slate-900">Dwi Lestari Amelia</h1>
          <p className="text-gray-700 font-normal">
            A computer science student who loves coding and cats🐾
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 text-center">
          <a
            href="https://portfolio-website-dwi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-md border border-white/50 overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-blue-900">Website 🔗</span>
          </a>
          <a
            href="https://github.com/dwiameliaa"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-md border border-white/50 overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-blue-900">GitHub 🌟</span>
          </a>
          <a
            href="https://www.instagram.com/douiliame/profilecard/?igsh=eW84Mjd5aHFtaDZz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-md border border-white/50 overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-blue-900">Instagram 📸</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dwi-lestari-amelia"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-3 px-6 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-2xl shadow-md border border-white/50 overflow-hidden transition-all duration-300 ease-in-out group"
          >
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-blue-900">LinkedIn 💼</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Linktree;