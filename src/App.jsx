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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./pages/Members/Members";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;