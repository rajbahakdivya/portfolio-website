import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
  <nav className="fixed top-0 w-full z-40 bg-[#d8c1aa] backdrop-blur-lg border-[#8d6e63]/50 shadow-lg">

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white"
          >
            Divya<span className="text-[#bcaaa4]">Rajbahak</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#4e342e] hover:text-[#e87d52] hover:drop-shadow-[0_0_6px_#e87d52] transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#4e342e] hover:text-[#e87d52] hover:drop-shadow-[0_0_6px_#e87d52] transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#4e342e] hover:text-[#e87d52] hover:drop-shadow-[0_0_6px_#e87d52] transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#4e342e] hover:text-[#e87d52] hover:drop-shadow-[0_0_6px_#e87d52] transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
