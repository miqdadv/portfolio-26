import { twMerge } from "tailwind-merge";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import logo from "../assets/images/logo.png";

import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setVisible(true);
    else setVisible(false);
  });

  return (
    <motion.div
      className={twMerge(
        "fixed inset-x-0 top-0 z-50 w-full flex justify-center",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={twMerge(
        "relative mx-auto hidden w-full max-w-7xl items-center justify-between rounded-full px-6 py-3 lg:flex",
        visible && "bg-neutral-900/70 backdrop-blur-xl border border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={twMerge(
        "hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-white lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 transition"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-white/10"
            />
          )}

          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "90%" : "100%",
        borderRadius: visible ? "12px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={twMerge(
        "relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden",
        visible && "bg-neutral-900/70 backdrop-blur-xl border border-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={twMerge("flex w-full items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={twMerge(
            "absolute inset-x-0 top-16 z-50 flex flex-col gap-4 rounded-lg bg-neutral-900 px-6 py-6 border border-white/10",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a href="#home" className="flex items-center gap-2 font-semibold text-white cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="w-8 h-8 rounded-md"
      />
      Miqdad
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white text-black text-sm font-bold hover:-translate-y-0.5 transition cursor-pointer";

  return (
    <Tag
      href={href || undefined}
      className={twMerge(baseStyles, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};