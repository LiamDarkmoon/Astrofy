import Button from './../Button'

const PlayStack = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z" fill="currentColor"></path></svg>
)

export default function PlayStackButton({ click } : { click?: () => void}) {

  return (
    <Button 
        className="p-[5px] text-white/70 hover:text-white"
        onClick={ click }
    >
        <PlayStack/>
    </Button>
  )
}
