import React from "react";
import { Card } from "../../../../components/ui/card";

export const ContactFormSection = (): JSX.Element => {
  // Gallery images data
  const galleryImages = [
    { url: "/figure---link---buffet-01.png", alt: "Buffet item 1" },
    { url: "/figure---link---buffet-02.png", alt: "Buffet item 2" },
    { url: "/figure---link---buffet-03.png", alt: "Buffet item 3" },
    { url: "/figure---link---buffet-04.png", alt: "Buffet item 4" },
    { url: "/figure---link---buffet-05.png", alt: "Buffet item 5" },
    { url: "/figure---link---buffet-06.png", alt: "Buffet item 6" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full bg-white py-6 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center tracking-[-0.90px] leading-8 md:leading-10 text-primary-color [font-family:'Segoe_UI-Bold',Helvetica]">
        Galeria
      </h2>

      <p className="w-full max-w-[820px] px-4 md:px-0 [font-family:'Krub',Helvetica] font-light text-gray-500 text-sm md:text-base text-center leading-5 md:leading-6">
        Oferecemos um vasto menu, com diversas opções de doces, salgados e
        pratos, para todos os tipos de ocasião.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 py-2 w-full px-4 md:px-0">
        {galleryImages.map((image, index) => (
          <Card
            key={`gallery-image-${index}`}
            className="w-full h-[120px] md:h-[195px] p-0 overflow-hidden border-none"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
              aria-label={image.alt}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};
