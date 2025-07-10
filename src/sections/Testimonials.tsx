import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg"
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Pawan Malvani",
    position: "Intructor @ K.K. Wagh Institute",
    text: "Trimbak&apos;s work on our website has been a game-changer. His attention to detail and understanding of user experience have made a significant impact on our online presence.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sandip Patil",
    position: "Owner @ Raj Sweet",
    text: "Working with Trimbak was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Emily Zhang",
    position: "UX researcher @ Curiosity Tank",
    text: "Trimbak&apos;s ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Aman Qureshi",
    position: "Owner @ RhinoGym",
    text: "Trimbak is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Moon Qureshi",
    position: "Developer @ Deqode",
    text: "Trimbak&apos;s work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
  <div className="container md:max-w-5xl lg:max-w-5xl">
    <SectionHeader 
      title="Testimonials" 
      eyebrow="Happy Clients" 
      description="Here&apos;s what clients have to say about working with me. From startups to established brands, I&apos;ve helped deliver impactful solutions with a strong focus on quality, communication, and results." 
    />
    <div className="mt-16 lg:mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-8 flex-none">
      {testimonials.map(testimonial => (
        <Card key={testimonial.name} className="max-w-xs md:max-w-md md:p-8 ">
          <div className="flex gap-4 items-center">
          <div className="size-14 bg-gray-700 inline-flex justify-center rounded-full flex-shrink-0">
          <img src={testimonial.avatar.src} alt={testimonial.name} className="max-h-full"/>
          </div>
          <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-white/40">{testimonial.position}</div>
          </div>
          </div>
          <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
          </Card>))}
          </div>
    </div>
  </div>;
  </div>
)};
