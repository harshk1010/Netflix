
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import SignIn from "../Pages/SignIn";
// import SignUp from "../Pages/SignUp";

// function HeroSection() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const showSignIn = location.pathname === "/signin";
//   const showSignUp = location.pathname === "/signup";

//   const handleSignInOpen = () => {
//     navigate("/signin");
//   };

//   const handleSignUpOpen = () => {
//     navigate("/signup");
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div
//       className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative text-white"
//       style={{
//         backgroundImage: 'url("/hero.png")',
//         fontFamily: "'Poppins', sans-serif",
//       }}
      
//     >
//       <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

//       <nav className="relative z-10 flex items-center justify-between max-w-[80vw] mx-auto h-[62px]">
//         <img
//           src="/netflix-logo.png"
//           alt="Netflix Logo"
//           className="w-[134px]"
//         />
//         <div className="flex gap-4">
//           <button className="border border-white text-white bg-black bg-opacity-70 rounded px-4 py-1 text-sm">
//             English
//           </button>
//           <button
//             onClick={handleSignInOpen}
//             className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-1 text-sm font-semibold"
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       <div className="absolute top-1/3 w-full z-10 text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Enjoy Big Movies and Hit Series At ₹149
//         </h1>
//         <p className="text-xl md:text-2xl mb-4">Join Today. Cancel Anytime.</p>
//         <p className="text-lg mb-6">
//           Ready to Restart? Enter your email to create or restart your membership.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//           <input
//             type="text"
//             placeholder="Email Address"
//             className="px-4 py-3 rounded w-full sm:w-80 text-black"
//           />
//           <button
//             onClick={handleSignUpOpen}
//             className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
//           >
//             Get Started &gt;
//           </button>
//         </div>
//       </div>

//       {/* Modal based on Route */}
//       {showSignIn && (
//         <SignIn onClose={handleClose} onSwitchToSignUp={handleSignUpOpen} />
//       )}
//       {showSignUp && (
//         <SignUp onClose={handleClose} onSwitchToSignIn={handleSignInOpen} />
//       )}
//     </div>
//   );
// }

// export default HeroSection;


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const showSignIn = location.pathname === "/signin";
  const showSignUp = location.pathname === "/signup";

  const handleSignInOpen = () => navigate("/signin");
  const handleSignUpOpen = () => navigate("/signup");
  const handleClose = () => navigate("/");

  return (
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative text-white"
      style={{
        backgroundImage: 'url("/hero.png")',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex items-center justify-between max-w-[80vw] mx-auto h-[62px]"
      >
        <img src="/netflix-logo.png" alt="Netflix Logo" className="w-[134px]" />
        <div className="flex gap-4">
          <button className="border border-white text-white bg-black bg-opacity-70 rounded px-4 py-1 text-sm">
            English
          </button>
          <button
            onClick={handleSignInOpen}
            className="bg-red-600 hover:bg-red-700 text-white rounded px-4 py-1 text-sm font-semibold"
          >
            Sign In
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-1/3 w-full z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Enjoy Big Movies and Hit Series At ₹149
        </h1>
        <p className="text-xl md:text-2xl mb-4">Join Today. Cancel Anytime.</p>
        <p className="text-lg mb-6">
          Ready to Restart? Enter your email to create or restart your membership.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="text"
            placeholder="Email Address"
            className="px-4 py-3 rounded w-full sm:w-80 text-black"
          />
          <button
            onClick={handleSignUpOpen}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
          >
            Get Started &gt;
          </button>
        </motion.div>
      </motion.div>

      {/* Modal Animation */}
      <AnimatePresence>
        {showSignIn && (
          <motion.div
            key="signin"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50"
          >
            <SignIn onClose={handleClose} onSwitchToSignUp={handleSignUpOpen} />
          </motion.div>
        )}

        {showSignUp && (
          <motion.div
            key="signup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-50"
          >
            <SignUp onClose={handleClose} onSwitchToSignIn={handleSignInOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;