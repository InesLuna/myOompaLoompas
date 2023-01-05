import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NoMatchs } from "./pages/NoMatchs";
import store from './reducer/store';
import { Provider } from 'react-redux';
import { DetailView } from './pages/DetailView';
import { GeneralView } from './pages/GeneralView';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GeneralView />,
        errorElement: <NoMatchs />,
    },
    {
        path: "detail/:oompasId",
        element: <DetailView />,
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
   
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

  );
