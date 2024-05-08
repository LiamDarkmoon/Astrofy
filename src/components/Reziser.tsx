export default function Reziser(){
    return(
        <div className="relative h-full fle justify-center w-[1px] bg-black/10 cursor-pointe">
            <label className='hidden'>hidden Reziser</label>
            <input type="range" min='72' max='450' step='10' className='hidden' />
        </div>
    )
}