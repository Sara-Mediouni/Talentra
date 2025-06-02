// components/CareerTips.tsx

import { Lightbulb, FileText, Briefcase } from "lucide-react";

const tips = [
  {
    icon: <Lightbulb size={28} className="text-yellow-500" />,
    title: "Optimize Your Resume",
    description: "Tailor your resume to each job you apply for by using relevant keywords and showcasing measurable achievements.",
  },
  {
    icon: <FileText size={28} className="text-yellow-500" />,
    title: "Write Strong Cover Letters",
    description: "A personalized cover letter helps you stand out and show why you're the perfect fit for the role.",
  },
  {
    icon: <Briefcase size={28} className="text-yellow-500" />,
    title: "Prepare for Interviews",
    description: "Research the company, practice common questions, and be ready to speak about your experiences confidently.",
  },
];

export default function CareerTips() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Career Tips to Help You Succeed
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our experts share the most effective tips to help you land your dream job.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition text-left"
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
