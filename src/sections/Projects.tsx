import darkSaasLandingPage from "@/assets/images/fibe.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from "next/image"
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"

const portfolioProjects = [
  {
    company: "FIBE Instant Personal Loan",
    year: "2023",
    title: "Author Landing Page",
    results: [
      {title: "Enhanced user experience by 40%"},
      {title: "Improved site speed by 50%"},
      {title: "Increased mobile traffic by 35%"},
    ],
    link: "https://www.fibe.in/",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      {title: "Boosted sales by 20%"},
      {title: "Expanded customer reach by 35%"},
      {title: "Increased brand awareness by 15%"},
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      {title: "Enhanced user experience by 40%"},
      {title: "Improved site speed by 50%"},
      {title: "Increased mobile traffic by 35%"},
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className="pb-16 px-8 lg:py-24 lg:flex-row">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Ideas → Code → Experiences.
        </h2>
        <p className="text-center text-white/60 md:text-lg lg:text-xl mt-2 md:mt-10 max-w-md mx-auto">
          Crafting UIs that don't just work—they wow.
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-20 ">
        {portfolioProjects.map(project => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-10 after:pointer-events-none
          lg:flex lg:items-center lg:gap-12 lg:px-12 lg:py-12" // Added lg: classes
          >
            <div className="absolute inset-0 -z-10 opacity-5 bg-grain"></div>

            {/* Text Content - Left Side (wrapped in new div) */}
            <div className="lg:flex-1 lg:pr-8">
              {" "}
              {/* Added lg: classes */}
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="mt-4 flex flex-col gap-2 md:mt-5">
                {project.results.map(result => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-white/50"
                  >
                    <CheckIcon className="size-5 text-emerald-300 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Live Site</span>
                  <ArrowDown className="size-4" />
                </button>
              </a>
            </div>

            {/* Image - Right Side (wrapped in new div) */}
            <div className="mt-8 -mb-4 md:-mb-0 lg:flex-1 lg:mt-0 lg:mb-0">
              {" "}
              {/* Added lg: classes */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
