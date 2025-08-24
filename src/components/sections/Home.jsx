import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
  style={{ backgroundColor: "#f9eef771" }}
>

  {/* Image Reveal */}
  <RevealOnScroll>
    <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
      <img
        src="https://drive.google.com/uc?export=view&id=1_nhJxzYFzxZVxwYKfgYpw6iVsRL2Pd6q"
        alt="Top Image"
        className="w-full h-full object-cover"
      />

    </div>
  </RevealOnScroll>

  {/* Heading & Paragraph Reveal */}
  <RevealOnScroll>
    <div className="flex flex-col items-center text-center px-4 md:px-10 max-w-3xl w-full">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_10px_rgba(255,204,128,0.3)]">
        Hi, I'm Divya
      </h1>

      <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto">
        A dedicated software developer and avid learner with a computer applications background,
        I specialize in Django, React.js, and .NET, 
        crafting innovative web applications to solve real-world challenges.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
        >
          Contact Me
        </a>

       <a
          href="https://drive.google.com/file/d/1y1AwDARKkn-WU6SXgLYPm1Ai0x0y5p9P/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#d7a1a9] to-[#ffcc80] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
      >
        View CV
      </a>

      </div>
    </div>
  </RevealOnScroll>
</section>
  );
};
