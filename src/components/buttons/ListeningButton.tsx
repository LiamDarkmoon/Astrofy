import Button from './../Button'

const MiniPlayer = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M11.196 8 6 5v6l5.196-3z" fill="currentColor"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z" fill="currentColor"></path></svg>
)

export default function MiniPlayerButton({ click } : { click?: () => void}) {

  return (
    <Button 
        className="p-[5px] text-white/70 hover:text-white"
        onClick={ click }
    >
        <MiniPlayer/>
    </Button>
  )
}
