import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/DialogsContainer';

import HeaderContainer from './components/HeaderContainer';
import Login from './components/login/Login';
import Navbar from './components/Navbar';
import ProfileContainer from './components/ProfileContainer';
import UsersContainer from './components/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
