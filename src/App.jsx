import RouterApp from "./routes"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// função que retorna app com rotas
function App() {
  return (
    <>
      <ToastContainer autoClose={3000}/>
      <RouterApp />
    </>
  )
}

export default App
