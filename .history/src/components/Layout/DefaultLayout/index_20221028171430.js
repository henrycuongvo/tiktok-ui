import Header from "~/components/Layout/components/Header";
// import Footer from "./Footer";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contant">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
