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

const Footer = () => {
  return (
    <footer className="relative bg-primary/20 font-openSans">
      <div className="max-w-7xl  px-4 md:px-0 bg py-12  z-50 mx-auto">
        <div className="sm:grid grid-cols-2 md:grid-cols-6 text-black gap-4">
          <div className=" md:col-span-2 text-black p-4 ">
            <div className="flex flex-col  gap-2">
              <h1 className="font-openSans cursor-pointer text-2xl pb-4 text-primary font-semibold">
                <Link href={'/'} className="flex items-center gap-1.5">
                <Image alt="favicon" height={36} src={'/favicon.ico'} width={36}/>
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
                  <Image alt="facebook" height={30} width={30} src={"/icons/facebook.png"} />
                </a>
                <a className="text-primary p-0.5  rounded-sm">
                  <Image alt="twitter" height={30} width={30} src={"/icons/twitter.png"} />
                </a>
                <a className="text-blue-500  p-0.5  rounded-sm">
                  <Image alt="Linkedin" height={30}  width={30} src={"/icons/linkedin.png"} />
                </a>
                <a className="text-blue-700 p-0.5  rounded-sm">
                  <Image alt="Instagram" height={30} width={30} src={"/icons/instagram.png"} />
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
      </div>
    </footer>
  );
};

export default Footer;
