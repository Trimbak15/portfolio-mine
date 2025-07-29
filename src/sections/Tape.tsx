import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";

const words = [
  "Performant",
  "Responsive",
  "Accessible",
  "Reusable",
  "Maintainable",
  "Scalable",
  "Testable",
  "Extensible",
  "Modular",
  "Optimized",
  "Lightweight",
  "Flexible",
  "Robust",
  "Secure",
  "Intuitive",
  "Innovative",
  "Dynamic",
];

export const TapeSection = () => {
  return <div className="py-16 ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip  -rotate-3">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none gap-4 pr-3 py-4 animate-move-left [animation-duration:30s]">
      
        {/* need to duplicate the words for infinte scrolling for that we need to have a dummy wordsin a array */}
        {[...new Array(2)].fill(0).map((_, index) =>(
          <Fragment key={index}>
            {words.map(word => (
        <div key={word} className="inline-flex gap-4 items-center">
          <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
          <StarIcon className="size-6 text-gray-900 -rotate-12"/>
        </div>
      ))}
          </Fragment>
        ))}
      
      </div>
      </div>
      </div>
  </div>;
};
