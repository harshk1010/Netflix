// import React from "react";

// function FooterSection() {
//   return (
//     <footer className="bg-black text-gray-400 py-10 px-4 md:px-16 text-sm">
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-8">
//         <div className="space-y-3">
//           <button className="hover:underline block text-left">FAQ</button>
//           <button className="hover:underline block text-left">Investor Relations</button>
//           <button className="hover:underline block text-left">Privacy</button>
//           <button className="hover:underline block text-left">Speed Test</button>
//         </div>

//         <div className="space-y-3">
//           <button className="hover:underline block text-left">Help Center</button>
//           <button className="hover:underline block text-left">Jobs</button>
//           <button className="hover:underline block text-left">Cookie Preferences</button>
//           <button className="hover:underline block text-left">Legal Notices</button>
//         </div>

//         <div className="space-y-3">
//           <button className="hover:underline block text-left">Account</button>
//           <button className="hover:underline block text-left">Ways to Watch</button>
//           <button className="hover:underline block text-left">Corporate Information</button>
//           <button className="hover:underline block text-left">Only on Netflix</button>
//         </div>

//         <div className="space-y-3">
//           <button className="hover:underline block text-left">Media Centre</button>
//           <button className="hover:underline block text-left">Terms of Use</button>
//           <button className="hover:underline block text-left">Contact Us</button>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto mt-8 text-gray-500 text-xs">
//         <p>Netflix India</p>
//       </div>
//     </footer>
//   );
// }

// export default FooterSection;


import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function FooterSection() {
  const footerData = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Centre", "Terms of Use", "Contact Us"],
  ];

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-black text-gray-400 py-10 px-4 md:px-16 text-sm"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-700 pt-8"
      >
        {footerData.map((column, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="space-y-3"
          >
            {column.map((link, i) => (
              <motion.button
                key={i}
                variants={itemVariants}
                className="hover:underline block text-left"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto mt-8 text-gray-500 text-xs"
      >
        <p>Netflix India</p>
      </motion.div>
    </motion.footer>
  );
}

export default FooterSection;