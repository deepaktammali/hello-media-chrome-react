import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AllLinks from './AllLinks'
import VideoPlayer from './VideoPlayer'
import './index.css'
import AudioPlayer from './AudioPlayer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllLinks />
  }, {
    path: '/video-player',
    element: <VideoPlayer />
  }, {
    path: '/audio-player',
    element: <AudioPlayer />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
