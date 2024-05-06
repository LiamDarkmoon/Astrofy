import { usePlayerStore } from '@/store/playerStore'
import { useRef, useEffect } from 'react'
import CurrentSong from './CurrentSong';
import VolumeControl from './VolumeControl';
import PlayerControls from './PlayerControls';

export const Play = ({ className } : { className?: string }) => {
    return (
    <svg
    className={ className }
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    ><path
        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
    ></path></svg
    >
    )
}

export const Pause = ({ className } : { className?: string }) => {
    return(
        <svg className={ className } xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 16 16"  width="24" height="24"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
    )
}

export default function Player() {
    const { volume, currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        isPlaying
        ? audioRef.current?.play()
        : audioRef.current?.pause()
    },[isPlaying])

    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = volume
        }
    },[volume])

    useEffect(() => {
        const { song, playlist, songs } = currentMusic
        if(song && audioRef.current) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    },[currentMusic])

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="flex justify-between w-full z-50">
            <div className="flex items-center gap-2 w-[200px]">
                <CurrentSong image={currentMusic.song?.image} title={currentMusic.song?.title} artists={currentMusic.song?.artists.join(', ')}/>
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex flex-col items-center">
                    <button 
                        className="p-[5px] rounded-full bg-white"
                        onClick={handleClick}
                    >
                        { isPlaying ? <Pause/> : <Play/> }
                    </button>
                    <PlayerControls audio={audioRef}/>
                </div>
            </div>

            <VolumeControl/>
            <audio ref={audioRef} />
        </div>
    )
}