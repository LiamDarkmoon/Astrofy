import { useState, useEffect } from "react";
import { usePlayerStore } from "@/store/playerStore";
import PlayButton from "./PlayButton";
import SongButton from './SongButton';
import PlayBehaviorButton from './PlayBehaviorButton';


export default function PlayerControlButtons({ audio } : {audio: React.RefObject<HTMLAudioElement>}) {
  const { volume, isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore()

  useEffect(() => {
    isPlaying
    ? audio.current?.play()
    : audio.current?.pause()
  },[isPlaying])

  useEffect(() => {
      if(audio.current) {
          audio.current.volume = volume
      }
  },[volume])

  useEffect(() => {
      const { song, playlist, songs } = currentMusic
      if(song && audio.current) {
          const src = `/music/${playlist?.id}/0${song.id}.mp3`
          audio.current.src = src
          audio.current.play()
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
        audio.current.play()
      }
  }

  const handlePrevClick = () => {
    const { song, playlist, songs } = currentMusic
    if(playlist && song && audio.current) {
      let src = ''
      songs.map((sg, index) => {
        if(song.id -1 === index && song.id >= 0){
          src = `/music/${playlist?.id}/0${index}.mp3`
          setCurrentMusic({
            playlist: playlist,
            song: songs[index-1],
            songs: songs
          })
        } else src = `/music/${playlist?.id}/0${1}.mp3`
      })
      console.log(src)
      audio.current.src = src
      audio.current.play()
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
