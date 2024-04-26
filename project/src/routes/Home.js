import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import pic from "../assests/p9.jpg";

function Home(){
  return(
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg={pic}
    title="Discover India's Rich Tapestry of Traditions"
    text="Where Tradition meets Innovation"
    buttonText="Explore Now"
    url="/"
    btnClasss="button"
    />
    
    </>

  )
}

export default Home;