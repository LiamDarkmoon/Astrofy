import { usePlayerStore } from '@/store/playerStore'
import { useRef, useEffect } from 'react'
import CurrentSong from './CurrentSong';
import VolumeControl from './VolumeControl';
import PlayerControls from './PlayerControls';
import PlayerSideControls from './PlayerSideControls';

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

    return (
        <div className="flex justify-between items-center h-[72px] w-full z-50">
            <CurrentSong image={currentMusic.song?.image} title={currentMusic.song?.title} artists={currentMusic.song?.artists.join(', ')}/>

            <PlayerControls audio={audioRef}/>

            <PlayerSideControls/>
            <audio ref={audioRef} />
        </div>
    )
}