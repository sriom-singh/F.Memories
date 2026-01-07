import { Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative h-96  bg-blend-multiply bg-opacity-30  bg-black bg-right-bottom">
        <Image alt='terms & condtions' width={1000} height={1000} src="/legal.jpg" className="w-[100vw] object-cover opacity-60 h-96 " />
        <h2 className="md:text-6xl tracking-tight absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
          Terms and Conditions

        </h2>
      </div>
      <div className=" text-black mx-auto pt-4 ">
        <div className="max-w-3xl mx-auto py-4 pb-16 px-7">
          <h1 className='text-2xl font-bold py-1'>Terms and Conditions</h1>
          <p className=" pb-4 ">
            Welcome to Framing Memories. By accessing or using our website and services,
            you agree to be bound by the following
            Terms and Conditions. If you do not agree with any part of these terms,
            please do not use our website or services
          </p>
          <ol className="pl-2">
            <li className="text-xl pt-6 font-semibold">Our Role</li>

            <p>
              Framing Memories operates as a travel planning and tour facilitation service, offering travel packages, itineraries, and related booking assistance.
              We act as an intermediary between customers and third-party service providers such as hotels, transport operators, and local vendors.
            </p>
            <p>
              We do not own or operate airlines, hotels, vehicles, or other travel services unless explicitly stated.
            </p>

            <li className="text-xl pt-6 font-semibold">Services Offered</li>
            <p>Our services may include:</p>
              <ul className="pb-2 font-sans pl-6 list-disc">
              <li>
                Tour and holiday packages

              </li>
              <li>Hotel booking assistance</li>
              <li>Transportation coordination</li>
              <li>Customized itineraries</li>
              <li>Destination support through third-party vendors </li>
              <li>Specific inclusions and exclusions are clearly mentioned in each package.</li>
            </ul>

            <li className="text-xl pt-6 font-semibold">Pricing & Payments</li>
            <p>
              Prices listed are subject to change due to operational or external
              factors such as location, additional requests, or vendor updates.
              :
            </p>
            <ul className="py-2 font-sans pl-6 list-disc">
              <li>
                A booking is only confirmed once full payment is received.
              </li>
              <li>Deposits are non-refundable.</li>
              <li>
                In the event of pricing changes after your confirmation, we’ll
                notify you and provide alternative options where possible.
              </li>
            </ul>
            <li className="text-xl pt-6 font-semibold">
              Changes & Modifications
            </li>
            <p>
              If we need to make adjustments to your confirmed service (due to
              availability, logistics, or unforeseen circumstances), we will:
            </p>
            <ul className="py-2 font-sans pl-6 list-disc">
              <li>Inform you at the earliest</li>
              <li>Offer alternative arrangements where feasible</li>
              <li>
                Allow you the choice to accept the change or cancel the booking
                (subject to cancellation policy)
              </li>
            </ul>
            <li className="text-xl pt-6 font-semibold">User Eligibility</li>
            <p>
              By using our site or services, you confirm that you are at least
              18 years old or have legal authority under applicable law to enter
              into a binding agreement. If not, use of our services must be
              under the supervision of a legal guardian or authorized
              representative.
            </p>
            <ul className="py-2 font-sans list-disc pl-6">
              <li>Prevent fraudulent or illegal activity</li>
              <li>Provide joint services where applicable</li>
              <li>Comply with legal obligations</li>
            </ul>

            <li className="text-xl pt-6 font-semibold">
              Use of Website & Services
            </li>
            <p>
              These terms apply to your use of our website, tools, content, and
              services. Specific offerings may have additional terms, which will
              be clearly displayed on those pages.
            </p>
            <li className="text-xl pt-6 font-semibold">Updates to Terms</li>
            <p>
              We reserve the right to update these terms as needed. We’ll notify
              users of major changes, and continued use of the site after an
              update implies acceptance of the revised terms.
            </p>
            <li className="text-xl pt-6 font-semibold">Privacy & Data Use</li>
            <p>
              Any personal information shared on our platform is handled with
              care and in line with our Privacy Policy. By using our services,
              you consent to the collection and use of your data as described.
            </p>
            <li className="text-xl pt-6 font-semibold">
              Intellectual Property
            </li>
            <p>
              All content on this site—including images, videos, design
              elements, and text—is owned by Framing Memories or licensed
              appropriately. You may not copy, reuse, or reproduce our content
              without written permission.
            </p>
            <li className="text-xl pt-6 font-semibold">Usage Restrictions</li>
            <p>You agree not to:</p>
            <ul className="py-2 font-sans list-disc pl-6">
              <li>
                Interfere with or disrupt the functionality of the website
              </li>
              <li>Use the website for unlawful purposes</li>
              <li>
                Reverse-engineer or attempt to extract the platform’s source
                code
              </li>
              <li>Violate copyright or intellectual property laws</li>
            </ul>
            <li className="text-xl pt-6 font-semibold">External Links</li>
            <p>
              We may share links to other websites for your convenience.
              However, Framing Memories is not responsible for the content or
              privacy practices of those external sites.
            </p>
            <li className="text-xl pt-6 font-semibold">
              Termination of Access
            </li>
            <p>
              We reserve the right to restrict or terminate access to our
              website or services at any time, especially in the case of misuse
              or violation of these terms.
            </p>
            <li className="text-xl pt-6 font-semibold">Disclaimers</li>
            <p>
              All services are provided “as available.” We do not guarantee
              specific results or outcomes. While we aim for excellence, Framing
              Memories is not liable for delays, loss, or dissatisfaction
              resulting from third-party vendors or unavoidable circumstances.
            </p>
            <li className="text-xl pt-6 font-semibold">Legal Compliance</li>
            <p>
              By using our website, you agree to abide by all applicable laws
              and regulations. Misuse or illegal activity may result in legal
              action or service suspension.
            </p>
            <li className="text-xl pt-6 font-semibold">Governing Law</li>
            <p>
              These terms are governed by the laws of India. Any disputes will
              be subject to the jurisdiction of the courts in Bhopal, Madhya
              Pradesh.
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
                +919910583811
              </a>
            </div>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default page