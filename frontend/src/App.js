import "./App.css";
import Body from "./Components/Body";
import Inbox from "./Components/Inbox";
import Login from "./Components/Login";
import Mail from "./Components/Mail";
import NavBar from "./Components/NavBar";
import SendEmail from "./Components/SendEmail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./Components/Signup";

/**
 * ! Creating Browser Router
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <NavBar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
    </div>
  );
}

export default App;
