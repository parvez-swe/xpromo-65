import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-newprimary text-white py-12 px-6 rounded-t-3xl">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            {/* <h2 className="text-4xl font-bold text-white mb-4">X PROMO</h2> */}
            <Image
              className=" my-5"
              src="/image/xpromo-white.png"
              height={400}
              width={400}
              alt="image"
            />
            <p className="text-[#686868] text-xs mb-4">
              COMMITTED TO FOSTERING DIVERSITY AND INCLUSION.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-1 text-xs text-[#686868] ">
              <li>
                <a href="/aboutus" className="ext-white">
                  ABOUT US
                </a>
              </li>
              <li>
                <Link href="/contact" className="ext-white">
                  CONTACT US
                </Link>
              </li>
              <li>
                <a href="/sustainabilitypolicy" className="ext-white">
                  SUSTAINABILITY
                </a>
              </li>
              <li>
                <Link href="/faq" className="ext-white">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/blog" className="ext-white">
                  BLOG
                </a>
              </li>
              <li>
                <Link href="/termsandcondition" className="ext-white">
                  TERMS & CONDITIONS
                </Link>
              </li>
              <li>
                <Link href="/pmscolorcharter" className="ext-white">
                  PMS COLOUR CHART
                </Link>
              </li>
              <li>
                <Link href="/decorationoption" className="ext-white">
                  DECORATION OPTIONS
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Stock Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LOCAL STOCK</h3>
            <ul className="text-[#686868] space-y-1 text-xs">
              <li>
                <a href="#" className="ext-white">
                  NEW ARRIVALS
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  SHOP BY CATEGORY
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  SHOP BY INDUSTRY
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  ECO-PRODUCTS
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  24-HOUR TURNAROUND
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  OUR BRANDS
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Direct Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FACTORY DIRECT</h3>
            <ul className="text-[#686868] space-y-1 text-xs">
              <li>
                <a href="#" className="ext-white">
                  AUTOMOTIVE
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  CONSTRUCTIONS
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  EDUCATION
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  HOSPITALITY
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  MEDICAL
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  REAL ESTATE
                </a>
              </li>
              <li>
                <a href="#" className="ext-white">
                  SPORTS & FITNESS
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-xs text-[#686868] mb-4">
              SUBSCRIBE TO OUR NEWSLETTER TO GET A LATEST UPDATES..
            </p>
            <div className="space-y-1">
              <Input
                type="email"
                // placeholder="Enter your email"
                className="bg-[#9C9C9C] border-none rounded-full"
              />
              {/* <Button className="w-full">Subscribe</Button> */}
            </div>
            <div className="text-[#686868] text-sm mt-4">
              ABN 39 671 474 141
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flexflex-colmd:flex-rowgap-6 grid grid-cols-1 md:grid-cols-5 items-end  w-full ">
            <div className=" flex flex-col justify-end  ">
              <p className="text-2xl mb-4 uppercase text-zinc-300">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">
                  <Image
                    src="/socialmedia/insta.png"
                    height={30}
                    width={30}
                    alt="facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="hover:text-white">
                  <Image
                    src="/socialmedia/facebook.png"
                    height={30}
                    width={30}
                    alt="facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="hover:text-white">
                  <Image
                    src="/socialmedia/linkedIn.png"
                    height={30}
                    width={30}
                    alt="facebook"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-row ">
              <div className=" border-r-2 border-[#686868]   pr-5 mr-5 h-10 flex ice justify-center">
                <a
                  href="mailto:info@xpromo.com.au"
                  className="flex items-center gap-2 ext-white"
                >
                  <Mail className="w-5 h-5" />
                  info@xpromo.com.au
                </a>
              </div>

              <a
                href="tel:1300123456"
                className="flex items-center gap-2 ext-white"
              >
                <Phone className="w-5 h-5" />
                1300 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
