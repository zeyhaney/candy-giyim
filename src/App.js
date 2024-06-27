import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /home only once when the component mounts
    navigate("/home");
  }, [navigate]); // Dependency array with navigate to ensure stability

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;