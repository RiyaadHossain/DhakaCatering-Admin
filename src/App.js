import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <Toaster />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
