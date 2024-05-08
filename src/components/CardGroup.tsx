import { playlists } from '@/lib/data';
import PlaylistItemCard from '@/components/PlaylistItemCard.astro';
import { useEffect, useRef, useState } from 'react';

export default function CardGroup(){
    const groupRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)
    const [cards, setCards] = useState<number>(5)

    useEffect(()=> {
        if(groupRef.current){
            setWidth(groupRef.current.clientWidth)
            setCards(Math.floor(width / 200))
        }
        console.log(cards)
    },[width])

    return(
        <div ref={ groupRef } id="cardGroup" className="cards-group">
        { playlists.map(playlist => <PlaylistItemCard playlist={playlist} />) }
        </div>
    )
}