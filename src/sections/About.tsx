import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png"
import JSIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ToolboxItem from "@/components/ToolboxItem";
import MapImage from "@/assets/images/map.png.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";


const toolboxItems = [
  {title: 'Javascript', iconType: JSIcon},
  {title: 'HTML5', iconType: HTMLIcon},
  {title: 'CSS3', iconType: CSSIcon},
  {title: 'React', iconType: ReactIcon},
  {title: 'Chrome', iconType: ChromeIcon},
  {title: 'Github', iconType: GithubIcon},
];

const hobbies = [
  {
    title:'Photography',
    emoji:'📸',
    left:'2%',
    top:'35%',
  },
  {
    title:'Music',
    emoji:'🎵',
    left:'55%',
    top:'35%',
  },
  {
    title:'Cricket',
    emoji:'🏏',
    left:'4%',
    top:'50%',
  },
  {
    title:'Swimming',
    emoji:'🏊‍♂️',
    left:'45%',
    top:'50%',
  },
  {
    title:'Reading Books',
    emoji:'📚',
    left:'40%',
    top:'80%',
  },
  {
    title:'Traveling',
    emoji:'✈️',
    left:'5%',
    top:'65%',
  },
  {
    title:'Cooking',
    emoji:'🍳',
    left:'55%',
    top:'65%',
  },
  {
    title:'Gaming',
    emoji:'🎮',
    left:'5%',
    top:'80%',
  },

]

export const AboutSection = () => {
  return <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="Crafting Digital Experiences" description="I am a passionate web developer with a focus on creating engaging and user-friendly digital experiences. My journey in web development has been driven by a love for coding and a desire to bring ideas to life through technology." />
    <div className="mt-20 flex flex-col gap-8">
      <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1">
        <CardHeader title="My Reads" description="Explore how positive mindset can change everything..!!" className="lg:-mt-8"/>
      <div className="w-40 mx-auto mt-8 ">
      <img src={bookImage.src} alt="book cover" />
      </div>
      </Card>

      <Card className="h-[320px] md:col-span-3 mt-8 md:mt-0 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools to craft exceptional user interfaces..!!" className="px-4 py-4 md:py-1 lg:-mt-8" />
      <ToolboxItem toolboxItems={toolboxItems} className="mt-6 "/>
      <ToolboxItem toolboxItems={toolboxItems} className="mt-6 " toolboxItemsWrapper="-translate-x-1/2"/>
      </Card>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
      <Card className="relative h-80 md:col-span-3 md:py-4 lg:col-span-2">
        <CardHeader title="Beyond the Code" description="Explore hobbies and interests beyond the digital realm..!!" className="lg:-mt-8"/>
      <div >
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top }}>
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </div>
        ))}
      </div>
      </Card>
      <Card className="h-80 p-0 relative md:col-span-2 mt-8 md:mt-0 md:py-4 lg:col-span-1">
        <img src={MapImage.src} alt="map image" className=" h-full object-cover lg:h-[320px] lg:-mt-16 lg:max-w-screen-lg lg:-mx-20" />
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
        <img src={SmileEmoji.src} alt="smile emoji" className="size-20" />
        </div>
      </Card>
      </div>
    </div>
    </div>
  </div>;
};
