import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { NoMatchs } from "./pages/NoMatchs";
import store from './reducer/store';
import { Provider } from 'react-redux';
import { DetailView } from './pages/DetailView';
import './index.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NoMatchs />,
    },
    {
        path: "detail",
        element: <DetailView />,
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
  );
