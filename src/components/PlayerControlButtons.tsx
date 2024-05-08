import PlayButton from "./PlayButton";
import SongButton from './SongButton';
import PlayBehaviorButton from './PlayBehaviorButton';


export default function PlayerControlButtons() {
  return (
    <div className='flex justify-center items-center gap-4'>
        <div className="flex flex-1 items-center justify-end gap-2">
            <PlayBehaviorButton rol='random'/>
            <SongButton rol='prev'/>
        </div>
        <PlayButton/>
        <div className="flex flex-1 items-center justify-start gap-2">
            <SongButton rol='next'/>
            <PlayBehaviorButton rol='cicle'/>
        </div>
    </div>
  )
}
