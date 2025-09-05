import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { User as UserIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative overflow-x-hidden">
      {/* Profile Icon */}
      <div className="absolute top-4 right-4 z-50">
        <Link href="/profile" className="cursor-pointer">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="bg-background p-1 flex items-center justify-center space-x-2 md:p-2"
          >
            <UserIcon className="text-neon-green w-7 h-7 md:w-8 md:h-8" />
          </HoverBorderGradient>
        </Link>
      </div>

      <motion.div
        initial={{ y: -10, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          ease: "linear",
          stiffness: 20,
          damping: 10,
          duration: 0.3,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Logo and Header Section */}
            <div className="flex flex-col pb-6 justify-center items-center">
              <div className="flex gap-5 justify-center items-center">
                <Image
                  priority
                  src="/sahyadri_logo.png"
                  className="w-14 h-12"
                  alt="logo"
                  width={500}
                  height={500}
                />
                <Image
                  priority
                  src="/sosc_logo.svg"
                  className="w-16 h-14"
                  alt="logo"
                  width={500}
                  height={500}
                />
                <Image
                  priority
                  src="/synergia_logo.svg"
                  className="w-20 h-18"
                  alt="Synergia logo"
                  width={500}
                  height={500}
                />
              </div>
              <p className="pt-2 tracking-wide text-neon-green text-center">
                Presents
              </p>
            </div>

            {/* Main Logo Section */}
            <div className="flex w-fit flex-col items-center">
              <Image
                priority
                src="/logo.svg"
                alt="logo"
                className="md:w-80 md:h-[10.5rem] w-64 h-[8.4rem]"
                width={500}
                height={500}
              />
              <p className="md:text-sm text-xs pt-3 tracking-wide text-neon-green text-center">
                Expertise Redefined, Experience Reimagined.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Infinite Moving Cards Section */}
      <motion.div
        initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          ease: "linear",
          stiffness: 20,
          damping: 10,
          duration: 0.3,
        }}
      >
        <InfiniteMovingCards
          items={[
            { title: "Registrations Closed" },
            { title: "|" },
            { title: "Stay tuned for our upcoming events" },
            { title: "|" },
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Main Buttons Section */}
            <div className="flex flex-col md:flex-row items-center gap-4 pb-20 md:pb-10 w-full justify-center">
              {/* Event Registration Button
              <Link href="/register" className="flex justify-center w-full md:w-auto">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-background md:w-74 w-80 px-10 group flex items-center justify-center space-x-2"
                >
                  <Image
                    src="/events/google_logo.png"
                    alt="Google Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-neon-green text-center md:text-base text-sm">
                    Event Registration Closed
                  </span>
                  <span className="group-hover:text-neon-green">
                    <ArrowRightIcon />
                  </span>
                </HoverBorderGradient>
              </Link> */}

              {/* Hackathon Registration Button
              <a
                href="https://unstop.com/o/PI6XorN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-full md:w-auto"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-background md:w-74 w-80 px-10 group flex items-center justify-center space-x-2"
                >
                  <Image
                    src="/events/unstop.png"
                    alt="Unstop Logo"
                    width={25}
                    height={25}
                  />
                  <span className="text-neon-green text-center md:text-base text-sm">
                    Hacknight Registration
                  </span>
                  <span className="group-hover:text-neon-green">
                    <ArrowRightIcon />
                  </span>
                </HoverBorderGradient>
              </a> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Animated Arrow Icon */}
      <motion.div
        className="absolute z-40 bottom-0 py-10"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-8 text-neon-green"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
          />
        </svg>
      </motion.div>
    </div>
  );
}