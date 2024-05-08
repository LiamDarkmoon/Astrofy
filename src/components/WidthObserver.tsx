import { useEffect, useRef } from "react"
import { usePlayerStore } from "../store/playerStore"

export default function WidthObserver() {
    const observerRef = useRef<HTMLDivElement>(null)
    const { cardNumber, setCardNumber } = usePlayerStore(state => state)

    useEffect(() => {
        if(observerRef.current){
            setCardNumber(Math.ceil(observerRef.current.clientWidth / 200))
            console.log(cardNumber)
        }
    },[cardNumber, observerRef.current])

    return(
        <div ref={observerRef} className="opacity-0 w-full">observer</div>
    )
}