"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

//set x values depending on current path

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname().split("/")[2];
  const value = pathName === "register" ? 200 : -200;
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <motion.div
        initial={{ y: 0, x: value, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
