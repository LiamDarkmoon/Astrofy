import Button from "./Button"
import  { signIn, signOut } from "auth-astro/client"

const Bell = () => (
    <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    ><path
        d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"
        fillOpacity="0.7"
        fill="#FFFFFF"></path></svg
    >
)

const ArrowDown = () => (
    <svg fill="currentcolor" role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg>
)

interface Session {
        user: {
            name: string,
            email: string
        }
        expires: string,
}

export default function HeaderButtons({ session }: { session: any }){
    return(
        <div className="flex gap-2 text-sm">
            <button className="rounded-full hidden lg:grid bg-white text-black h-8 place-content-center py-1 px-4 font-bold hover:scale-105">
                Explorar Premium
            </button>
            <button className="rounded-full bg-black/50 h-8 flex items-center py-1 px-4 font-bold hover:scale-105">
                <ArrowDown/>
                <span className="pl-2">
                    Instalar aplicacion
                </span>
            </button>
            <Button className="rounded-full bg-black/50 hover:scale-105">
                <Bell/>
            </Button>
            <Button
                onClick={ session ? signOut : signIn } 
                className="rounded-full bg-black/50 hover:scale-105"
            >
                <div className="rounded-full bg-green-500 h-6 font-bold w-6 text-black grid place-content-center">{ session ? session.user.name.charAt(0) : "?" }</div>
            </Button>
        </div>
    )
}