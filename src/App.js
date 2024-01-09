import './App.css';


import Layout from './control/Layout';
import NoPage from './pages/NoPage';
import Choose from './pages/Choose';
import Sort from './pages/Sort';
import Type from './pages/Type';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Choose />} />
                    <Route path="sort" element={<Sort />} />
                    <Route path="type" element={<Type />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
