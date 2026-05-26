// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "./pages/Main/Main";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Members from "./pages/Members/Members";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Members />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Main from "./pages/Main/Main";
import Members from "./pages/Members/Members";
import Recruit from "./pages/Recruit/Recruit";
import Project from "./pages/Project/Project";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/members" element={<Members />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;