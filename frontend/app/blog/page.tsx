import Build from "../components/BlogSections/Build";
import InterviewPrep from "../components/BlogSections/InterviewPrep";
import SideProjects from "../components/BlogSections/SideProjects";
import TipsForJS from "../components/BlogSections/TipsForJS";
import Image from "next/image";

const blogPosts = [
  {
    title: "5 Tips to Nail Your Next Job Interview",
    slug: "job-interview-tips",
    excerpt: "Master your next interview with these practical and proven techniques.",
    image: "/Interview-cuate.svg",
    date: "May 25, 2025",
    author: "Sarah Malik",
  },
  {
    title: "Building an Effective Resume in 2025",
    slug: "effective-resume",
    excerpt: "Learn how to craft a resume that gets noticed by recruiters and hiring systems.",
    image: "/resume.svg",
    date: "May 18, 2025",
    author: "Ahmed Ziani",
  },
  {
    title: "Remote Work: Opportunities & Challenges",
    slug: "remote-work-opportunities",
    excerpt: "Explore the future of remote jobs and how to prepare for them effectively.",
    image: "/Remote meeting-cuate.svg",
    date: "May 12, 2025",
    author: "Nina Costa",
  },
];

export default function BlogPage() {
  return (
    <section className="py-20 mt-20 bg-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Job Tips & Insights</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay ahead in your job search with our latest articles and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-52 object-contain p-6"
              />
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-sm my-3">{post.excerpt}</p>
                <div className="text-xs text-gray-500">
                  {post.date} · by {post.author}
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-yellow-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TipsForJS/>
      <InterviewPrep/>
      <SideProjects/>
      <Build/>
    </section>
  );
}
