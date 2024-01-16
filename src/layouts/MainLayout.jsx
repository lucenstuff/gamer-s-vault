import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <LoginModal isOpen={false} onClose={() => {}} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
