
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

export default function HeaderNavigation(){
    return(
        <div className="flex gap-2">
            <button className="rounded-full bg-black/60 w-8 h-8 grid place-content-center">
                <ArrowLeft/>
            </button>
            <button className="rounded-full bg-black/60 w-8 h-8 grid place-content-center">
                <ArrowRight/>
            </button>
        </div>
    )
}