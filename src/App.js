import NavBar from "./Comonenets/NavBar"; // Make sure the import path is correct
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UploadImage from "./Comonenets/UploadImage";


function App() {
  return (
    <>

      <Router basename="/UST_Hackethon">

        <Routes>
          <Route exact path="/" element={<NavBar />} />
          <Route exact path="/uploadImage" element={<UploadImage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
