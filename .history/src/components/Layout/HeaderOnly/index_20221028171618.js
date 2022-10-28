import Header from "~/components/Layout/components/Header";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="contant">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
