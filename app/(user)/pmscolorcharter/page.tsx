import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-14">
      <div className=" py-5">
        <BreadCrumbCustom
          currentPage={"PMS COLOUR CHART"}
          previousPages={[{ name: "HOME", url: "/" }]}
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        PMS COLOUR CHART
      </h1>

      <div className=" flex items-start  justify-start">
        <div className="relative max-w-md w-96  mb-10 ">
          <input
            type="text"
            placeholder="SEARCH YOUR COLOUR"
            className="w-full italic px-4 py-2 border-2 border-gray-800 rounded-full focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Pantone® Matching System (PMS) Colour Chart
        </h2>
        <h3 className="text-xl md:text-2xl font-bold">
          PMS Colours used for printing
        </h3>
      </div>

      <hr className="border-gray-300 my-6" />

      <p className="mb-4">
        Use this guide to assist your colour selection and specification
        process.
      </p>

      <p className="mb-8">
        This chart is a reference guide only. Pantone® colours on computer
        screens may vary based on the graphics card and monitor used in your
        system. For true accuracy use the Pantone <sup className="mb-1">®</sup>{" "}
        Colour Publication.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Row 1 */}
        <ColorSwatch color="#FFDD33" name="PMS Yellow C" />
        <ColorSwatch color="#FFDA00" name="PMS Yellow 012 C" />
        <ColorSwatch color="#F26522" name="PMS Orange 021 C" />
        <ColorSwatch color="#F05A28" name="PMS Warm Red C" />
        <ColorSwatch color="#ED1C24" name="PMS Red 032 C" />

        {/* Row 2 */}
        <ColorSwatch color="#CE0058" name="PMS Rubine Red C" />
        <ColorSwatch color="#EC008C" name="PMS Rhodamine Red C" />
        <ColorSwatch color="#9E1F63" name="PMS Purple C" />
        <ColorSwatch color="#662D91" name="PMS Violet C" />
        <ColorSwatch color="#0033A0" name="PMS Blue 072 C" />

        {/* Row 3 */}
        <ColorSwatch color="#002D72" name="PMS Reflex Blue C" />
        <ColorSwatch color="#0085CA" name="PMS Process Blue C" />
        <ColorSwatch color="#00A651" name="PMS Green C" />
        <ColorSwatch color="#1A1A1A" name="PMS Black C" />
        <ColorSwatch color="#FFF200" name="PMS Yellow 0131 C" />
      </div>
    </div>
  );
}

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-16 md:h-20 lg:h-24 mb-2 border border-gray-200"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs md:text-sm text-center">{name}</span>
    </div>
  );
}
