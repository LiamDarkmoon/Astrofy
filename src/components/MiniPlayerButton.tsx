import Button from './Button'

const MiniPlayer = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z" fill="currentColor"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z" fill="currentColor"></path></svg>
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