import {
  Facebook,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 w-screen h-full bg-primary/10 blur"></div>
    <div className="max-w-7xl  px-4 md:px-0 bg py-12 z-50 mx-auto">
      <div className="sm:grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className=" md:col-span-2 text-white p-4 ">
          <div className="flex flex-col gap-2">
            <h1 className="font-openSans text-2xl pb-2 text-primary">
              F.Memories
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
            <div className=" flex gap-4 items-center p-4">
              <a className="text-sky-500 border-2 p-0.5 border-sky-500 rounded-sm">
                <Facebook />
              </a>
              <a className="text-primary border-2 p-0.5 border-primary rounded-sm">
                <Instagram />
              </a>
              <a className="text-blue-500 border-2 p-0.5 border-blue-500 rounded-sm">
                <Linkedin />
              </a>
              <a className="text-blue-700 border-2 p-0.5 border-blue-700 rounded-sm">
                <Twitter />
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
            <a className="text-sm">About Us</a>
            <a className="text-sm">Company Profile</a>
            <a className="text-sm">Team Members</a>
            <a className="text-sm">Support</a>
            <a className="text-sm">Carrier</a>
          </div>
        </div>
        <div className="text-black p-4">
          <div className="flex flex-col justify-center  gap-2">
            <h1 className="font-semibold pb-1">Legal</h1>
            <a className="text-sm">Privacy Policy</a>
            <a className="text-sm">Terms and Conditions</a>
            <a className="text-sm">Cancellation Refund Policy</a>
          </div>
        </div>
      </div>
      <hr className="py-4"/>
      <p className="text-black text-sm text-center">© 2025. All rights are reserved</p>
    </div>
    </div>
  );
};

export default Footer;
