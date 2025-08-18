


import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LayoutPage } from './pages/layout';
import { Dashboard } from './pages/dashboard';
import { Patient } from './pages/patient';
import { ListPatient } from './pages/listPatient';
import { LoginPage } from './auth/login';
import { RegisterPage } from './auth/register';
import { LayoutAuth } from './auth/layoutAuth';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={ <LayoutAuth/> }>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<LayoutPage />}>         
          <Route path="/" element={<Dashboard />} />     
          <Route path="patient" element={<Patient />} />     
          <Route path="list" element={<ListPatient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


