import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Error404Page from "./Pages/Error404Page";
import ServicePage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import React from "react";
import Footer from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductDetail from "./Pages/ProductDetail";
import GetCallPage from "./Pages/GetCallPage";
import Dashboard from "./Pages/DashBoard/pages/Dashboard";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Dashboard />
        </Route>
        <div className="App">
          <NavBar />
          <div className="content">
            <div>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutUsPage />
              </Route>
              <Route path="/contact">
                <ContactUsPage />
              </Route>
              <Route path="/service">
                <ServicePage />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/productdetails/:id">
                <ProductDetail />
              </Route>
              <Route path="/getcall/:name">
                <GetCallPage />
              </Route>
              <Route path="/adminlogin">
                <AdminLogin />
              </Route>
            </div>
          </div>
          <Footer />
        </div>
        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
