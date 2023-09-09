import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import NFTDetails from "./pages/NFTDetails";

const App = () => {
  return (
    <div className="min-h-screen bg-repeat bg-gradient-to-t from-gray-800 via-[#25bd9c] to-gray-900 bg-center subpixel-antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/nft/:id" element={<NFTDetails />} />
      </Routes>
    </div>
  );
};

export default App;
