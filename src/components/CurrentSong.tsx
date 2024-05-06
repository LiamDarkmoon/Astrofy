import React from 'react'

export default function CurrentSong({ image, title, artists } : { image: string | undefined, title: string | undefined, artists: string | undefined  }) {
  return (
    <div
        className="shadow-lg flex items-center relative overflow-hidden gap-4"
    >
        <picture className="aspect-square w-[55px] h-auto flex-none">
            {
                image &&
                <img
                    src={image}
                    alt={`cover of ${title}`}
                    className="object-cover w-full h-full rounded-[4px]"
                />
            }
        </picture>
    
        <div className="flex flex-col truncate">
            <h4 className="font-semibold text-sm">
                { title }
            </h4>
    
            <span className="text-xs text-zinc-400">
                { artists }
            </span>
        </div>
    </div>
  )
}