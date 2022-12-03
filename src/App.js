import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: "orders",
          loader: () => fetch('products.json'),
          element: <Orders></Orders>
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
