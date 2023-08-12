
import './App.css';
/*
importing Nav Component that we have made in Nav.js file
for each component we make different files 
so that we can reuse them later.
We have placed each component where ever we require them..
*/
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />{/**here we have placed our Nav bar component*/}

        <Routes>{/**to make route in react */}

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todolist' element={<TodoList />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
