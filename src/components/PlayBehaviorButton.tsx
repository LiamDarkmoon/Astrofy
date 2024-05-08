import { usePlayerStore } from '@/store/playerStore'
import Button from './Button'

const Random = ({ className } : { className?: string }) =>(
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width='16' height='16'><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" fill='currentColor'></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" fill='currentColor'></path></svg>
)

const Cicle = ({ className } : { className?: string }) =>(
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width='16' height='16'><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" fill='currentColor'></path></svg>
)
export default function SongButton({ click, rol } : { click?: () => void, rol: 'random' | 'cicle' }) {
    const { volume, currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
    const isRandom = rol === 'random'

  return (
    <Button 
        className={ isPlaying ? "p-[5px] text-white/70 hover:text-white" : "p-[5px] text-white/50" }
        onClick={ click }
    >
        { isRandom ? <Random/> : <Cicle/> }
    </Button>
  )
}