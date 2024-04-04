import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GiftCardPage from "./component/GiftCard";
import GiftCardPage1 from "./component/GiftCard1";
import ButtonTab from "./component/ButtonTab";

const App = () => {
  return (
   <> <Router>
      <Routes>
        <Route
          path="/giftcard" element={<GiftCardPage/>}
        />
        <Route
          path="/giftcard/:status" element={<GiftCardPage/>}
        />
        <Route
          path="/giftcard1" element={<GiftCardPage1/>}
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
