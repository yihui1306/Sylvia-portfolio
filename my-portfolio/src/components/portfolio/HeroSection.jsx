// import React from "react";
// import { motion } from "framer-motion";

// const PROFILE_IMAGE =
//   "https://media.base44.com/images/public/69c358c6c1a620f2c2cc163e/4ae37ab7d_generated_03cc359f.png";

// export default function HeroSection() {
//   const scrollToContact = () => {
//     document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20 pb-12 bg-background"
//     >
//       <div className="max-w-4xl">
//         {/* Big headline */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="space-y-2"
//         >
//           {/* Line 1: Hi, I'm [photo] Sylvia Li! */}
//           <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
//             <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
//               Hi, I'm
//             </span>
//             <div className="inline-block w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-border shadow-md shrink-0 mx-1">
//               <img
//                 src={PROFILE_IMAGE}
//                 alt="Sylvia Li"
//                 className="w-full h-full object-cover grayscale"
//               />
//             </div>
//             <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
//               Sylvia Li!
//             </span>
//           </div>

//           {/* Line 2: Software Engineer & IT Consultant Driving Digital Transformation */}
//           <div className="flex items-center flex-wrap gap-x-3">
//             <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-muted-foreground/40 leading-tight">
//               I'm a Full-Stack Developer who bridges business goals and
//               technical solutions
//             </span>
//             <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"></span>
//             {/* <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-muted-foreground/40 leading-tight">
//               at
//             </span> */}
//           </div>

//           {/* Line 3: Company name + badge */}
//           {/* <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
//             <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-tight">
//               Acme Corp.
//             </span>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background shadow-sm text-sm font-medium text-foreground">
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
//               Open to work
//             </div>
//           </div> */}
//         </motion.div>

//         {/* CTA + description */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
//           className="flex items-center gap-6 mt-12"
//         >
//           <button
//             onClick={scrollToContact}
//             className="shrink-0 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:opacity-80 transition-opacity"
//           >
//             Get in touch
//           </button>
//           <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
//             Feel free to explore my portfolio and reach out — I'd love to
//             connect!
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

const PROFILE_IMAGE =
  "https://media.base44.com/images/public/69c358c6c1a620f2c2cc163e/4ae37ab7d_generated_03cc359f.png";

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-20 pb-12 bg-background"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to work
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Hi, I'm
              </span>
              <div className="inline-block w-12 h-12 rounded-xl overflow-hidden border border-border shadow-sm shrink-0">
                <img
                  src={PROFILE_IMAGE}
                  alt="Sylvia Li"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Sylvia Li
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-muted-foreground/50 leading-snug">
              Full-Stack Developer who bridges business goals & technical
              solutions
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
            Building cloud-native apps with AWS · Leading Agile teams · Turning
            ideas into working products
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={scrollToContact}
              className="h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Get in touch
            </button>
          </div>
        </motion.div>

        {/* Right: Empty for now */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center justify-center"
        >
          {/* 之後放照片 */}
          <div className="w-64 h-80 rounded-3xl border border-border/30 bg-muted/10" />
        </motion.div>
      </div>
    </section>
  );
}
