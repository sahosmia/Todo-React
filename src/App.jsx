import { BrowserRouter } from "react-router-dom";
import CustomRoute from "./routes/router";

function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <CustomRoute/>
      </BrowserRouter> 
    </>
  )
}

export default App
