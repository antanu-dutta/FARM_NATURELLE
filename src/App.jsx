import HeaderContainer from "./Component/Header/Header Container/HeaderContainer";
import Available from "./Component/Available Section/Available";
import Footer from "./Component/Footer Container/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <Available />
      <Footer />
    </>
  );
}

export default App;
