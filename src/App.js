import React from 'react';
import ReactDom from "react-dom/client";
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideoPage from './components/WatchVideoPage';
import RootLayout from './components/RootLayout';
import SearchResultsPage from './components/SearchResultsPage';

const root = ReactDom.createRoot(document.getElementById("root"))
const appRouter = createBrowserRouter([{
  path:"/",
  element: <RootLayout/>,
  children: [
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchVideoPage/>
    },
    {
      path:"/search",
      element:<SearchResultsPage/>
    }
  ]
}])
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}/>
     </div>
    </Provider>
  )
}
root.render(<AppLayout/>)
