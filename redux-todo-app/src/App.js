import logo from './logo.svg';
import './App.css';
// import AddTodo from './components/AddTodo';
// import APICALL from './components/APICALL';
import Navbar from './components/Navbar';
import Create from './components/Create';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column', alignContent:'center'}}>
      <BrowserRouter>
       {/* <AddTodo />
      <APICALL/> */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
