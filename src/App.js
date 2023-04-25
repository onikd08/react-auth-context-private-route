import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          ),
        },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
