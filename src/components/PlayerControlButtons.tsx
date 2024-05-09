import { useEffect } from "react";
import { usePlayerStore } from "@/store/playerStore";
import PlayButton from "./PlayButton";
import SongButton from './SongButton';
import PlayBehaviorButton from './PlayBehaviorButton';


export default function PlayerControlButtons({ audio } : {audio: React.RefObject<HTMLAudioElement>}) {
  const { volume, isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore()

  useEffect(() => {
    const lastListened = window.localStorage.getItem('lastMusic')
    if(lastListened){
      const { playlist, song, songs } = JSON.parse(lastListened)
      setCurrentMusic({ playlist, song, songs })
    } else {
      const max = 5
      const randomNumber = Math.floor(Math.random() * max) + 1
      if(!currentMusic.song && audio.current){
        fetch (`/api/get-info-playlist.json?id=${randomNumber}`)
        .then(res => res.json())
        .then(data => {
          const { songs, playlist } = data                    
          setCurrentMusic({ playlist, song: songs[randomNumber], songs })
        })
      }
    }
  },[])

  useEffect(() => {
    isPlaying
    ? audio.current?.play()
    : audio.current?.pause()
  },[isPlaying])

  useEffect(() => {
      if(audio.current){
          audio.current.volume = volume
      }
  },[volume])

  useEffect(() => {
      const { song, playlist, songs } = currentMusic
      if(song && audio.current) {
          const src = `/music/${playlist?.id}/0${song.id}.mp3`
          audio.current.src = src
          if(isPlaying){
            audio.current.play()
          } 
          const playlistURL = `/api/get-info-playlist.json?id=${playlist?.id}`
            fetch (playlistURL)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                window.localStorage.setItem('lastMusic', JSON.stringify({ playlist, song: songs[song?.id-1], songs }))
            })
      }
  },[currentMusic])

  const handlePlayClick = () => {
      setIsPlaying(!isPlaying)
  }

  const handleNextClick = () => {
      const { song, playlist, songs } = currentMusic
      if(playlist && song && audio.current) {
        let src = ''
        songs.map((sg, index) => {
          if(song.id -1 === index && song.id <= songs.length - 1){
            src = `/music/${playlist?.id}/0${song.id+1}.mp3`
            setCurrentMusic({
              playlist: playlist,
              song: songs[index+1],
              songs: songs
            })
          } else src = `/music/${playlist?.id}/0${5}.mp3`
        })
        audio.current.src = src
        setIsPlaying(true)

      }
  }

  const handlePrevClick = () => {
    const { song, playlist, songs } = currentMusic
    if(playlist && song && audio.current) {
      let src = ''
      songs.map((sg, index) => {
        if(song.id -1 === index && index > 0){
          src = `/music/${playlist?.id}/0${index}.mp3`
          setCurrentMusic({
            playlist: playlist,
            song: songs[index-1],
            songs: songs
          })
        } else src = `/music/${playlist?.id}/0${1}.mp3`
      })
      audio.current.src = src
      setIsPlaying(true)
    }
  }

  return (
    <div className='flex justify-center items-center gap-4'>

        <div className="flex flex-1 items-center justify-end gap-2">
            <PlayBehaviorButton rol='random'/>
            <SongButton rol='prev' click={ handlePrevClick }/>
        </div>

        <PlayButton click={ handlePlayClick }/>

        <div className="flex flex-1 items-center justify-start gap-2">
            <SongButton rol='next' click={ handleNextClick }/>
            <PlayBehaviorButton rol='cicle'/>
        </div>
        
    </div>
  )
}
