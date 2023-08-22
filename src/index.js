import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from './pages/RootPage';
import VideoDetailPage from './pages/VideoDetailPage';
import VideoListPage from './pages/VideoListPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
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
        path: "/videos:keyword",
        element: <VideoListPage />
      },
      {
        path: "/videos/:videoId",
        element: <VideoDetailPage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
