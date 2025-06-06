export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Let’s Talk</h3>
          <p className="text-sm">
            Do you have a project in mind or just want to say hello? Feel free
            to reach out.
          </p>
          <a
            href="mailto:at2899743@gmail.com?subject=Contact%20from%20Portfolio"
            className="mt-4 inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
          >
            <i className="fa fa-envelope mr-2"></i>
            Send Email
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <i className="fa fa-envelope mr-2"></i>
              <a href="mailto:at2899743@gmail.com" className="hover:underline">
                at2899743@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <i className="fa fa-phone mr-2"></i>
              <a href="tel:+50588068133" className="hover:underline">
                +505 8806-8133
              </a>
            </li>
            <li className="flex items-center">
              <i className="fa fa-map-marker-alt mr-2"></i>
              Managua, Nicaragua
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Follow Me</h3>
          <div className="flex space-x-4 text-2xl mt-2">
            <a
              href="https://github.com/edwin08torres"
              target="_blank"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/edwintorrez"
              target="_blank"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/VillegasAlex505"
              target="_blank"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Edwin Torrez. All rights reserved.
      </div>
    </footer>
  );
};
