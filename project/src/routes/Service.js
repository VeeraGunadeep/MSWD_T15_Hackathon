import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Service(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2497&q=80"
      title="Discover India's Rich Tapestry of Traditions"
      text="Where Tradition meets Innovation"
      buttonText="Explore Now"
      url="/"
      btnClasss="button"
      />
      </>
  
    )
  }
  
  export default Service;