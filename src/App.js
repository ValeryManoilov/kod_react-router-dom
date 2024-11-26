import React , {Suspense , lazy} from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import "./App.css";
import UsersPage from "./pages/UsersPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const UserProfile = lazy(() => import("./pages/UserProfile"))


const Paramspage = () => {

  const {id} = useParams()

  return (
    <div>User - {id}</div>
  )
}


const ProductPage = () => {

  const {id , category} = useParams()

  return (
    <div>User - {id} {category}</div>
  )
}


function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading.......</div>}>
     <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path="/userprofile" element={<UserProfile/>}  />
        <Route path="/home/:id/:name" element={<UsersPage/>}/>
        <Route path="/user/:id" element={<Paramspage/>} />
        <Route path="/user/:id/:category" element={<ProductPage/>} />

        
        <Route path="*" element={<NotFound />} />
      </Routes>
     </Suspense>
    </BrowserRouter>
  );
}

export default App;
