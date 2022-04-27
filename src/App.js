
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './approuter/AppRouter';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">

   <AuthContextProvider>
        <AppRouter/>
        <ToastContainer/>
   </AuthContextProvider>


    </div>
  );
}

export default App;
