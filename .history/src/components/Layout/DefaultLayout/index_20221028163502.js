import Header from "./Header";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";

function DefaultLayout(children) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contant"></div>
      </div>
    </>
  );
}

export default DefaultLayout;
