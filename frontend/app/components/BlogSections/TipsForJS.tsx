import React from 'react'

const TipsForJS = () => {
  return (
    <section className="py-20 ">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
      Tips for Job Seekers
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Make your job search smarter and more strategic with these expert tips.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {[
        {
          title: "Tailor your resume",
          tip: "Customize your CV and cover letter for each job application. Highlight the most relevant experiences and keywords from the job description.",
        },
        {
          title: "Optimize your LinkedIn",
          tip: "Keep your LinkedIn profile updated, professional, and consistent with your resume. Engage with posts in your industry to increase visibility.",
        },
        {
          title: "Use job filters wisely",
          tip: "Don't waste time scrolling endlessly. Use advanced search filters to find jobs that truly match your profile and goals.",
        },
        {
          title: "Follow up",
          tip: "After an application or interview, send a polite follow-up email. It shows initiative and keeps you top-of-mind.",
        },
        {
          title: "Practice interviews",
          tip: "Rehearse common questions and prepare your own to ask. Make sure you can clearly talk about your past experiences and skills.",
        },
        {
          title: "Stay positive and consistent",
          tip: "Rejection is part of the journey. Stay confident, apply consistently, and keep improving your approach.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white border border-yellow-100 rounded-2xl p-6 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm">{item.tip}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default TipsForJS