export default function Footer() {
  return (
    <footer className="bg-teal-950 text-gray-300 py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Talentra</h2>
          <p className="text-gray-400">
            Your trusted platform to find jobs and talented candidates quickly and easily.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/find-jobs" className="nav-link">Find Jobs</a></li>
            <li><a href="/find-candidates" className="nav-link">Find Candidates</a></li>
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="nav-link">Blog</a></li>
            <li><a href="#" className="nav-link">Help Center</a></li>
            <li><a href="#" className="nav-link">Privacy Policy</a></li>
            <li><a href="#" className="nav-link">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">123 Job Street<br />Job City, JC 12345</p>
          <p className="mt-2">Email: <a href="mailto:support@jobfinder.com" className="nav-link">support@jobfinder.com</a></p>
          <p className="mt-2">Phone: <a href="tel:+1234567890" className="nav-link">+1 234 567 890</a></p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
}
