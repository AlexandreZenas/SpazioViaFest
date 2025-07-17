import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MapSection = (): JSX.Element => {
  // Event card data for mapping
  const eventCards = [
    {
      image: "/image-1.svg",
      title: "Casamentos",
      description:
        "Ambiente acolhedor e bem estruturado para celebrar seu casamento com tranquilidade. Entre em contato hoje para agendar sua data.",
      iconSrc: "/vector-7.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
    {
      image: "/image-2.svg",
      title: "15 anos",
      description:
        "Espaço ideal para uma festa de 15 anos especial, com show de luzes, pista de dança e diversão para todos os convidados.",
      iconSrc: "/vector-2.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
    {
      image: "/image-3.svg",
      title: "Festas infantis",
      description:
        "Lugar perfeito para a alegria de toda criançada, com espaço de sobra para toda diversão dos pequeninos, pais e convidados.",
      iconSrc: "/vector-3.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
    {
      image: "/image-4.svg",
      title: "Aniversários",
      description:
        "Comemore seu aniversário com amigos e família em um espaço com piscina, churrasqueira, pronto para receber você.",
      iconSrc: "/vector-4.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
    {
      image: "/image-5.svg",
      title: "Eventos em geral",
      description:
        "Formaturas, encontros e confraternizações em um local versátil, confortável e pronto para diferentes tipos de celebração.",
      iconSrc: "/vector-5.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
    {
      image: "/image-6.svg",
      title: "Celebrações evangélicas",
      description:
        "Recebemos cultos, eventos evangélicos, batismo nas águas e confraternização da igreja, estrutura de som e luz de qualidade .",
      iconSrc: "/vector-6.svg",
      iconBg: "bg-primary-color",
      iconWrapper: "relative w-8 h-8",
      iconStyle: "absolute w-[29px] h-[29px] top-px left-px",
    },
  ];

  return (
    <section id="Events" className=" 2xl:max-w-[1440px] xl:max-w-[1280px]  w-auto flex flex-col items-center justify-between py-12 md:py-24 px-4  bg-white">
      <h2 className="font-main-title font-[number:var(--main-title-font-weight)] text-primary-color text-[28px] md:text-[length:var(--main-title-font-size)] text-center tracking-[var(--main-title-letter-spacing)] leading-[32px] md:leading-[var(--main-title-line-height)] [font-style:var(--main-title-font-style)]">
        Soluções para todo tipo de evento
      </h2>

      <Separator className="w-16 bg-gray-500 h-0.5 rounded-full my-6" />

      <p className="w-full max-w-[712px] mb-10 px-4 md:px-0 [font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-6">
        A Spazio Via Fest oferece uma a estrutura ideal para qualquer tipo de evento. Escolha abaixo o tipo de evento que pretende realizar e veja tudo que nós podemos te oferecer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {eventCards.map((card, index) => (
          <Card key={index} className="border-none shadow-none bg-white">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                alt={`${card.title} image`}
                src={card.image}
              />

              {card.iconBg ? (
                <div
                  className={`inline-flex items-center justify-center p-3.5 absolute top-[180px] left-1/2 transform -translate-x-1/2 ${card.iconBg} rounded-[30px]`}
                >
                  <div className={card.iconWrapper}>
                    <img
                      className={card.iconStyle}
                      alt="Icon"
                      src={card.iconSrc}
                    />
                  </div>
                </div>
              ) : (
                <img className={`${card.iconStyle} left-1/2 transform -translate-x-1/2`} alt="Icon" src={card.iconSrc} />
              )}
            </div>

            <CardContent className="flex flex-col items-center justify-center gap-2.5 px-0 py-5">
              <h3 className="self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-[#21242d] text-[15px] text-center tracking-[0] leading-5">
                {card.title}
              </h3>

              <div className="w-12 h-0.5 bg-[#b3912e66] border-l-[20px] [border-left-style:solid] border-[#b3912e]" />

              <p className="w-full px-4 font-text-sm font-[number:var(--text-sm-font-weight)] text-gray-500 text-[length:var(--text-sm-font-size)] text-center tracking-[var(--text-sm-letter-spacing)] leading-[var(--text-sm-line-height)] [font-style:var(--text-sm-font-style)]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5 pt-10 w-full px-4 md:px-[177px]">
        <p className="text-graysblack text-[15px] text-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold tracking-[0] leading-5">
          Entre em contato conosco e solicite um orçamento para seu evento
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <Button className="px-[29px] py-6 bg-primary-color rounded-md hover:bg-[#FF9500] ">
            <span className="w-[142px] text-white leading-[normal] [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-base text-center tracking-[0]">
              Solicitar orçamento
            </span>
          </Button>
        </a>

      </div>
    </section>
  );
};
