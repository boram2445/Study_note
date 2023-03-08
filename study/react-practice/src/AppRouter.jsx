import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./RouterPractice/components/NotFound";
import Home from "./RouterPractice/components/Home";
import Videos from "./RouterPractice/components/Videos";
import Root from "./RouterPractice/components/Root";
import VideoDetail from "./RouterPractice/components/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
