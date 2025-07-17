import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ServicesOverviewSection = (): JSX.Element => {
  // Data for amenities/services
  const amenities = [
    {
      icon: "icons/our-space/Relume-1.svg",
      title: "Churrasqueira",
      description:
        "Churrasqueira de tijolos grande, com duas laterais bancadas de granito.",
      iconWrapperClass: "relative w-12 h-12",
      iconClass: "relative w-12 h-12",
    },
    {
      icon: "icons/our-space/Relume-2.svg",
      title: "Piscina",
      description:
        "Nosa piscina tem conta com 3 metros de largura x 7 de comprimento e 1,20 de profundidade.",
      iconWrapperClass: "relative w-12 h-12",
      iconClass: "relative w-12 h-12",
    },
    {
      icon: "icons/our-space/Relume-3.svg",
      title: "Área externa",
      description:
        "Nossa área externa tem 200m² com espaço para colocar pula-pula, touro mecânico, futebol de sabão, tobogã inflável e outros brinquedos, 10 mesas e 40 cadeiras. Além de tenda para tempo chuvoso e 3 banheiros (masculino, feminino, e cadeirantes).",
      iconWrapperClass: "relative w-12 h-12",
      iconClass: "relative w-12 h-12",
    },
    {
      icon: "icons/our-space/Relume-4.svg",
      title: "Área interna",
      description:
        "Contamos com mais de 100m², jogo de iluminação a laser, mesa e caixas de som, 14 mesas de vidro e 80 cadeiras de luxo acolchoadas, ambiente climatizado , cozinha e banheiro masculino e feminino.",
      iconWrapperClass: "relative w-12 h-12",
      iconClass: "relative w-12 h-12",
    },
  ];

  // Data for rules/notices
  const rules = [
    {
      icon: "icons/no-accepts/block.svg",
      description: "O consumo de bebidas alcoólicas é proibido",
      iconClass: "relative w-[25.6px] h-[25.6px]",
    },
    {
      icon: "icons/no-accepts/warning.svg",
      description: "Não oferecemos serviços, somente o aluguel do espaço",
      iconClass:
        "relative w-7 h-7 -top-px -left-px bg-[url(/vector-11.svg)] bg-[100%_100%]"
    },
    {
      icon: "icons/no-accepts/hour.svg",
      description: "O período de aluguel são de 5 horas.",
      iconClass:
        "relative w-[28.8px] h-[28.8px] mt-[-3.20px] mb-[-3.20px] ml-[-3.20px] mr-[-3.20px]",
    },
  ];

  return (
    <section id="OurSpace" className=" 2xl:max-w-[1440px] xl:max-w-[1280px] flex flex-col w-full items-center gap-4 md:gap-2 pt-8 md:pt-16 pb-16 md:pb-32 px-4 relative ">
      <div className="flex flex-col xl:flex-row items-start gap-12 lg:gap-12 relative w-full">
        <Card className="xl:w-1/2  w-full  border-none shadow-none">
          <CardContent className="p-0 gap-6 flex flex-col items-start w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-main-title font-[number:var(--main-title-font-weight)] text-primary-color text-[28px] md:text-[length:var(--main-title-font-size)] text-center tracking-[var(--main-title-letter-spacing)] leading-[32px] md:leading-[var(--main-title-line-height)] [font-style:var(--main-title-font-style)]">
              Conheça o nosso espaço
            </h2>

            <div className="flex flex-col items-start gap-6 py-2 relative self-stretch w-full">
              {amenities.map((amenity, index) => (
                <div
                  key={`amenity-${index}`}
                  className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full"
                >
                  <div className="flex items-start gap-4 md:gap-6 relative self-stretch w-full">
                    <div className={amenity.iconWrapperClass}>
                      <div className="relative h-12">
                        <img
                          className={amenity.iconClass}
                          alt={amenity.title}
                          src={amenity.icon}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-1 relative flex-1">
                      <h3 className="mt-[-1.00px] text-[#21242d] text-[15px] relative self-stretch [font-family:'Montserrat',Helvetica] font-semibold tracking-[0] leading-5">
                        {amenity.title}
                      </h3>

                      <p className="relative self-stretch font-text-sm font-[number:var(--text-sm-font-weight)] text-black text-[length:var(--text-sm-font-size)] tracking-[var(--text-sm-letter-spacing)] leading-[var(--text-sm-line-height)] [font-style:var(--text-sm-font-style)]">
                        {amenity.description}
                      </p>
                    </div>
                  </div>

                  {index < amenities.length - 1 && (
                    <Separator className="w-full" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="xl:w-1/2  w-full flex flex-col border-none shadow-none h-full">
          <CardContent className="w-full p-0 flex flex-col items-center justify-between relative h-full gap-6">
            <img
              className="relative flex-[0_0_auto] xl:w-full w-4/5 h-auto "
              alt="Frame"
              src="images/our-space/Frame.png"
            />

            <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-4 md:gap-[10px_32px] px-0 py-2.5 relative self-stretch w-full overflow-hidden">
              {rules.map((rule, index) => (
                <div
                  key={`rule-${index}`}
                  className="flex flex-col items-center justify-center gap-1 relative w-full md:flex-1 md:grow"
                >
                  <div className="inline-flex items-center gap-2 p-[3.2px] relative flex-[0_0_auto]">
                    <div className="relative w-[25.6px] h-[25.6px]">
                      <img
                        className={rule.iconClass}
                        alt={`Rule icon ${index + 1}`}
                        src={rule.icon}
                      />
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs text-center relative self-stretch [font-family:'Montserrat',Helvetica] font-semibold tracking-[0] leading-5">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
