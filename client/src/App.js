
import './App.css';
import DashboardPage from './views/DashboardPage';
import {Routes, Route} from 'react-router-dom'
import AddStorePage from './views/AddStorePage';
import EditPage from './views/EditPage';
import DetailsPage from './views/DetailsPage';

function App() {
  return (
    <div className="container mt-5">
      <h1>Store Finder</h1>

      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/store/add" element={<AddStorePage/>}/>
        <Route path="/store/:id" element={<DetailsPage/>}/>
        <Route path="store/edit/:id" element={<EditPage/>}/>
      </Routes>

    </div>
  );
}

export default App;