// import React, { useState } from "react";
// import { motion } from "motion/react";
// function Navigation() {
//   return (
//     <ul className="nav-ul">
//       <li className="nav-li">
//         <a className="nav-link" href="#home">
//           Home
//         </a>
//       </li>

//       <li className="nav-li">
//         <a className="nav-link" href="#about">
//           About
//         </a>
//       </li>

//       <li className="nav-li">
//         <a className="nav-link" href="#work">
//           Work
//         </a>
//       </li>

//       <li className="nav-li">
//         <a className="nav-link" href="#contact">
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
//       <div className="mx-auto c-space max-w-7xl">
//         <div className="flex items-center justify-between py-2 sm:py-0">
//           <a
//             href="/"
//             className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
//           >
//             Miqdad
//           </a>
//           <button
//             className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <img
//               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
//               className="h-6 w-6"
//             />
//           </button>
//           <nav className="hidden sm:flex">
//             <Navigation />
//           </nav>
//         </div>
//       </div>
//       {isOpen && (
//         <motion.div
//           className="block overflow-hidden text-center sm:hidden"
//           initial={{ opacity: 0, x: -10 }}
//           animate={{ opacity: 1, x: 0 }}
//           style={{ maxHeight: "100vh" }}
//           transition={{ duration: 1 }}
//         >
//           <nav className="pb-5">
//             <Navigation />
//           </nav>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "../components/ResizableNavbar";

const Navbar = () => {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#project" },
    { name: "Journey", link: "#journey" },
    { name: "Achievements", link: "#achievements" },
    { name: "Hobbies", link: "#hobbies" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <ResizableNavbar>
        {/* Desktop Navbar */}
        <NavBody>
          {/* Logo */}
          <NavbarLogo />

          {/* Navigation Links */}
          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <NavbarButton href="#contact" variant="primary">Contact</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <a href="#home" className="text-xl font-bold text-neutral-100">
              Miqdad
            </a>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 text-lg py-2"
              >
                {item.name}
              </a>
            ))}

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full text-center bg-white text-black font-semibold py-3 rounded-lg hover:bg-neutral-200 transition"
            >
              Contact Me
            </a>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
};

export default Navbar;
