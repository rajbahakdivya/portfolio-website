import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MdVideocam } from "react-icons/md";
import { RevealOnScroll } from "../RevealOnScroll";

// Reusable Project Card Component
const ProjectCard = ({ title, description, tech, liveLink, githubLink, videoLink }) => {
  return (
    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#4e342e] mb-6 text-lg">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, key) => (
          <span
            key={key}
            className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6">
        {liveLink && (
          <a
            href={liveLink}
            className="text-sm flex items-center gap-1 text-[#4e342e] hover:text-[#e87d52] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ArrowRight className="w-4 h-4" />
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            title="View Code on GitHub"
            className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}

        {videoLink && (
          <a
            href={videoLink}
            className="text-[#4e342e] bg-[#ffe0b2] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdVideocam className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  const projectList = [
    {
    title: "WaterDonation Project",
    description: "I developed the Water Donation Project, a web application with an ASP.NET backend and React frontend. Navigation uses react-router-dom for routing and parameter passing, with a shopping cart and summary display alongside a donation page built with React Context for state management. Components are modularized for scalability, and CRUD functionality supports project management.",
    tech: ["React", "Dotnet"],
    liveLink: "https://your-live-project-link.com",
    githubLink: "https://github.com/rajbahakdivya/WaterProject",
    videoLink:
      "https://drive.google.com/file/d/17BPGeGEDTVQ6IGYfvJ8jsnzQjjrr_m0C/preview",
  },
  {
    title: "Gemini-Clone",
    description: "A React.js app replicating Google Gemini’s AI chat interface. Includes generative AI chat, prompt saving in sidebar, smooth typing & loading animations, fully responsive.",
    tech: ["React"],
    liveLink: "https://your-live-project-link.com",
    githubLink: "https://github.com/rajbahakdivya/Gemini-Clone",
    videoLink:
      "https://drive.google.com/file/d/1kKPPu5mep7j0SKTSBEQHGqL70_NEA3u3/preview",
  },
    {
      title: "RunGroopWebApp",
      description: "Developed a dynamic social media app inspired by online tutorials, designed to connect users with local clubs and racing events. It features secure login/registration, an intuitive homepage, and a geolocation-based search intended to use IP detection to display nearby clubs and races from the database, though the geolocation functionality requires further optimization. A streamlined dashboard allows users to explore and engage with content, demonstrating my ability to build and troubleshoot interactive web applications.",
      tech: ["ASP.NET Core 6 -MVC","HtmlCss"],
      liveLink: "https://your-live-project-link.com",
      githubLink: "https://github.com/rajbahakdivya/RunGroopWebApp",
      videoLink: "/video/project-demo.mp4",
    },
    {
      title: "NZWalks.API",
      description: "This RESTful API, built with ASP.NET Core Web API and Entity Framework Core, provides information on New Zealand’s walks and trails. It supports CRUD operations, SQL Server integration, and dependency injection for efficient data management, offering features like trail listings, search, and filtering.",
      tech: ["Dotnet"],
      liveLink: "https://your-live-project-link.com",
      githubLink: "https://github.com/rajbahakdivya/NZWalks.API",
    },
    {
      title: "React-MiniProjects",
      description: "A simple and interactive web application built with React. This project serves as an educational tool for learning React fundamentals, including components, state management, event handling, and routing. It is designed to provide hands-on experience with key React concepts while building a small but functional web app.",
      tech: ["React"],
       liveLink: "https://your-live-project-link.com",
      githubLink: "https://github.com/rajbahakdivya/React-MiniProjects",
    },
    {
      title: "CMS/Manpower",
      description: "It is a Multi-tenant Web Application. Still on process",
      tech: ["Dotnet", "React"],
      liveLink: "https://your-live-project-link.com",
      githubLink: "https://github.com/rajbahakdivya/CMS_Api",
      
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: "#f7e7ce" }}
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9eef7"
            d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,112C672,107,768,85,864,96C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
