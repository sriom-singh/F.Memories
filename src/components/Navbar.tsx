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
import { Dot, LogOut, Mail, Phone, User } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
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
    <div className="relative w-full  z-[1000]">
      <Navbar className=" ">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          <NavItems className="text-sm font-normal" items={navItems} />

          <div className="flex font-openSans items-center   gap-4 pr-2">
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
                      <ul className="text-black bg-white p-3 w-full h-full text-start shadow-dm flex flex-col gap-2">
                        <li className="border-b py-2 gap-1 flex items-center z-50 cursor-pointer">
                          <User size={14} className="text-primary" />
                          <span onClick={() => setIsProfileOpen(true)}>Profile</span>

                        </li>
                        <li
                          className="border-b py-2 gap-1 flex items-center cursor-pointer"
                          onClick={() => {
                            signOut();
                          }}
                        >
                          <LogOut className="text-red-500" size={12} />  Logout
                        </li>
                        {/* <li className="py-2 cursor-pointer" onClick={() => { }}>
                          My Bookings
                        </li> */}
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


      <div  ref={ref}
        // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
        className={cn(
          "fixed font-openSans inset-x-0 top-16 z-[10] h-11 w-full",

          !visible ? " bg-black/50 " : "bg-black/60 -translate-y-40 hidden animate duration-[300ms] backdrop-blur-[1px]"
        )} >
        <div className="flex text-white opacity-90 justify-between items-center px-8 gap-8 h-full">
          <div className=" w-full flex flex-col md:flex-row md:items-center md:py-0 py-2 md:gap-6">

            <p className="flex gap-2  items-center text-sm md:text-base">
              <Phone className="text-primary" size={16} />
              +91-9910583811
            </p>
            <p className="flex gap-2 items-center text-sm md:text-base">
              <Mail className="text-primary " size={16} /> infoframingmemoriess@gmail.com
            </p>
          </div>
          <ul className="hidden items-center xl:flex justify-end space-x-4 gap-4  w-full ">
            <li>
              <a
                href="https://x.com/fr_memories"
                title="Twitter"
                target="_blank"
                className="flex items-center justify-center text-white transition-all duration-200   hover:text-primary focus:text-primary"
              >
                <svg
                  className="w-4 h-4 mr-2 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>  Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578281794472"
                title="Facebook"
                target="_blank"
                className="flex items-center justify-center text-white transition-all duration-200   hover:text-primary focus:text-primary"
              >
                <svg
                  className="w-4 h-4 text-primary mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg> Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/info.framingmemoriess/"
                target="_blank"
                title="Instagram"
                className="flex items-center justify-center text-white transition-all duration-200   hover:text-primary focus:text-primary"
              >
                <svg
                  className="w-4 h-4 text-primary mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg> Instagram

              </a>
            </li>


            <li>
              <a
                href="https://wa.me/919910583811?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                title="Whatsapp"
                className="flex items-center justify-center text-white transition-all duration-200   hover:text-primary focus:text-primary"
              >
                <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>

                Whatsapp

              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/channel/UCiU627uVVscGBzxfnKVdQXA"
                target="_blank"
                title="Youtube"
                className="flex items-center justify-center text-white transition-all duration-200   hover:text-primary focus:text-primary"
              >
                <svg className="size-4 text-primary mr-2" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                Youtube

              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar */}
    </div>
  );
}
