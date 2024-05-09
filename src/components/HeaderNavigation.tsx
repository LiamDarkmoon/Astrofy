import { useEffect, useState } from "react";

const ArrowRight = () => (
    <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    ><path
      d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
      fill="#FFFFFF"></path></svg
    >  
)

const ArrowLeft = () => (
    <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    ><path
        d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
        fill="#FFFFFF"></path></svg
    >
)

export default function HeaderNavigation({ id } : { id: string | undefined }){
    const [prevPage, setPrevPage] = useState<string>();
    const [nextPage, setNextPage] = useState<string>();

    useEffect(() => {
        if(id){
            const idNumber = parseInt(id);
            
            const prev = idNumber - 1 > 0 ? `/playlist/${idNumber - 1}` : '/';
            const next = idNumber < 5 ? `/playlist/${idNumber + 1}` : `/playlist/5`;
            
            setPrevPage(prev);
            setNextPage(next);
        } else setNextPage('/playlist/1')
    }, [id])

    return(
        <div className="flex gap-2">
            <a  
                className={ id ? "rounded-full bg-black/60 w-8 h-8 grid place-content-center cursor-pointer" : "rounded-full bg-black/30 w-8 h-8 grid place-content-center cursor-not-allowed" }
                href={ prevPage }
            >
                <ArrowLeft/>
            </a>
            <a 
                className={ id === '5' ? "rounded-full bg-black/30 w-8 h-8 grid place-content-center cursor-not-allowed" : "rounded-full bg-black/60 w-8 h-8 grid place-content-center cursor-pointer" }
                href={ nextPage }
            >
                <ArrowRight/>
            </a>
        </div>
    )
}