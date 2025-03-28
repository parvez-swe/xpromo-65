import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";
import { SquareCheck } from "lucide-react";
export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20  max-w-7xl mx-auto">
        <BreadCrumbCustom
          currentPage={"ABOUT US"}
          previousPages={[{ name: "HOME", url: "/" }]}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center text-newprimary mt-5 mb-12">
          ABOUT US
        </h1>

        <div className="space-y-8 ">
          <p className="text-newprimary font-thin ">
            At Xpromo, we believe promotional products should do more than just
            advertise—they should inspire, create meaningful connections, and
            leave a positive impact. As an Australian-based company, we are
            transforming the industry by integrating sustainability, ethical
            sourcing, and innovation into every aspect of what we do.
          </p>

          <div className="">
            <h2 className=" font-bold text-newprimary">Our Mission</h2>
            <p className="text-newprimary">
              We&apos;re on a mission to change the promotional product industry
              for the better. Traditionally, branded merchandise has contributed
              to unnecessary waste and short-term usage, but we&apos;re here to
              change that narrative. Our goal is to provide sustainable
              alternatives that help businesses promote their brand while making
              a conscious choice for the planet. Every product we offer is
              carefully selected to align with environmentally responsible
              practices, ensuring that our clients can make a lasting
              impression—without leaving a lasting footprint.
            </p>
          </div>

          <div className="">
            <h2 className=" font-bold text-newprimary">Our Values</h2>

            <div className="">
              <p className="text-newprimary ">
                <span className="font-bold text-newprimary italic">Own It</span>
                <span className="font-thin">
                  - We take full responsibility for our work, our promises, and
                  our impact. Whether it&apos;s delivering high-quality products
                  or ensuring ethical production, we hold ourselves accountable
                  to the highest standards.
                </span>
              </p>
            </div>

            <div className="">
              <span className="font-semibold italic">Customer First</span>
              <span className="text-newprimary">
                - Our customers are at the core of everything we do. We strive
                to provide exceptional service, tailored solutions, and products
                that align with their brand identity and sustainability goals.
              </span>
            </div>

            <div className="">
              <span className="font-semibold italic">
                Sustainability Always
              </span>
              <span className="text-newprimary">
                - The future matters. We are dedicated to reshaping the industry
                by prioritizing eco-conscious materials, reducing waste, and
                supporting ethical production. Sustainability isn&apos;t just a
                feature—it&apos;s our foundation.
              </span>
            </div>
          </div>

          <div className="">
            <div className="mb-4">
              <h2 className=" font-bold text-newprimary">
                What Sets Us Apart?
              </h2>
              <p className="text-newprimary">
                At Xpromo, we&apos;re not just another promotional product
                company—we&apos;re a forward-thinking brand committed to making
                a difference. Here&apos;s what makes us unique:
              </p>
            </div>

            <div className=" text-newprimary ">
              <p className="text-newprimary ">
                <SquareCheck className="h-5 w-5 text-newprimary  flex-shrink-0 mr-2 inline-block" />
                <span className="font-semibold italic text-nowrap">
                  Sustainable & Ethical Approach
                </span>
                - We carefully source materials and work with responsible
                suppliers to ensure that our products meet the highest
                sustainability and ethical standards.
              </p>

              <p className="">
                <SquareCheck className="h-5 w-5 text-newprimary  inline-block mr-2 flex-shrink-0" />
                <span className="font-semibold italic">
                  Innovative & Impactful Solutions
                </span>
                - We think beyond traditional promo items, offering creative,
                high-quality, and eco- friendly alternatives that truly stand
                out.
              </p>

              <p className="">
                <SquareCheck className="h-5 w-5 text-newprimary mr-2 inline-block flex-shrink-0" />
                <span className="font-semibold italic">
                  Commitment to Real Change
                </span>
                - We don&apos;t just follow industry trends—we challenge the
                status quo, setting new standards for sustainability in
                promotional products.
              </p>

              <p className="">
                <SquareCheck className="h-5 w-5 text-newprimary mr-2 inline-block 2 flex-shrink-0" />
                <span className="font-semibold italic">Long-Lasting Value</span>
                - Our products are designed with purpose, ensuring they are
                useful, durable, and cherished—not discarded.
              </p>
            </div>
          </div>

          <div className="mt-2">
            <h2 className=" font-bold text-newprimary">
              Join Us in Creating a Better Future
            </h2>
            <p className="text-newprimary">
              At Xpromo, we believe that businesses shouldn&apos;t have to
              choose between effective branding and environmental responsibility
              <br /> —they can have both. We&apos;re here to help brands make a
              statement that matters, with promotional products that reflect
              their values and vision for a better world.
            </p>
            <p className="text-newprimary mt-5">
              Let&apos;s work together to make sustainable branding the new
              standard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
