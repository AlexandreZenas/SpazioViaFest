import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GallerySection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      title: "Telefones",
      icon: <PhoneIcon className="w-3.5 h-3.5" />,
      content: "(21) 972524887",
    },
    {
      title: "E-mail",
      icon: <MailIcon className="w-4 h-3" />,
      content: "spaziovf@gmail.com",
    },
  ];

  // Action buttons data
  const actionButtons = [
    {
      icon: "icons/informations/agend.svg",
      text: "Agendar visita",
    },
    {
      icon: "icons/informations/check.svg",
      text: "Fechar festa",
    },
  ];

  return (
    <section id="Informamtions" className="flex flex-col items-center justify-center py-12 md:py-24 w-full">
      <div className="flex flex-col lg:flex-row items-start gap-6 px-4 md:px-20 w-full">
        {/* Left column - Contact information */}
        <div className="lg:w-1/2 w-full flex flex-col items-start gap-6 flex-1">
          <h2 className="w-fit font-main-title font-[number:var(--main-title-font-weight)] text-[28px] md:text-[length:var(--main-title-font-size)] tracking-[var(--main-title-letter-spacing)] leading-[32px] md:leading-[var(--main-title-line-height)] text-primary-color [font-style:var(--main-title-font-style)]">
            Faça uma visita
          </h2>

          <p className="w-full max-w-[577.75px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-500 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
            Entre em contato conosco por whatsapp ou e-mail e estaremos
            <br />
            prontos para tirar todas as suas dúvidas.
          </p>

          <div className="flex flex-col md:flex-row gap-4  justify-between items-start md:items-center  w-full">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="w-full sm:w-1/2  border-0 shadow-none bg-transparent"
              >
                <CardContent className="w-full flex flex-col items-start gap-2 p-0 pt-4 border-t border-[#b3912e40]">
                  <h3 className="self-stretch h-6 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-900 text-base leading-6 whitespace-nowrap">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="flex-1 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-500 text-sm leading-5">
                      {item.content}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-start gap-2 p-0 pt-4 border-t border-[#b3912e40]">
              <h3 className="self-stretch h-6 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-900 text-base leading-6 whitespace-nowrap">
                Endereço
              </h3>
              <div className="flex items-center gap-3 w-full">
                <div className="w-4 h-4 flex items-center justify-center">
                  <MapPinIcon className="w-3 h-4" />
                </div>
                <span className="flex-1 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-500 text-sm leading-normal">
                  Av. Coelho da Rocha, 2964 - Banco de Areia, Mesquita - RJ,
                  26572-481
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-start gap-2 p-0 pt-4 border-t border-[#b3912e40]">
              <h3 className="self-stretch h-6 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-900 text-[15.9px] leading-6 whitespace-nowrap">
                Entre em contato
              </h3>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-[7px] py-[3px] w-full">
                {actionButtons.map((button, index) => (
                  <a
                    href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      key={index}
                      className="w-full sm:w-[200px] flex items-center justify-center gap-3 px-[17px] py-6 bg-primary-color text-white rounded-md"
                    >
                      <div className="w-5 h-4 relative">
                        <img
                          className="absolute w-3.5 h-4 top-0 left-[3px]"
                          alt="Vector"
                          src={button.icon}
                        />
                      </div>
                      <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-base leading-6 whitespace-nowrap">
                        {button.text}
                      </span>
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Map */}
        <div className=" flex flex-shrink lg:w-1/2 w-full h-full flex-1">
          <iframe
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4661159701627!2d-43.4141875!3d-22.7851862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996785ad78bfb1%3A0x6e8896fde8ea03e4!2sSpazio%20via%20fest!5e0!3m2!1spt-BR!2sbr!4v1752787395979!5m2!1spt-BR!2sbr"
            className="w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
