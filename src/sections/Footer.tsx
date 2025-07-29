import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
{
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/trimbak15/",
},
{
  name: "Instagram",
  url: "https://www.instagram.com/ig.trippy15/#",
},
{
  name: "Github",
  url: "https://github.com/Trimbak15",
},
{
  name: "Youtube",
  url: "https://www.youtube.com/@youtubetrimbak2000",
},
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[600px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10
      "></div>
      <div className="container">
        <div className="border-t border-white/15 text-white py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} Trimbak Pakhale. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a key={link.name} href={link.url} className="mx-2 inline-flex items-center gap-1.5">
                <span>{link.name}</span>
                <ArrowUpRightIcon/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
