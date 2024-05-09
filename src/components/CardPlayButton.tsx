import { Pause, Play } from './Player.tsx'
import { usePlayerStore } from '@/store/playerStore.ts'

export default function CardPlayButton({ id, size = 'small' } : { id: string | undefined, size?: 'small' | 'medium' | 'large' }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = () => {
        if(isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }
        const playlistURL = `/api/get-info-playlist.json?id=${id}`
        fetch (playlistURL)
        .then(res => res.json())
        .then(data => {
            const { songs, playlist } = data
            
            setIsPlaying(!isPlaying)
            setCurrentMusic({ playlist, song: songs[0], songs })
            window.localStorage.setItem('lastMusic', JSON.stringify({ playlist, song: songs[0], songs }))
            })
    }

    
    const iconsClassName = size === 'small' ? 'w-8 h-8' : size === 'medium' ? 'w-10 h-10' : 'w-14 h-14'

    return(
        <button 
            className={`grid place-content-center rounded-full bg-star hover:bg-green-500 hover:scale-105 transition p-2 ${iconsClassName}`}
            onClick={ handleClick }
        >
          { isPlayingPlaylist ? <Pause/> : <Play/>}
        </button>
    )   
}