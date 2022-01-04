import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Card/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
//import Particles from "react-particles-js";
//import particlesConfig from "./config/particlesConfig";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div
      className="App" /*style={{ position: "relative", overflow: "hidden" }}*/
    >
      {/*  <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>*/}

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container ">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
