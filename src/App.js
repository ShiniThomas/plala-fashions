import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import NavBar from './routes/navbar/navbar.component';
import SignIn from './components/sign-in/sign-in.component';

const Shop = () =>{
  return <h1>Shop page</h1>
}
const App = () => {
  return(
    <Routes>
      <Route path='/' element={<NavBar/>} >
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path='/sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
