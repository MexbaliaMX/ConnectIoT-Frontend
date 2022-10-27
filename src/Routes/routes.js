import MainPage from "../Views/MainPage"
import Login from "../Views/Login";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routes;
