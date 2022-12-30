import { Link } from "react-router-dom"

const AllLinks = () => {
    return (
        <div className="flex flex-col gap-2 w-screen h-screen items-center justify-start pt-6">
            <Link to="/video-player" className="text-sky-600 hover:text-sky-800 font-medium">Vimeo Video Player</Link>
            <Link to="/audio-player" className="text-green-600 hover:text-green-800 font-medium">Spotify Audio Player</Link>
        </div>
    )
}

export default AllLinks;