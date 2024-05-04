
import './App.css';
import {RouterProvider,  createHashRouter} from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home/Home';
import Permadeath from './Component/Permadeath/Permadeath';
import Pixel from './Component/Pixel/Pixel';
import Sailing from './Component/Sailing/Sailing';
import Shooter from './Component/Shooter/Shooter';
import Superhero from './Component/Superhero/Superhero';
import GameDetails from './Component/GameDetails';
import NotFound from './Component/NotFound';



let routers = createHashRouter([
  {path:'',element:<Layout/>, children:[
    {index:true,element:<Home></Home>},
    {path:'permadeath',element:<Permadeath/>},
    {path:'Pixel',element:<Pixel/>},
    {path:'sailing',element:<Sailing/>},
    {path:'shooter',element:<Shooter/>},
    {path:'Superhero',element:<Superhero/>},
    {path:'permadeath/gameDetails/:id',element:<GameDetails/>},
    {path:'Pixel/gameDetails/:id',element:<GameDetails/>},
    {path:'sailing/gameDetails/:id',element:<GameDetails/>},
    {path:'shooter/gameDetails/:id',element:<GameDetails/>},
    {path:'Superhero/gameDetails/:id',element:<GameDetails/>},
    {path:'gameDetails/:id',element:<GameDetails/>},
    {path:'*',element:<NotFound/>},
    
  ]}
])


function App() {

  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
