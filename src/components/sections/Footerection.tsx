import React from "react";
import { mySocials } from "@/data/MySocials";

interface Social {
  name: string;
  href: string;
  icon: string;
}

const Footer: React.FC = () => {
  return (
    <section className="flex container mx-auto md:flex flex-col items-center gap-6 flex-wrap md:items-center justify-between md:gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Horizontal Divider */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms and Privacy Links */}
      <div className="flex gap-2">
        <a href="/terms" className="hover:underline font-semibold">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="/privacy" className="hover:underline font-semibold">
          Privacy Policy
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-3">
        {mySocials.map((social: Social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              className="w-7 h-7 hover:opacity-80 transition-opacity"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="font-semibold">© 2025 Rachdian. All rights reserved.</p>
    </section>
  );
};

export default Footer;


// import React from "react";
// import { mySocials } from "@/data/MySocials";

// interface Social {
//   name: string;
//   href: string;
//   icon: string;
// }

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-neutral-900 text-neutral-400 py-6 ">
//       <div className="container mx-auto flex flex-col items-center gap-6 md:gap-10 px-4 md:flex-row md:justify-between">
//         {/* Horizontal Divider */}
//         <div className="w-full hidden md:block bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px]" />

//         {/* Links: Terms and Privacy */}
//         <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-center">
//           <a
//             href="/terms"
//             className="hover:underline font-semibold transition-colors hover:text-white"
//           >
//             Terms & Conditions
//           </a>
//           <span className="hidden md:block">|</span>
//           <a
//             href="/privacy"
//             className="hover:underline font-semibold transition-colors hover:text-white"
//           >
//             Privacy Policy
//           </a>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex justify-center gap-4">
//           {mySocials.map((social: Social, index) => (
//             <a
//               href={social.href}
//               key={index}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={social.name}
//               className="hover:opacity-80 transition-opacity"
//             >
//               <img
//                 src={social.icon}
//                 alt={social.name}
//                 className="w-8 h-8 rounded-full border border-neutral-600 p-1 bg-neutral-800"
//               />
//             </a>
//           ))}
//         </div>

//         {/* Footer Text */}
//         <p className="text-center font-semibold text-sm md:text-base">
//           © 2025 Rachdian. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

