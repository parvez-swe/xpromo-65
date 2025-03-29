"use client";
import { useState } from "react";
import { BreadCrumbCustom } from "@/components/BreadCrumpCustom";

const colors = [
  // Existing colors
  { name: "PMS Yellow C", color: "#FFDD33" },
  { name: "PMS Yellow 012 C", color: "#FFDA00" },
  { name: "PMS Orange 021 C", color: "#F26522" },
  { name: "PMS Warm Red C", color: "#F05A28" },
  { name: "PMS Red 032 C", color: "#ED1C24" },
  { name: "PMS Rubine Red C", color: "#CE0058" },
  { name: "PMS Rhodamine Red C", color: "#EC008C" },
  { name: "PMS Purple C", color: "#9E1F63" },
  { name: "PMS Violet C", color: "#662D91" },
  { name: "PMS Blue 072 C", color: "#0033A0" },
  { name: "PMS Reflex Blue C", color: "#002D72" },
  { name: "PMS Process Blue C", color: "#0085CA" },
  { name: "PMS Green C", color: "#00A651" },
  { name: "PMS Black C", color: "#1A1A1A" },
  { name: "PMS Yellow 0131 C", color: "#FFF200" },

  // New colors
  { name: "PMS Red 0331C", color: "#E60012" },
  { name: "PMS Black 0961C", color: "#010D1A" },
  { name: "PMS 805 C", color: "#FF69A6" },
  { name: "PMS 801 C", color: "#00B7C4" },
  { name: "PMS 806 C", color: "#FF3E93" },
  { name: "PMS Violet 0631 C", color: "#9A2282" },
  { name: "PMS 802 C", color: "#80FF44" },
  { name: "PMS 807 C", color: "#D50072" },
  { name: "PMS Blue 0821C", color: "#006DD8" },
  { name: "PMS 803 C", color: "#FFF200" },
  { name: "PMS 871C", color: "#C8A36D" },
  { name: "PMS 872C", color: "#D08F4A" },
  { name: "PMS 873C", color: "#B68E54" },
  { name: "PMS 874 C", color: "#A48A63" },
  { name: "PMS 875C", color: "#9C7C4E" },
  { name: "PMS 876C", color: "#8F6C3F" },
  { name: "PMS B77C", color: "#F0A96A" },
  { name: "PMS Medium Yellow C", color: "#F7D200" },
  { name: "PMS Bright Orange C", color: "#FF6F20" },
  { name: "PMS Bright Red C", color: "#FF4648" },
  { name: "PMS Strong Red C", color: "#FF2A4F" },
  { name: "PMS Pink C", color: "#F53D7E" },
  { name: "PMS Medium Purple C", color: "#9B3F99" },
  { name: "PMS Dark Blue C", color: "#003B6F" },
  { name: "PMS Medium Blue C", color: "#0067B1" },
  { name: "PMS Bright Green C", color: "#00FF4F" },
  { name: "PMS Neutral Black C", color: "#2B2A29" },
  { name: "PMS 100 C", color: "#F9E200" },
  { name: "PMS 101C", color: "#F7E700" },
  { name: "PMS 102C", color: "#F4E800" },
  { name: "PMS 103C", color: "#F0E600" },
  { name: "PMS 104 C", color: "#E8D400" },
  { name: "PMS 105C", color: "#E1C800" },
  { name: "PMS 7401C", color: "#F1C37B" },
  { name: "PMS 7402C", color: "#F1CFA9" },
  { name: "PMS 7403C", color: "#F4D29B" },
  { name: "PMS 7404C", color: "#F7D447" },
  { name: "PMS 7405C", color: "#F9D86E" },
  { name: "PMS 7406C", color: "#F8C97F" },
  { name: "PMS 7407C", color: "#F2A57A" },
  { name: "PMS 106 C", color: "#F5E300" },
  { name: "PMS 107 C", color: "#F5D600" },
  { name: "PMS 108C", color: "#F5C300" },
  { name: "PMS 109C", color: "#F3B500" },
  { name: "PMS 110 C", color: "#F0A100" },
  { name: "PMS 111C", color: "#EB9400" },
  { name: "PMS 112 C", color: "#E88300" },
  { name: "PMS 113C", color: "#E77200" },
  { name: "PMS 114 C", color: "#E66200" },
  { name: "PMS 115C", color: "#E55200" },
  { name: "PMS 116 C", color: "#E44200" },
  { name: "PMS 117 C", color: "#E33200" },
  { name: "PMS 118C", color: "#E22200" },
  { name: "PMS 119C", color: "#E11200" },
  { name: "PMS 127 C", color: "#F7E800" },
  { name: "PMS 128 C", color: "#F7D800" },
  { name: "PMS 129 C", color: "#F7C500" },
  { name: "PMS 130 C", color: "#F7B100" },
  { name: "PMS 131C", color: "#F79D00" },
  { name: "PMS 132 C", color: "#F78A00" },
  { name: "PMS 133C", color: "#F77800" },
  { name: "PMS 134 C", color: "#F76500" },
  { name: "PMS 135 C", color: "#F75300" },
  { name: "PMS 136 C", color: "#F74100" },
  { name: "PMS 137 C", color: "#F72F00" },
  { name: "PMS 138 C", color: "#F71C00" },
  { name: "PMS 1395 C", color: "#F70900" },
  { name: "PMS 1405 C", color: "#F6F300" },
  { name: "PMS 141C", color: "#F6C900" },
  { name: "PMS 144 C", color: "#F4E500" },
  { name: "PMS 146C", color: "#F2C300" },
  { name: "PMS 147C", color: "#F0A100" },
  { name: "PMS 7408C", color: "#F2A700" },
  { name: "PMS 7409C", color: "#F1B500" },
  { name: "PMS 7410C", color: "#F0C300" },
  { name: "PMS 7411C", color: "#F0D300" },
  { name: "PMS 7412C", color: "#F0E400" },
  { name: "PMS 7413C", color: "#F0F500" },
  { name: "PMS 744C", color: "#F6FF00" },
  { name: "PMS 7562C", color: "#E4C08D" },
  { name: "PMS 7563C", color: "#D39F6A" },
  { name: "PMS 7564C", color: "#C28D47" },
  { name: "PMS 7565C", color: "#B57A24" },
  { name: "PMS 7566C", color: "#A66600" },
  { name: "PMS 7567C", color: "#9C5500" },
  { name: "PMS 7568C", color: "#9B4C00" },
  { name: "PMS 7569C", color: "#9A4300" },
  { name: "PMS 7570C", color: "#983C00" },
  { name: "PMS 7571C", color: "#962D00" },
  { name: "PMS 7572C", color: "#951D00" },
  { name: "PMS 7573C", color: "#940C00" },
  { name: "PMS 7574C", color: "#930000" },
  { name: "PMS 7575C", color: "#930000" },
  { name: "PMS 712 C", color: "#F7C8A3" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredColors = colors.filter((color) =>
    color.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-14 min-h-[100vh]">
      <div className=" py-5">
        <BreadCrumbCustom
          currentPage={"PMS COLOUR CHART"}
          previousPages={[{ name: "HOME", url: "/" }]}
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mr-20 mb-8">
        PMS COLOUR CHART
      </h1>

      <div className="relative max-w-md w-96 mb-10">
        <input
          type="text"
          placeholder="SEARCH YOUR COLOUR"
          className="w-full italic px-6 py-2 border-4 border-newprimary rounded-full focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-1 px-16">
          <h1 className="text-2xl md:text-4xl font-bold text-newprimary">
            Pantone® Matching System (PMS) Colour Chart
          </h1>
          <h2 className="text-xl md:text-3xl  text-newprimary">
            PMS Colours used for printing
          </h2>
        </div>
        <div className="w-[60%] border-t-2 border-newprimary my-6"></div>

        <p className="text-base text-newprimary px-16">
          Use this guide to assist your colour selection and specification
          process.
        </p>

        <p className="text-base text-newprimary max-w-3xls mb-5 px-16">
          This chart is a reference guide only. Pantone® colours on computer
          screens may vary based on the graphics card and monitor used in your
          system. For true accuracy use the Pantone® Colour Publication.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-5 px-16">
        {filteredColors.map((color) => (
          <ColorSwatch key={color.name} color={color.color} name={color.name} />
        ))}
      </div>
    </div>
  );
}

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-16 md:h-24 lg:h-28 mb-2 border border-gray-200"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs md:text-sm text-center">{name}</span>
    </div>
  );
}
