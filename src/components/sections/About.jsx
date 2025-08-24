import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Javascript", "React"];
  const backendSkills = ["Django", "Dotnet"];

  return (
    <section id="about" 
    className="bg-[#eddcc8] relative">

      {/* Top Wave */}
      <svg
        className="w-full h-24"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#f5f5dc" // previous section background
          d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,176C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4 w-full space-y-16">

            {/* About Me Title */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent text-center">
              About Me
            </h2>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Secondary */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                  <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Secondary (NEB)</h4>
                  <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                    <li>V.S Niketan Secondary School</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="/divya-portfolio/images/academic-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                    >
                      View Academic Certificate
                    </a>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                  <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Higher Secondary (HSEB)</h4>
                  <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                    <li>Makawanpur Multiple College (2019)</li>
                    <li>Relevant Coursework: Science, Math, Computer ...</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="/divya-portfolio/images/academic-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                    >
                      View Academic Certificate
                    </a>
                  </div>
                </div>

                {/* Bachelor */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                  <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Bachelor in Computer Application (TU)</h4>
                  <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                    <li>Hetauda City College (2019–2025)</li>
                    <li>Relevant Coursework: Web Development, Data Structures, Editing...</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="/divya-portfolio/images/academic-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                    >
                      View Academic Certificate
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Internship Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Internship Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Internship 1 */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                  <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Django Developer – Truenary Solutions (2024)</h4>
                  <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                    <li>Built backend functionalities using Python Django.</li>
                    <li>Implemented APIs with POST, GET, filtering, pagination.</li>
                    <li>Managed driver and vehicle profiles with associations.</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="/divya-portfolio/images/truneryIntern.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                    >
                      View Internship Certificate
                    </a>
                  </div>
                </div>

                {/* Internship 2 */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc]">
                  <h4 className="text-xl font-bold mb-2 text-[#4e342e]">.NET + React Developer – Icon Soft (2024–Present)</h4>
                  <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                    <li>Contributed to a full-stack application using .NET and React.</li>
                    <li>Built backend services and reusable React components.</li>
                    <li>Collaborated in Agile team environment.</li>
                  </ul>
                  <div className="mt-4">
                    <a
                      href="/divya-portfolio/images/internship-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4e342e] hover:text-[#d7a1a9] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                    >
                      View Internship Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Technical Skills</h3>
              <ul className="space-y-6 max-w-3xl mx-auto">
                <li>
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc] cursor-pointer">
                    <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>

                <li>
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#f5f5dc] cursor-pointer">
                    <h4 className="text-xl font-bold mb-4 text-[#4e342e]">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-[#d2b9a3] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </RevealOnScroll>
      </div>

      {/* Bottom Wave */}
      <svg
        className="w-full h-24"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#f7e7ce" // next section background
          d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,112C672,107,768,85,864,96C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

    </section>
  );
};
