import Image from "next/image";
import Link from "next/link";

import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20  max-w-7xl mx-auto">
        <BreadCrumbCustom
          currentPage={"BLOG"}
          previousPages={[{ name: "HOME", url: "/" }]}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-newprimary mt-5 mb-12">
          BLOG
        </h1>

        <div className="space-y-8">
          {/* Blog Post 1 */}
          <div className="flex flex-col md:flex-row gap-6 pb-8 border-b-4 border-newprimary lg:max-h-[25vh]">
            <div className="md:w-2/3 ">
              <h2 className="text-xl font-semibold text-newprimary">
                The Rise of Sustainable Promotional Products: Why Your Brand
                Should Go Green
              </h2>
              <p className="text-sm text-graytext font-bold ">
                10th March 2025
              </p>
              <div className="mt-4  text-sm">
                <p className="text-newprimary">
                  Sustainability is no longer a trend—it&apos;s a necessity.
                  Consumers and businesses alike are becoming more
                  environmentally conscious, and companies are expected to
                  reflect these values in their branding strategies. One of the
                  best ways to do this is by switching to sustainable
                  promotional products.
                </p>
                <p className="text-newprimary">
                  Why Sustainability Matters in Branding? A growing number of
                  businesses are making sustainability a core value, and
                  customers are taking notice.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm font-bold text-newprimary hover:text-gray-700"
                >
                  READ MORE...
                </Link>
              </div>
            </div>
            <div className="md:w-1/3  flex items-center justify-center">
              <Image
                src="/blog/image1.jpg"
                alt="Sustainable promotional products"
                width={300}
                height={200}
                className=" h-auto object-cover"
              />
            </div>
          </div>

          {/* Blog Post 2 */}
          {/* Blog Post 2 */}
          <div className="flex flex-col md:flex-row gap-6 pb-8 border-b-4 border-newprimary max-h-[25vh]">
            <div className="md:w-2/3 ">
              <h2 className="text-xl font-semibold text-newprimary">
                How to Choose the Right Promotional Product for Your Business
              </h2>
              <p className="text-sm text-graytext font-bold">9th March 2025</p>
              <div className="mt-4  text-sm">
                <p className="text-newprimary">
                  Promotional products are a powerful marketing tool, but
                  choosing the right item can make all the difference in brand
                  awareness and customer engagement. With thousands of options
                  available, how do you decide which product is best for your
                  business?
                </p>
                <p className="text-newprimary mt-2">
                  1. Know Your Audience
                  <br />
                  The most effective promotional products are those that
                  resonate with your target market.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm font-bold   text-newprimary hover:text-gray-700"
                >
                  READ MORE...
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <Image
                src="/blog/image2.jpg"
                alt="Hand holding promotional product"
                width={300}
                height={100}
                className="object-cover w-auto h-full" // Changed to object-cover
              />
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="flex flex-col md:flex-row gap-6 pb-8 max-h-[25vh]">
            <div className="md:w-2/3 ">
              <h2 className="text-xl font-semibold text-newprimary">
                The Top Promotional Product Trends for 2025
              </h2>
              <p className="text-sm text-graytext font-bold">11th March 2025</p>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-newprimary">
                  The promotional product industry is constantly evolving, and
                  staying ahead of the trends can give your brand a competitive
                  edge. In 2025, sustainability, innovation, and personalization
                  are leading the way in promotional merchandise.
                </p>
                <p className="text-newprimary">
                  1. Eco-Friendly & Sustainable Products
                  <br />
                  Consumers are demanding greener alternatives, and brands are
                  responding by switching to:
                </p>
                <p className="text-newprimary">
                  Recycled & Biodegradable Materials: Pens, notebooks, and bags
                  made from reclaimed and compostable materials.
                  <br />
                  Reusable Everyday Items: Stainless steel straws, collapsible
                  cups, and eco- conscious packaging.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm font-bold  hover:text-gray-700 text-newprimary "
                >
                  READ MORE...
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <Image
                src="/blog/image3.jpg"
                alt="Promotional product trends"
                width={300}
                height={200}
                className=" h-full w-auto  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
