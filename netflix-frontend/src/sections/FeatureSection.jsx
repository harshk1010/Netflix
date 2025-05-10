// import React from "react";

// function FeatureSection() {
//   return (
//     <>
//       {/* Section 1 */}
//       <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 border-b border-gray-700 bg-black text-white">
//         <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Enjoy on your TV
//           </h2>
//           <p className="text-xl md:text-2xl font-light">
//             Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
//           </p>
//         </div>
//         <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
//           <img
//             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
//             alt="TV"
//             className="w-full"
//           />
//           <video
//             className="absolute top-[20%] left-[13%] w-[73%] h-[54%] object-cover"
//             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
//             autoPlay
//             loop
//             muted
//           ></video>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-20 border-b border-gray-700 bg-black text-white">
//         <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
//           <img
//             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
//             alt="Mobile Download"
//             className="w-full"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Download your shows to watch offline
//           </h2>
//           <p className="text-xl md:text-2xl font-light">
//             Save your favourites easily and always have something to watch.
//           </p>
//         </div>
//       </section>

//       {/* Section 3 */}
//       <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 bg-black text-white">
//         <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Watch everywhere
//           </h2>
//           <p className="text-xl md:text-2xl font-light">
//             Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
//           </p>
//         </div>
//         <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
//           <img
//             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
//             alt="Devices"
//             className="w-full"
//           />
//           <video
//             className="absolute top-[20%] left-[13%] w-[73%] h-[54%] object-cover"
//             src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
//             autoPlay
//             loop
//             muted
//           ></video>
//         </div>
//       </section>
//     </>
//   );
// }

// export default FeatureSection;


import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function FeatureSection() {
  return (
    <>
      {/* Section 1 */}
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 border-b border-gray-700 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          custom={0.2}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Enjoy on your TV
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
          custom={0.4}
          variants={sectionVariants}
        >
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="TV"
            className="w-full"
          />
          <video
            className="absolute top-[20%] left-[13%] w-[73%] h-[54%] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-20 border-b border-gray-700 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0"
          custom={1.2}
          variants={sectionVariants}
        >
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="Mobile Download"
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          custom={1.4}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Download your shows to watch offline
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Save your favourites easily and always have something to watch.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 bg-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        variants={sectionVariants}
      >
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          custom={2.2}
          variants={sectionVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Watch everywhere
          </h2>
          <p className="text-xl md:text-2xl font-light">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
          custom={2.4}
          variants={sectionVariants}
        >
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="Devices"
            className="w-full"
          />
          <video
            className="absolute top-[20%] left-[13%] w-[73%] h-[54%] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </motion.section>
    </>
  );
}

export default FeatureSection;