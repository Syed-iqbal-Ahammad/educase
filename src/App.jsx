import { BrowserRouter } from "react-router";
import RouteLayout from "./Routes/RouteLayout";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <RouteLayout />
      </BrowserRouter>
    </>
  )
}

export default App

