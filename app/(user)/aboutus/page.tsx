import { Check } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20  max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-12">
          ABOUT US
        </h1>

        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-gray-700 font-thin ">
            At Xpromo, we believe promotional products should do more than just
            advertise—they should inspire, create meaningful connections, and
            leave a positive impact. As an Australian-based company, we are
            transforming the industry by integrating sustainability, ethical
            sourcing, and innovation into every aspect of what we do.
          </p>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0f172a]">Our Mission</h2>
            <p className="text-gray-700">
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

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#0f172a]">Our Values</h2>

            <div className="space-y-1">
              <p className="text-gray-700 ">
                <span className="font-bold text-[#0f172a]">Own It</span>
                <span className="font-thin">
                  - We take full responsibility for our work, our promises, and
                  our impact. Whether it&apos;s delivering high-quality products
                  or ensuring ethical production, we hold ourselves accountable
                  to the highest standards.
                </span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-semibold">Customer First</span>
              <span className="text-gray-700">
                - Our customers are at the core of everything we do. We strive
                to provide exceptional service, tailored solutions, and products
                that align with their brand identity and sustainability goals.
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-semibold">Sustainability Always</span>
              <span className="text-gray-700">
                - The future matters. We are dedicated to reshaping the industry
                by prioritizing eco-conscious materials, reducing waste, and
                supporting ethical production. Sustainability isn&apos;t just a
                feature—it&apos;s our foundation.
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#0f172a]">
              What Sets Us Apart?
            </h2>
            <p className="text-gray-700">
              At Xpromo, we&apos;re not just another promotional product
              company—we&apos;re a forward-thinking brand committed to making a
              difference. Here&apos;s what makes us unique:
            </p>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Check className="h-5 w-5 text-[#0f172a] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">
                    Sustainable & Ethical Approach
                  </p>
                  <p className="text-gray-700">
                    - We carefully source materials and work with responsible
                    suppliers to ensure that our products meet the highest
                    sustainability and ethical standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Check className="h-5 w-5 text-[#0f172a] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">
                    Innovative & Impactful Solutions
                  </p>
                  <p className="text-gray-700">
                    - We think beyond traditional promo items, offering
                    creative, high-quality, and eco- friendly alternatives that
                    truly stand out.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Check className="h-5 w-5 text-[#0f172a] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Commitment to Real Change</p>
                  <p className="text-gray-700">
                    - We don&apos;t just follow industry trends—we challenge the
                    status quo, setting new standards for sustainability in
                    promotional products.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Check className="h-5 w-5 text-[#0f172a] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Long-Lasting Value</p>
                  <p className="text-gray-700">
                    - Our products are designed with purpose, ensuring they are
                    useful, durable, and cherished—not discarded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0f172a]">
              Join Us in Creating a Better Future
            </h2>
            <p className="text-gray-700">
              At Xpromo, we believe that businesses shouldn&apos;t have to
              choose between effective branding and environmental responsibility
              —they can have both. We&apos;re here to help brands make a
              statement that matters, with promotional products that reflect
              their values and vision for a better world.
            </p>
            <p className="text-gray-700 mt-4">
              Let&apos;s work together to make sustainable branding the new
              standard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
