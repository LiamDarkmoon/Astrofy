
export default function CurrentSong({ image, title, artists } : { image: string | undefined, title: string | undefined, artists: string | undefined  }) {
  return (
    <div
        className="shadow-lg flex items-center relative overflow-hidden gap-4 ps-2 min-w-[180px] w-[30%]"
    >
        <picture className="aspect-square w-14 h-auto flex-none">
            {
                image &&
                <img
                    src={image}
                    alt={`cover of ${title}`}
                    className="object-cover w-full h-full rounded-[4px]"
                />
            }
        </picture>
    
        <div className="flex flex-col">
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
