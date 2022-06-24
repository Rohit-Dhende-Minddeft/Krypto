import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="parent">
      <div className="landing-page">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
