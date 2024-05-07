import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useState } from "react"

export const VolumeMax = ({ className }: { className?: string }) => {
  return (
    <svg className={ className } role="presentation" aria-label="Volumen alto" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" width="16" height="16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" fill="currentcolor" ></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" fill="#A7A7A7"></path></svg>
  )
}

export const VolumeMd = ({ className }: { className?: string }) => {
  return (
    <svg className={ className } role="presentation" aria-label="Volumen medio" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" width="16" height="16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z" fill="currentcolor" ></path></svg>
  )
}

export const VolumeSm = ({ className }: { className?: string }) => {
  return (
    <svg className={ className } role="presentation" aria-label="Volumen bajo" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" width="16" height="16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" fill="currentcolor" ></path></svg>
  )
}

export const VolumeMut = ({ className }: { className?: string }) => {
  return (
    <svg className={ className } role="presentation" aria-label="Volumen apagado" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" width="16" height="16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" fill="currentcolor" ></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" fill="#A7A7A7"></path></svg>
  )
}


const Volume = ({ className }: { className?: string }) => {
  const { volume } = usePlayerStore(state => ({ volume: state.volume }))
  const [currentVolume, setCurrentVolume] = useState<React.ReactNode>(<VolumeMut  />)

  useEffect(() => {
    if(volume > 0.66) {
      setCurrentVolume(<VolumeMax className={ className } />)
    } else if (volume > 0.33) { 
      setCurrentVolume(<VolumeMd className={ className } />)
    } else if (volume > 0) {
      setCurrentVolume(<VolumeSm className={ className } />)
    } else {
      setCurrentVolume(<VolumeMut className={ className } />)
    }
  }, [volume])

  return currentVolume 
}

export default Volume