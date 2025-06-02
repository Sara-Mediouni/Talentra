// components/Testimonials.tsx
"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina D.",
    role: "Frontend Developer",
    text: "Thanks to this platform, I landed my dream remote job within two weeks. The UI is clean and super easy to navigate!",
  },
  {
    name: "Lucas M.",
    role: "HR Manager at Softify",
    text: "Finding the right candidates has never been this smooth. I highly recommend this site to any recruiter.",
  },
  {
    name: "Fatima Z.",
    role: "Data Analyst",
    text: "The personalized job suggestions were spot on. I’ve already referred it to all my friends!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 w-full">
      <div className="px-4 text-center ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          What Users Are Saying
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Thousands of job seekers and recruiters trust our platform daily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md text-left hover:shadow-lg transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">“{item.text}”</p>
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
