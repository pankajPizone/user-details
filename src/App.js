import logo from './logo.svg';
import './styles.css';
import Header from "./components/header";
import UserCard from "./components/userCards";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header />
      <UserCard />
      <Footer />
    </div>
  </div>
  );
}

export default App;
