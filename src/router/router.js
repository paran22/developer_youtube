import { createBrowserRouter } from 'react-router-dom';
import VideoDetailPage from '../pages/VideoDetailPage';
import VideoListPage from '../pages/VideoListPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from '../App';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <VideoListPage />
      },
      {
        path: "/videos",
        element: <VideoListPage />
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetailPage />
      }
    ],
  },
]);