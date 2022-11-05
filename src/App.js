import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './styles/styles.scss';
import MainPage from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
