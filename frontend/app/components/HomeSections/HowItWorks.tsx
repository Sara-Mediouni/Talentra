import Image from "next/image";

import {BadgeCheck } from "lucide-react";


import { ReactNode } from "react";

const Step = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-yellow-500">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);





export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">How It Works</h2>

        <div className="space-y-20">

          {/* Job Seekers */}
          <div className="bg-white rounded-xl shadow-md p-8"> 
            <h3 className="text-2xl font-bold text-teal-900 mb-8 flex justify-center items-center">For Job Seekers</h3>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/Job hunt-cuate.svg"
                alt="Job Seeker Illustration"
                width={450}
                height={200}
                className="mx-auto"
              />
              <div className="space-y-6">
                <Step icon={<BadgeCheck size={20} />} title="Create your Profile" desc="Showcase your skills, experience, and career goals." />
                <Step icon={<BadgeCheck size={20} />} title="Explore Jobs" desc="Filter opportunities by category, salary, and location." />
                <Step icon={<BadgeCheck size={20} />} title="Apply in One Click" desc="Instantly apply and follow your application status." />
              </div>
            </div>
          </div>

          {/* Employers */}
          <div className="bg-white rounded-xl shadow-md p-8"> 
            <h3 className="text-2xl  space-x-4 font-bold text-teal-900 justify-center flex items-center">For Employers</h3>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">            

                <Step icon={<BadgeCheck size={20} />} title="Set Up Your Company" desc="Create a branded company page with your culture & values." />
                <Step icon={<BadgeCheck size={20} />} title="Post Offers" desc="Publish roles and reach a large pool of candidates." />
                <Step icon={<BadgeCheck size={20} />} title="Hire the Best" desc="Review, shortlist, and hire easily from your dashboard." />
              </div>
              <Image
                src="/Job offers-cuate.svg"
                alt="Employer Illustration"
                width={400}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

