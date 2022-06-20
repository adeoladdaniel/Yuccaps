// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import {Nav,Container,Navbar} from "react-bootstrap";






function Navvbar(){


  

    return(

        <>
<Navbar collapseOnSelect expand="lg" className="top_nav">
  <Container>
  <Navbar.Brand href="#home"><img alt="logo" src="./assets/YUCCAPS_PNG 1.svg"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav_links">
      <Nav.Link className="Home" href="/home"> <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.728 2.017 2.9 4.999c-.64.497-1.158 1.555-1.158 2.357v5.261a3 3 0 0 0 2.99 2.997h8.222a2.998 2.998 0 0 0 2.989-2.99V7.455c0-.859-.575-1.96-1.278-2.45l-4.388-3.074c-.994-.695-2.592-.66-3.55.086ZM8.843 12.774v-2.13" stroke="#292D32" stroke-width="1.065" stroke-linecap="round" stroke-linejoin="round"/></svg>Home</Nav.Link>
      <Nav.Link href="#features"> <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.343 12.78a5.68 5.68 0 1 0 0-11.36 5.68 5.68 0 0 0 0 11.36ZM5.083 15.62h8.52" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> About Us</Nav.Link>
      
      <Nav.Link href="#pricing"> <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.98 1.42v14.2M3.98 2.84h7.952c1.917 0 2.343 1.065.994 2.414l-.852.852c-.568.568-.568 1.49 0 1.988l.852.852c1.349 1.349.852 2.414-.994 2.414H3.98" stroke="#17191C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg> Help Center</Nav.Link>

    
    </Nav>

    <div className="button_section">
        <button> Login</button>
        <button> Signup</button>


      </div>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
          
        </>
    );
}

export default Navvbar;