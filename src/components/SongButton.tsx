import { usePlayerStore } from '@/store/playerStore'
import Button from './Button'

const Prev = () =>(
  <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width='16' height='16'><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" fill='currentColor'></path></svg>
)

const Next = () =>(
  <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width='16' height='16'><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" fill='currentColor'></path></svg>
)
export default function SongButton({ click, rol } : { click?: () => void, rol: 'prev' | 'next' }) {
    const { volume, currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
    const isNext = rol === 'next'

  return (
    <Button 
        className="p-[5px] text-white/70 hover:text-white"
        onClick={ click }
    >
        { isNext ? <Next/> : <Prev/> }
    </Button>
  )
}