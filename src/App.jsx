import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Connections from "./Components/Connections";
import Requests from "./Components/Requests";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RefundPolicy from "./Components/RefundPolicy";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />  
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refund" element={<RefundPolicy />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
