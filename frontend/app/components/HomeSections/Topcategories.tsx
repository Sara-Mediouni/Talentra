import React from 'react'
import { Code, PenTool, BarChart, Database } from "lucide-react";

const categories = [
  { icon: <Code size={24} />, title: "Web Development", jobs: "+120 jobs" },
  { icon: <PenTool size={24} />, title: "UI/UX Design", jobs: "+85 jobs" },
  { icon: <Database size={24} />, title: "Data Science", jobs: "+60 jobs" },
  { icon: <BarChart size={24} />, title: "Marketing", jobs: "+95 jobs" },
];
const Topcategories = () => {
  return (
   <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Explore Top Categories</h2>
        <p className="text-gray-600 mb-12">Find the right job faster by browsing categories</p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center  text-teal-900 rounded-full">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Topcategories