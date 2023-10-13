import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";
import Features from "./pages/Features";
import Privacypolicy from "./pages/Privacypolicy";
import Dashboard from './pages/Dashboard'
import { useSelector } from "react-redux";
import AddPost from "./pages/AddPost";
import YourPost from "./pages/YourPost";
import Table from "./pages/Table";
import Electrician from "./pages/Electrician";
import Engineer from "./pages/Engineer";
import Designer from "./pages/Designer";
import Carpenter from "./pages/Carpenter";
import Painter from "./pages/Painter";
import Profile from "./pages/Profile";
import Property from "./pages/Property";
import Stock from "./pages/Stock";
import Preview from "./pages/Preview";
import SellerHeader from "./components/Header/SellerHeader";


function App() {
  const { user } = useSelector(state => state.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/features" element={<Features />} />
        <Route path="/policy" element={<Privacypolicy />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/seller" element={<Table />} />
        <Route path="/electrician" element={<Electrician/>}/>
        <Route path="/engineer" element={<Engineer/>}/>
        <Route path="/designer" element={<Designer/>}/>
        <Route path="/carpenter" element={<Carpenter/>}/>
        <Route path="/preview" element={<Preview/>}/>
        <Route path="/stock" element={<Stock/>}/>
        <Route path="/seller" element={<SellerHeader/>}/>
        
        <Route path="/property" element={<Property/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/painter" element={<Painter/>}/>
        <Route path="/addPost" element={user ? <AddPost /> : <Navigate to="/login" />} />
        <Route path="/yourPost" element={user ? <YourPost /> : <Navigate to="/login" />} />
        {/* <Route path="/dashboard" element={loginStatus ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/dashboard/addpost" element={loginStatus ? <AddPost /> : <Navigate to="/signin" />} />
        <Route path="/dashboard/addblog" element={loginStatus ? <AddBlog /> : <Navigate to="/signin" />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={!loginStatus ? <SignIn /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!loginStatus ? <SignUp /> : <Navigate to="/dashboard" />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
