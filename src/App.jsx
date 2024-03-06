import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Form />
      <Cards />
      <Main />
      <Footer />
    </>
  );
}
