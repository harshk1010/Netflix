// import React from "react";

// function FAQSection() {
//   return (
//     <div className="bg-black text-white py-20 px-4 md:px-16">
//       <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
//         Frequently Asked Questions
//       </h1>

//       <div className="space-y-4 max-w-4xl mx-auto">
//         {[
//           "What is Netflix?",
//           "How much does Netflix cost?",
//           "Where can I watch?",
//           "How do I cancel?",
//         ].map((question, index) => (
//           <div
//             key={index}
//             className="bg-[#303030] text-white flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-[#454545] transition duration-300"
//           >
//             <span className="text-lg md:text-xl font-medium">{question}</span>
//             <span className="text-2xl font-light">+</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FAQSection;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one low fixed monthly fee.",
  },
  {
    question: "Where can I watch?",
    answer: "You can watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com.",
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-black text-white py-20 px-4 md:px-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => toggleFAQ(index)}
              className="bg-[#303030] flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-[#454545] transition duration-300"
            >
              <span className="text-lg md:text-xl font-medium">{faq.question}</span>
              <span className="text-2xl font-light">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-[#303030] px-6 pb-4 text-gray-300"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;