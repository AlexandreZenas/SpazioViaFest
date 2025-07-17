import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const MainBannerSection = (): JSX.Element => {
  const [boolean, setBoolean] = React.useState(false);
  // Navigation menu items data
  const navItems = [
    { text: "HOME", active: false },
    { text: "EVENTOS", active: false },
    { text: "NOSSA ESTRUTURA", active: false },
    { text: "DEPOIMENTOS", active: false },
    { text: "FAQ", active: false },
    { text: "LOCALIZAÇÃO", active: false },
  ];
  function handleClick() {
    setBoolean(!boolean);
  }

  return (
    <section id="Hero" className="relative flex flex-col h-[680px] md:h-[680px] sm:h-[500px] items-center justify-between pt-0 pb-16 md:pb-32 px-0 w-full bg-[#ffffff]">
      <img
        className="absolute w-full h-full top-0 left-0 object-cover"
        alt="Background"
        src="/background.png"
      />

      <header className="flex px-4 items-center justify-between md:justify-center gap-2.5  lg:px-20 md:px-4 py-5 relative self-stretch w-full z-10 bg-transparent bg-[linear-gradient(0deg,rgba(75,35,75,0)_0%,rgba(75,35,75,0.7)_100%)]">
        <div className="">
          <a href="/#">
            <img src="icons/Logo.svg" alt="Logo" />
          </a>
        </div>

        <div className=" hidden md:flex items-center justify-around gap-[38px] relative flex-1 grow">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center justify-center gap-[38px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    onClick={handleClick}
                    className={`flex items-center justify-center px-0 py-[22px] ${
                       item.active ? "text-primary-color" : "text-white"
                    } [font-family:'Inter',Helvetica] font-medium text-[10.5px] tracking-[0.23px] leading-[20.2px]`}
                  >
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <a href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button className="px-3 md:px-5 py-2 bg-primary-color rounded-md">
                  <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-[10px] md:text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
                    Entrar em contato
                  </span>
                </Button>
        </a>

      </header>

      <div className=" flex flex-col w-full max-w-[880px] px-4   h-[434px] items-start justify-center gap-4 md:gap-6 relative z-10">
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-2xl tracking-[0] leading-[20px] md:leading-[22.5px]">
          Bem-vindo(a) ao salão:
        </div>

        <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 px-0 py-[7px] relative flex-[0_0_auto] overflow-hidden">
            <div className="relative w-fit mt-[-0.94px] ml-[-0.19px] [-webkit-text-stroke:0.19px_#000000] font-main-title font-[number:var(--main-title-font-weight)] text-[#d2b366] text-[28px] md:text-[length:var(--main-title-font-size)] tracking-[var(--main-title-letter-spacing)] leading-[32px] md:leading-[var(--main-title-line-height)] whitespace-nowrap [font-style:var(--main-title-font-style)]">
              SPAZIO VIA FEST
            </div>
          </div>
        </div>

        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-[22.1px] tracking-[0] leading-[20px] md:leading-[22.5px]">
          O espaço ideal para o seu evento.
        </div>

        <a href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="relative md:max-w-[328.14px] h-[40px]  bg-primary-color border-[0.75px] border-solid border-white rounded-none p-0"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] md:text-xs text-center tracking-[0] leading-[14px] md:leading-[11.2px] px-2">
              SOLICITE UM ORÇAMENTO SEM COMPROMISSO!
            </span>
          </Button>
        </a>

      </div>
    </section>
  );
};
