"use client";
import {
  Facebook,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className="relative font-openSans">
      {/* <div className="max-w-7xl  px-4 md:px-0 bg py-12  z-50 mx-auto">
        <div className="sm:grid grid-cols-2 md:grid-cols-6 text-black gap-4">
          <div className=" md:col-span-2 text-black p-4 ">
            <div className="flex flex-col  gap-2">
              <h1 className="font-openSans cursor-pointer text-2xl pb-4 text-primary font-semibold">
                <Link href={"/"} className="flex items-center gap-1.5">
                  <Image
                    alt="favicon"
                    height={36}
                    src={"/favicon.ico"}
                    width={36}
                  />
                  Framing Memories
                </Link>
              </h1>
              <p className="flex gap-2 items-center text-black text-sm">
                <Landmark size={16} /> 13th Street. New York, NY 10011
              </p>
              <p className="flex gap-2 items-center text-black text-sm">
                <Phone size={16} />
                +91-9910583811
              </p>
              <p className="flex gap-2 items-center text-black text-sm">
                <Mail size={16} /> framing.memoriess@gmail.com
              </p>
              <div className=" flex gap-4 items-center py-4">
                <a className="text-sky-500  p-0.5  rounded-sm">
                  <Image
                    alt="facebook"
                    height={30}
                    width={30}
                    src={"/icons/facebook.png"}
                  />
                </a>
                <a className="text-primary p-0.5  rounded-sm">
                  <Image
                    alt="twitter"
                    height={30}
                    width={30}
                    src={"/icons/twitter.png"}
                  />
                </a>
                <a className="text-blue-500  p-0.5  rounded-sm">
                  <Image
                    alt="Linkedin"
                    height={30}
                    width={30}
                    src={"/icons/linkedin.png"}
                  />
                </a>
                <a className="text-blue-700 p-0.5  rounded-sm">
                  <Image
                    alt="Instagram"
                    height={30}
                    width={30}
                    src={"/icons/instagram.png"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="text-black p-4 ">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold pb-1">Top Destination</h1>
              <a className="text-sm">Kerala</a>
              <a className="text-sm">Bhopal</a>
              <a className="text-sm">Kashmir</a>
              <a className="text-sm">Nepal</a>
            </div>
          </div>
          <div className="text-black p-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold pb-1">Useful Links</h1>
              <Link href="/about-us" className="text-sm hover:underline ">
                About Us
              </Link>
              <a className="text-sm">Company Profile</a>
              <a className="text-sm">Team Members</a>
              <a className="text-sm">Support</a>
              <a className="text-sm">Carrier</a>
            </div>
          </div>
          <div className="text-black p-4">
            <div className="flex flex-col  justify-center  gap-2">
              <h1 className="font-semibold pb-1">Legal</h1>
              <Link href="/privacy-policy" className="text-sm hover:underline ">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm hover:underline "
              >
                Terms and Conditions
              </Link>
              <Link
                href="/cancellation-and-refund"
                className="text-sm hover:underline "
              >
                Cancellation & Refund Policy
              </Link>
            </div>
          </div>
        </div>
        <hr className="py-4" />
        <p className="text-black text-sm text-center ">
          © 2025. All rights are reserved.
        </p>
      </div> */}
      <section className="py-10 bg-gray-50  bg-primary/10 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-10">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <h1 className="font-openSans cursor-pointer text-2xl  text-primary font-semibold">
                <Link href={"/"} className="flex items-center gap-1.5">
                  <Image
                    alt="favicon"
                    height={36}
                    src={"/favicon.ico"}
                    width={36}
                  />
                  Framing Memories
                </Link>
              </h1>
              <div className="text-base leading-relaxed pb-2 text-gray-600 mt-7">
                <p className="flex gap-2 items-center text-black text-">
                  <Landmark size={16} /> V-32/2, Arvind Nagar, Delhi-110053
                </p>
                <p className="flex gap-2 pt-2 items-center text-black ">
                  <Phone size={16} />
                  +91-9910583811
                </p>
                <p className="flex gap-2 py-2 items-center text-black ">
                  <Mail size={16} /> infoframingmemoriess@gmail.com
                </p>
              </div>

              <ul className="flex items-center space-x-3 mt-6">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Works
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/contact-us"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Customer Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-and-conditions"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cancellation-and-refund"
                    title=""
                    className="flex text-[16px] text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    Cancellation & Refund
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>

              <form action="#" method="POST" className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-300" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2025, All Rights Reserved by Framing Memories
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
