import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative h-96  bg-blend-multiply bg-opacity-30  bg-black bg-right-bottom">
        <Image
        width={1000}
        height={1000}
        alt="Privacy & Policy"
          src="/legal.jpg"
          className="w-[100vw] object-cover opacity-60 h-96 "
        />
        <h2 className="md:text-6xl tracking-tight absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
          Privacy and Policy
        </h2>
      </div>
      <div className="text-black mx-auto pt-4">
        <div className="max-w-3xl mx-auto py-4 pb-16 px-7">
          <h1 className="text-xl font-bold py-1"> Privacy and Policy</h1>

          <p className=" pb-4">
            At Framing Memories, your privacy is important to us. This policy
            outlines how we collect, use, and protect your personal information
            when you visit our website or use our services.
          </p>
          <ol className="pl-2">
            <li className="text-xl pt-6 font-semibold">
              Information We Collect
            </li>

            <p>
              At Framing Memories, your privacy is important to us. This policy
              outlines how we collect, use, and protect your personal
              information when you visit our website or use our services.
            </p>
            <ul className="py-2 font-sans list-disc pl-6">
              <li>Contact us</li>
              <li>Create an account</li>
              <li>Place an order or request a service</li>
            </ul>
            <p>
              Some areas of our site are accessible without registration, but
              certain features may require basic personal information.
            </p>
            <li className="text-xl pt-6 font-semibold">
              How We Use Your Information
            </li>
            <p>Your data helps us:</p>
            <ul className="py-2 list-disc font-sans pl-6">
              <li>Process your requests or bookings</li>
              <li>
                Send updates, offers, or important information (you can opt out
                anytime)
              </li>
              <li>Improve the safety and functionality of our services</li>
              <li>Detect suspicious or fraudulent activity</li>
              <li>Analyze trends and enhance user experience</li>
            </ul>
            <li className="text-xl pt-6 font-semibold">Cookies</li>
            <p>
              To improve your browsing experience, we use cookies—small text
              files stored on your device. They help us remember your
              preferences but do not collect personal information. You can
              adjust your browser settings to control cookie usage.
            </p>
            <li className="text-xl pt-6 font-semibold">Data Sharing</li>
            <p>
              We do not sell your personal information. We may share limited
              data with trusted affiliates or partners only when necessary to:
            </p>
            <ul className="py-2 font-sans list-disc pl-6">
              <li>Prevent fraudulent or illegal activity</li>
              <li>Provide joint services where applicable</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              In the event of a business merger or acquisition, your information
              will remain protected.
            </p>
            <li className="text-xl pt-6 font-semibold">External Links</li>
            <p>
              Our site may include links to other websites. We are not
              responsible for their content or privacy practices. Please review
              their privacy policies before sharing your information.
            </p>
            <li className="text-xl pt-6 font-semibold">Security Measures</li>
            <p>
              We take your data security seriously. Our site uses modern
              security protocols to prevent unauthorized access, data loss, or
              misuse.
            </p>
            <li className="text-xl pt-6 font-semibold">Your Preferences</li>
            <p>
              You have full control over your communication preferences. If you
              no longer wish to receive promotional messages, you can opt out at
              any time by contacting us.
            </p>
            <li className="text-xl pt-6 font-semibold">Policy Updates</li>
            <p>
              This Privacy Policy may be updated periodically to reflect changes
              in technology, laws, or our services. Please revisit this page to
              stay informed.
            </p>
            <li className="text-xl pt-6 font-semibold">Contact Us</li>
            <p>
              If you have any questions or concerns about this policy, feel free
              to get in touch:
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Mail className="inline size-4" /> Email:{" "}
              <a
                className="hover:text-blue-400"
                href="mailto:framing.memoriess@gmail.com "
              >
                framing.memoriess@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="inline size-4" /> WhatsApp:{" "}
              <a
                className="hover:text-blue-400"
                href="https://wa.me/ 91991058381"
              >
                +91991058381
              </a>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
