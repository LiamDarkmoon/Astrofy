import { usePlayerStore } from "@/store/playerStore";
import { Slider } from './Slider';
import Volume from "@/icons/volume";
import { useRef } from "react";
import Button from "./Button";

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
        <div className="flex items-center me-2">
            <Button onClick={handleVolume} className="opacity-70 hover:opacity-100 transition">
                <Volume/>
            </Button>
                <Slider
                value={[volume * 100]}
                max={100}
                min={0}
                className='w-[93px] h-[12px]'
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
                />
        </div>
    )
}