// import React, { useState } from "react";
// import { Container, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);
//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           <h6>MOYURI</h6>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <i className="fas fa-home"></i> HOME
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <i className="far fa-user"></i> About
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/services"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <i className="fab fa-codepen"></i> SERVICES
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/prices"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <i className="far fa-file-alt"></i> PRICES
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <i className="far fa-file-alt"></i> CONTACT
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Nav;
// import React, { useState } from 'react';
// import { Container, Navbar, NavLink } from 'react-bootstrap';
// import Logo from '../../../media/lundry.jpeg';

// const Nav = props => {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <Navbar expanded={expanded} bg="light" expand="lg" className="p-3">
//     <Navbar.Brand href="/"><img src={Logo} alt="Tim-Tim auto" title="Tim-Tim auto" /></Navbar.Brand>
//     <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//             <Nav> 
//                 <Nav.Item><NavLink onClick={() => setExpanded(false)} exact to='/'>Home</NavLink></Nav.Item>
//                 <Nav.Item><NavLink onClick={() => setExpanded(false)} to='/Cars'>Cars</NavLink></Nav.Item>
//                 <Nav.Item><NavLink onClick={() => setExpanded(false)} to='/about'>About</NavLink></Nav.Item>
//                 <Nav.Item><NavLink onClick={() => setExpanded(false)} to='/news'>News</NavLink></Nav.Item>
//                 <Nav.Item><NavLink onClick={() => setExpanded(false)} to='/contacts'>Contacts</NavLink></Nav.Item>
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Nav;