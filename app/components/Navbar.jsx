"use client";
import { usePathname } from "next/navigation";
import { Button, Flex, Text, Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CicsLogo from "../assets/cics_logo.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-20 fixed z-50 backdrop-blur-sm bg-black/50">
        <div className="container mx-auto px-4 h-full">
          <Container size="3">
            <div className="flex justify-between items-center h-full gap-6 ">
              <Text className="hover:text-green-500 hover:bg-blend-normal">
                College of Information and Computing Sciences
              </Text>
              <Image src={CicsLogo} alt="CICS Logo" width={70} height={70} />
              <ul className="hidden md:flex gap-x-10 text-white ">
                <li
                  className={`font-bold ${
                    pathname === "/" ? "text-yellow-500" : ""
                  }`}
                >
                  <Link href="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/events" ? "text-yellow-500" : ""
                  }`}
                >
                  <Link href="/events">
                    <p>Events</p>
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/services" ? "text-yellow-500" : ""
                  }`}
                >
                  <Link href="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/contacts" ? "text-yellow-500" : ""
                  }`}
                >
                  <Link href="/contacts">
                    <p>Contacts</p>
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
