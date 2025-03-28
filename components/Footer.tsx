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
            <p className="text-white text-xs mb-4">
              Commited to fostering diversity and inclusion
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-1 text-xs text-white ">
              <li>
                <a href="/aboutus" className="ext-white">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/contact" className="ext-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/sustainabilitypolicy" className="ext-white">
                  Sustainability
                </a>
              </li>
              <li>
                <Link href="/faq" className="ext-white">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/blog" className="ext-white">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/termsandcondition" className="ext-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/pmscolorcharter" className="ext-white">
                  PMS Colour Chart
                </Link>
              </li>
              <li>
                <Link href="/decorationoption" className="ext-white">
                  Decoration Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Local Stock Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LOCAL STOCK</h3>
            <ul className="text-white space-y-1 text-xs">
              <li>
                <a href="/categories/sydney" className="ext-white">
                  Sydney
                </a>
              </li>
              <li>
                <a href="/categories/melbourse" className="ext-white">
                  Melbourne
                </a>
              </li>
              <li>
                <a href="/categories/brisbane" className="ext-white">
                  Brisbane
                </a>
              </li>
              <li>
                <a href="/categories/adelaide" className="ext-white">
                  Adelaide
                </a>
              </li>
              <li>
                <a href="/categories/perth" className="ext-white">
                  Perth
                </a>
              </li>
            </ul>
          </div>

          {/* Factory Direct Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FACTORY DIRECT STOCK</h3>
            <ul className="text-white space-y-1 text-xs">
              <li>
                <a href="#" className="ext-white"></a>
              </li>
              <li>
                <Link href="/categories/apparel" className="ext-white">
                  Apparel
                </Link>
              </li>

              <li>
                <Link href="/categories/bags&backpacks" className="ext-white">
                  Bags & Bagpacks
                </Link>
              </li>
              <li>
                <Link href="/categories/headwear" className="ext-white">
                  Headwear
                </Link>
              </li>
              <li>
                <Link href="/categories/echo-products" className="ext-white">
                  Eco-Products
                </Link>
              </li>
              <li>
                <Link href="/categories/techproducts" className="ext-white">
                  Tech Products
                </Link>
              </li>
              <li>
                <Link href="/categories/custompackaging" className="ext-white">
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/tradeshowsproduct"
                  className="ext-white"
                >
                  Trade Shows Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-xs text-white mb-4">
              SUBSCRIBE TO OUR NEWSLETTER TO GET A LATEST UPDATES..
            </p>
            <div className="space-y-1">
              <Input
                type="email"
                // placeholder="Enter your email"
                className="bg-white text-newprimary border-none rounded-full"
              />
              {/* <Button className="w-full">Subscribe</Button> */}
            </div>
            <div className="text-white text-sm mt-4 italic font-bold">
              ABN 39 671 474 141
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flexflex-colmd:flex-rowgap-6 grid grid-cols-1 md:grid-cols-5 items-end  w-full ">
            <div className=" flex flex-col justify-end  ">
              <p className="text-base mb-4 uppercase text-zinc-300">
                Follow Us
              </p>
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
              <div className=" border-r-2 border-white   pr-8 mr-8 h-12 flex ice justify-center">
                <a
                  href="mailto:info@xpromo.com.au"
                  className="flex items-center font-bold gap-2 ext-white"
                >
                  <Image
                    className="h-7 mr-4 w-auto"
                    src={"/dark-mail.png"}
                    height={200}
                    width={200}
                    alt="mail"
                  />
                  info@xpromo.com.au
                </a>
              </div>

              <a
                href="tel:1300123456"
                className="flex items-center gap-2 ext-white italic"
              >
                {/* <Phone className="w-5 h-5" /> */}
                <Image
                  className="h-7 mr-4 w-auto"
                  src={"/dark-phone.png"}
                  height={200}
                  width={200}
                  alt="phone"
                />
                1300 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
