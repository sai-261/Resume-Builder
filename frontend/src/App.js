import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import 'antd/dist/antd.min.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Templates from './pages/templates/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Protected><Home/></Protected>}/>
       <Route path='/home' element={<Protected><Home/></Protected>}/>
       <Route path='/profile' element={<Protected><Profile/></Protected>}/>
       <Route path="/templates/:id" element={<Protected><Templates/></Protected>} /> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
export function Protected(props){
  if(localStorage.getItem('Resumebuilder-resumes')){
    return props.children;
  }
  else{
    return <Navigate to='/login'/>;
  }
}



