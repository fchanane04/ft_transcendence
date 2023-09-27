import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'



function App() {
  return (
    <div className="content">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
