import { usePlayerStore } from "@/store/playerStore";
import { Slider } from './Slider';
import Volume from "@/icons/volume";
import { useRef } from "react";

export default function VolumeControl() {
    const { volume, setVolume } = usePlayerStore()
    const prevVolumeRef = useRef(volume)

    const handleVolume = () => {
        if (volume === 0) {
            setVolume(prevVolumeRef.current)
        } else {
            prevVolumeRef.current = volume
            setVolume(0)
        }
    }

    return (
        <div className="flex items-center gap-2">
            <button onClick={handleVolume} className="opacity-70 hover:opacity-100 transition">
                <Volume/>
            </button>
                <Slider
                value={[volume * 100]}
                max={100}
                min={0}
                className='w-[95px]'
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
                />
        </div>
    )
}