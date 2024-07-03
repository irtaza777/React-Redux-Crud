import './App.css';
import { Route, Routes,BrowserRouter  } from 'react-router-dom';

import Home from "./components/home/home"
import Adduser from "./components/Add-User/adduser"
import Updateuser from "./components/Update-User/updateuser"

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/Adduser" element={<Adduser/>}></Route>
<Route path="/updateuser/:id" element={<Updateuser/>}></Route>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
