import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import FormPage from './pages/FormPage';
import "./App.css";

const IdPage = () => {

  const {id} = useParams()

  return (
    <h1>{id}</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/tasks/:id' element={<IdPage/> }/>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
