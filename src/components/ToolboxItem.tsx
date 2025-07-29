import React, { Fragment } from 'react'
import TechIcon from './TechIcon'
import { twMerge } from 'tailwind-merge'

export default function ToolboxItem({toolboxItems,className, toolboxItemsWrapper} : {toolboxItems: {title: string, iconType: React.ElementType}[], className?: string, toolboxItemsWrapper?: string}) {
  return (
    <div className={twMerge('flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)}>
          
      <div className={twMerge('flex flex-none py-0.5 gap-6 ', toolboxItemsWrapper)}>
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {toolboxItems.map((item) => (
              <div key={item.title} className="inline-flex items-center py-2 px-3 outline outline-2 outline-white/10 rounded-lg gap-4">
                
                <TechIcon component={item.iconType}/>
                <span className="font-semibold gap-4">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
            
          </div>
          </div>
  )
}
