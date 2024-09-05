"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "./header.css";

const links = [
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.nav
      id="header-nav"
      className="flex justify-between gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.2 }}
      variants={variants}
    >
      <Link
        href="#hero"
        className="flex h-[48px] justify-center bg-transparent text-md text-white font-bold"
      >
        {title}
        <br />
        {subtitle}
      </Link>
      <div className="flex justify-end gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] items-center justify-center rounded-md bg-transparent p-3 text-sm text-white font-medium hover:text-black hover:bg-white"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
