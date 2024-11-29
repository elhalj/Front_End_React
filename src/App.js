
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useMemo } from 'react';
import Liste from './components/listeVoiture';
import Formulaire from './components/formulaire';
function App() {
  
  const routers = useMemo(() => createBrowserRouter([
    {
      path: '/',
      element: <Liste />,
    },
    {
      path: '/enregistrerUneVoiture',
      element: <Formulaire />,
    }
  ]))

  return (
    <div className="App">
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
