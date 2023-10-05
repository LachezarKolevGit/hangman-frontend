import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
