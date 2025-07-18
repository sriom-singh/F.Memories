"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  navItemsGroup,
} from "@/components/ui/resizable-navbar";
import { signIn, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import DropdownButton from "./dropdownButton";
import MobileDropdownButton from "./MobileDropdown";
import ProfileCard from "./ProfileCard";

export function MainNavbar() {
  const { data: session, status } = useSession();
  console.log(session);
  
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },

  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <div className="relative w-full z-[1000]">
      <Navbar className="py-2 ">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems className="text-sm font-normal" items={navItems} />

          <div className="flex font-openSans items-center  gap-4 pr-2">
            {status !== "authenticated" && (
              <NavbarButton
                variant="secondary"
                className="font-normal  rounded-full border-[0.01px] text-white"
                onClick={() => signIn()}
              >
                Login
              </NavbarButton>
            )}
            {status == "authenticated" && (
              <NavbarButton
                variant="secondary"
                className="font-normal flex  rounded-full p-0 text-white"
              >
                <div
                  className="relative"
                  ref={wrapperRef}
                  onMouseEnter={() => setShowMenu(true)}
                  onMouseLeave={() => setShowMenu(false)}
                >
                  <Image
                    alt="favicon"
                    height={30}
                    width={30}
                    src={"/favicon.ico"}
                    className="size-8"
                    onClick={() => setShowMenu((prev) => !prev)} // toggle on click
                  />

                  {showMenu && (
                    <div className="absolute top-1 -right-4 rounded-sm  pt-10 w-40  z-50">
                      <ul className="text-black bg-white p-4 w-full h-full text-start shadow-dm flex flex-col gap-2">
                        <li className="border-b py-2  z-50 cursor-pointer">
                          <span onClick={() => setIsProfileOpen(true)}>Profile</span>

                        </li>
                        <li
                          className="border-b py-2 cursor-pointer"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          Logout
                        </li>
                        <li className="py-2 cursor-pointer" onClick={() => { }}>
                          My Bookings
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {status === "authenticated" && (
                  <ProfileCard
                    user={session?.user}
                    open={isProfileOpen}
                    onOpenChange={setIsProfileOpen}
                  />
                )}

              </NavbarButton>
            )}
            <NavbarButton
              className="font-semibold"
              variant="gradient"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            className="bg-white/95 p-2 py-2 min-w-full"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative font-openSans text-neutral-600 px-4 py-2 active:bg-primary/70 min-w-full dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            {navItemsGroup.map((item, idx) => (
              <MobileDropdownButton title={item.title} key={`dropdown-${idx}`} link={item.link} places={item.places} />
            ))}


            <div className="flex w-full flex-col gap-4">
              {status !== "authenticated" && (
                <NavbarButton
                  variant="secondary"
                  className="font-normal  rounded-full border-[0.01px] text-black"
                  onClick={() => signIn()}
                >
                  Login
                </NavbarButton>
              )}
              {status == "authenticated" && (
                <NavbarButton
                  variant="secondary"
                  className="font-normal flex  rounded-full p-0 "
                >
                  <div
                    className="relative flex items-center  w-full gap-2"
                    ref={wrapperRef}
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                  >
                    <Image
                      alt="favicon"
                      height={30}
                      width={30}
                      src={"/favicon.ico"}
                      className="size-8"
                      onClick={() => setShowMenu((prev) => !prev)} // toggle on click
                    />
                    <span className="bg-red text-black text-base">
                      {session.user?.email}
                    </span>
                    {showMenu && (
                      <div className="absolute top-2  rounded-sm  pt-10 w-40  z-50">
                        <ul className="text-black bg-white p-4 w-full h-full text-start shadow-dm flex flex-col gap-2">
                          <li className="border-b py-2 cursor-pointer">
                          <span onClick={() => setIsProfileOpen(true)}>Profile</span>
                          </li>
                          <li
                            className="border-b py-2 cursor-pointer"
                            onClick={() => {
                              signOut();
                              toast.success("Logout success!");
                            }}
                          >
                            Logout
                          </li>

                          <li className="py-2 cursor-pointer">My Bookings</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </NavbarButton>
              )}

              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/contact-us");
                }}
                variant="gradient"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
