import { Routes, Route } from "react-router-dom";


import Pages from "./Component/Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages/>} />
  
    </Routes>
  );
}

export default App;
