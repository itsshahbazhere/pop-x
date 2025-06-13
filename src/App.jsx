import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUP from "./components/SignUP";
import AccountSettings from "./components/AccountSettings";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUP /> },
    { path: "/account-settings", element: <AccountSettings /> },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
