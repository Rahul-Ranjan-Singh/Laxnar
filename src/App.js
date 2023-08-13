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
import { BsFillTelephoneOutboundFill, BsWhatsapp } from "react-icons/bs";

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
      <a href="tel:+918840007880">
        {" "}
        <button
          title="Contact Sale"
          class="fixed z-90 bottom-10 right-8 bg-white w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300 "
        >
          <BsFillTelephoneOutboundFill size={20} color="black" />
        </button>
      </a>
      <a
        href="https://wa.me/919151019091?text=Hi%20There!"
        class="float"
        target="_blank"
      >
        <button
          title="Contact Sale"
          class="fixed z-90 bottom-28 right-8 bg-white w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300 "
        >
          <BsWhatsapp size={20} color="green" />
        </button>
      </a>
    </Router>
  );
}

export default App;
