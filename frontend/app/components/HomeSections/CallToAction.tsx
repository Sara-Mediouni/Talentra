import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Ready to take the next step?
          </h2>
          <p className="text-gray-700 text-lg">
            Join thousands of job seekers and recruiters using our platform to
            connect and grow. Whether you're hiring or looking, it's all here.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="form-button">
              Get Started Now
            </button>
            <button className="bg-white border font-bold border-teal-950 text-teal-900 px-6 py-3 rounded-full hover:bg-yellow-50 transition">
              Post a Job
            </button>
          </div>
        </div>
    <div className="relative flex justify-center items-center">
  {/* Decorative SVG shape behind */}
  <div className="absolute -top-12 -left-12 w-[500px] h-[500px] z-0 opacity-50 pointer-events-none">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="#fde68a"
        d="M56.9,-46.3C68.6,-30.8,69.2,-7.4,63.2,12.6C57.2,32.7,44.6,49.6,28.4,56.3C12.2,63.1,-7.5,59.8,-28.3,52.3C-49.1,44.8,-71,33,-76.6,15.4C-82.3,-2.2,-71.8,-25.5,-56.3,-41.9C-40.9,-58.4,-20.4,-67.8,1.1,-68.7C22.7,-69.6,45.3,-61.9,56.9,-46.3Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>

  {/* Illustration */}
  <Image
    src="/Helping a partner-cuate.svg"
    alt="Join illustration"
    width={500}
    height={350}
    className="relative z-10 w-full max-w-md"
  />
</div>

      </div>
    </section>
  );
};

export default CallToAction;
