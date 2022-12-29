import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
      path:"/post/:id",
      element:<Single/>
      },
      {
      path:"/write",
      element:<Write/>
      },
  ]
  },
  {
    path:"/register",
    element:<div><Register/></div>
  },
  {
    path:"/login",
    element:<div><Login/></div>
  },
  // {
  //   path:"/write",
  //   element:<div><Write/></div>
  // },
  // {
  //   path:"/single",
  //   element:<div><Single/></div>
  // },
])

function App() {
  return (
    <div className="app">
      <div className='container'>
     
      <RouterProvider router={router}/>

      </div>
    </div>
  );
}
function Layout() {
  return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App;
