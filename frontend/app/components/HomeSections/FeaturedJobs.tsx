// components/FeaturedJobs.tsx
"use client";

import { MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-Time",
    salary: "$70k - $90k",
  },
  {
    title: "UX/UI Designer",
    company: "BrightCode",
    location: "Paris, France",
    type: "Contract",
    salary: "$40k - $60k",
  },
  {
    title: "Digital Marketing Specialist",
    company: "GrowthSpark",
    location: "Remote",
    type: "Part-Time",
    salary: "$30/hr",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Featured Jobs
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Discover some of the top opportunities handpicked for you.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className=" bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{job.company}</p>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-yellow-500" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-yellow-500" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-yellow-500" />
                  {job.salary}
                </div>
              </div>
              <button className="mt-6 w-full py-2 text-sm font-medium bg-teal-900 text-white rounded-full hover:bg-teal-950 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
