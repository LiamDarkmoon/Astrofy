import { usePlayerStore } from "@/store/playerStore";

export default function SideVolume({ id } : { id: string | undefined }) {
    const { isPlaying, currentMusic } = usePlayerStore(state =>  state);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    return (
        <>
           {
            isPlayingPlaylist && 
            <svg className="me-2" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M10.016 1.125A.75.75 0 0 0 8.99.85l-6.925 4a3.639 3.639 0 0 0 0 6.299l6.925 4a.75.75 0 0 0 1.125-.65v-13a.75.75 0 0 0-.1-.375zM11.5 5.56a2.75 2.75 0 0 1 0 4.88V5.56z" fill="#1ED760"></path><path d="M16 8a5.752 5.752 0 0 1-4.5 5.614v-1.55a4.252 4.252 0 0 0 0-8.127v-1.55A5.752 5.752 0 0 1 16 8z" fill="#1ED760"></path></svg>
           }
        </>
    )

}