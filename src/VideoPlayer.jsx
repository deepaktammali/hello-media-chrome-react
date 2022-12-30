import { MediaCaptionsButton, MediaControlBar, MediaController, MediaMuteButton, MediaPipButton, MediaPlayButton, MediaTimeRange, MediaFullscreenButton, MediaPreviewThumbnail, MediaVolumeRange } from 'media-chrome/dist/react'
import { playButtonWrapperStyle } from './VideoPlayer.css';
import clsx from "clsx"

const VideoPlayer = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-sky-100">
            <MediaController>
                <video className="aspect-video" src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4" slot="media"></video>
                <MediaControlBar className={"ml-2"}>
                    <div className={playButtonWrapperStyle}>
                        <MediaPlayButton className="rounded-lg py-2 px-4"></MediaPlayButton>
                    </div>
                    <MediaTimeRange></MediaTimeRange>
                    <div className="flex group relative">
                        <MediaMuteButton></MediaMuteButton>
                        <MediaVolumeRange className="absolute transform origin-bottom-left -rotate-90 left-full group-hover:visible bottom-full hover:visible invisible"></MediaVolumeRange>
                    </div>
                    <MediaCaptionsButton></MediaCaptionsButton>
                    <MediaPipButton></MediaPipButton>
                    <MediaFullscreenButton></MediaFullscreenButton>
                </MediaControlBar>
            </MediaController>
        </div >
    )
}

export default VideoPlayer;