import React from "react";
import { mySocials } from "@/types/MySocials";

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
