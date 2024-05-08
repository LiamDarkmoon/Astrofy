import ConectDeviceButton from "./buttons/ConectDeviceButton";
import ListeningButton from "./buttons/ListeningButton";
import LyricsButton from "./buttons/LyricsButton";
import PlayStackButton from "./buttons/PlayStackbutton";
import FullScreenButton from "./FullScreenButton";
import MiniPlayerButton from "./MiniPlayerButton";
import VolumeControl from "./VolumeControl";

export default function PlayerSideControls() {
    return(
        <div className="flex w-[30%] min-w-[180px] justify-end items-center">
            <ListeningButton/>
            <LyricsButton/>
            <PlayStackButton/>
            <ConectDeviceButton/>
            <VolumeControl/>
            <MiniPlayerButton/>
            <FullScreenButton/>
        </div>
    )
}