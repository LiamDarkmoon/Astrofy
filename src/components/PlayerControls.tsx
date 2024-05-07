import { usePlayerStore } from "@/store/playerStore";
import { Slider } from './Slider';
import { useRef, useState, useEffect } from "react";
import { formatTime } from "@/lib/utils";

export default function VolumeControl( { audio } : {audio: React.RefObject<HTMLAudioElement>}) {
    const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore()
    const [currentTime, setCurrentTime] = useState(0)
    
    useEffect(() => {
        if(audio.current){
            audio.current.addEventListener("timeupdate", handleTimeUpdate)
            return () => {
                audio.current?.removeEventListener("timeupdate", handleTimeUpdate)
            }
        }
    })

    const handleTimeUpdate = () => {
        if(audio.current){
            setCurrentTime(audio.current.currentTime)
        }
    }

    const duration = audio.current?.duration ?? 0

    return (
        <div className="flex gap-2.5 text-xs pt-2">
            <button className="opacity-70 hover:opacity-100 transition">
            </button>
            <span className="opacity-50 w-10 text-right">{ formatTime(currentTime) }</span>
            <Slider
                value={[currentTime]}
                max={ audio?.current?.duration ?? 0 }
                min={0}
                className='w-[442px]'
                onValueChange={(value) => {
                    const [newTime] = value
                    if(audio.current){
                        audio.current.currentTime = newTime
                    }
                }}
            />
            <span className="opacity-50 w-10">{ isNaN(duration) ? '-:--' : formatTime(duration) }</span>
        </div>
    )
}