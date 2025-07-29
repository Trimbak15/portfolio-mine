import darkSaasLandingPage from "@/assets/images/fibe.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from "next/image"
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"

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
    link: "https://trimbak15-react-redux.netlify.app/",
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
    link: "https://trimbak15-e-commerce-site.netlify.app/",
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  return (
    <section className="pb-16 px-8 lg:py-10">
      <div className="container lg:max-w-6xl">
        <SectionHeader 
          title="Ideas → Code → Experiences." 
          eyebrow="Real-world Results" 
          description="Explore some of the projects I have worked on, showcasing my skills and expertise."
        />
      
      <div className="flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex*80}px)`,
            }}
            >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
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
              
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:max-w-none rounded-t-3xl lg:h-full lg:w-fit"
              />
            </div>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </section>
  )
}
