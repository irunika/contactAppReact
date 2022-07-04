import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home'
import ContactsNav from './Nav';
import ContactsList from './contacts/ContactsList';

function App() {
  return (
    <>
    <ContactsNav/>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/contacts' element={<ContactsList />}/>
      </Routes>
    </BrowserRouter>
  </>
  
  );
}

export default App;
