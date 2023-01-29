
import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import IconsFontsImg from './Components/Icons-fonts-img/IconsFontsImg';
//function name then its location


function App() {
  return (
   <>
   <h1 style={{color:"white",textAlign:"center", fontSize:"44px"}}>SetUp</h1>
   <Header/>
   <Main/>
   <IconsFontsImg/>
   <Footer/>
   </>
  );
}

export default App;
