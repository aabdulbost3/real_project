import { Route, Routes } from "react-router-dom";
import Footer from "../../components/client/Footer";
import Header from "../../components/client/Header";
import { DataRouters } from "./data-router";

function AllRouter() {
  return (
    <>
      <Header />
      <Routes>
        {DataRouters.map((elem, index) => (
          <Route path={elem.path} element={elem.Element} key={index} />
        ))} 
      </Routes>
      <Footer />
    </>
  );
}

export default AllRouter;
