import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RoutesWrapper from "./routes/RoutesWrapper";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header/>
      <ToastContainer
        position="top-left"
        autoClose={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="views">
        <RoutesWrapper />
      </main>
      <Footer />
    </>
  );
}

export default App;
