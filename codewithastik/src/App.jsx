import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./container";

const App = () => {
  return (
    <div className="w-full flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        {/* if the route not matching */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
