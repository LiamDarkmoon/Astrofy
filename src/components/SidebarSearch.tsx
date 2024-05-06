const Search = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" fill="#B3B3B3"></path></svg>
)

const Menu = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" width="16" height="16"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z" fill="#B3B3B3"></path></svg>
)
export default function SidebarSearch() {
    return(
        <div className="flex items-center justify-between px-3">
            <button className="min-h-8 rounded-full p-2 hover:bg-zinc-800 hover:text-white transition duration-300">
                <Search/>
            </button>
            <button className="min-h-8 px-3 py-1 flex items-center gap-2 text-sm text-[#B3B3B3] hover:scale-105 hover:text-white transition duration-300">
                Recientes
                <Menu/>
            </button>
        </div>
    )
}