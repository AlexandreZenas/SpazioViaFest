import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";

export const TestimonialsSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = ["Eventos", "Nossa estrutura", "FAQ", "Fale Conosco"];
  const links = ["#Events", "#OurSpace", "#FAQ", "#Informamtions"];
  // Social media icons data
  const socialIcons = [
    {
      src: "icons/footer/instagram.svg",
      alt: "Social media icon",
      link: "https://www.instagram.com/spazioviafest/",
    },
    { src: "icons/footer/whatsapp.svg", alt: "Social media icon", link: "https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" },
    {
      src: "icons/footer/email.svg",
      alt: "Social media icon",
      link: "mailto:spaziovf@gmail.com",
      wrapperClass: false,
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-beetween gap-6 md:gap-8 px-4 md:px-20 py-8 md:py-16 w-full bg-primary-color">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 w-full overflow-hidden">
        {/* Navigation Links */}
        <NavigationMenu className="lg:w-[40%] xl:w-2/5 md:w-full w-full flex-auto lg:max-w-[40%] justify-start">
          <NavigationMenuList className="ml-0 mr-0 flex lg:flex-col lg:items-start xl:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-0 xl:gap-6">
            {navLinks.map((link, index) => (
              <NavigationMenuItem key={index} className="">
                <NavigationMenuLink href={links[index]} className="[font-family:'Open_Sans',Helvetica]   font-semibold text-[#ffffff] text-xs md:text-sm tracking-[0] leading-6 whitespace-nowrap">
                  {link}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Logo */}
        <div className="flex flex-col h-auto lg:h-[81px] items-center justify-center gap-4 ">
          <a href="/#Hero" >
            <img src="icons/LogoWhite.svg" alt="" />
          </a>

        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center lg:justify-end gap-4 lg:w-[40%] md:w-full w-full">
          {socialIcons.map((icon, index) =>
            icon.wrapperClass ? (
              <div key={index} className="relative w-8 h-8">
                <a
                  className="hover:cursor-pointer "
                  href={icon.link}
                  target="_blank"
                >
                  <img
                    className="absolute w-[27px] h-[21px] top-[5px] left-[3px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              </div>
            ) : (
              <a
                className="hover:cursor-pointer "
                href={icon.link}
                target="_blank"
              >
                <img
                  key={index}
                  className="relative w-8 h-8"
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
            )
          )}
        </div>
      </div>

      <Separator className="w-full h-px bg-white" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 p-2.5 w-full">
        <div className="w-full md:flex-1 [font-family:'Open_Sans',Helvetica] font-semibold text-[#ffffff] text-xs md:text-sm text-center tracking-[0] leading-6">
          © 2025 Spazio Via Fest | Todos os direitos reservados.
        </div>

        <div className="w-full md:flex-1 [font-family:'Open_Sans',Helvetica] font-semibold text-[#ffffff] text-xs md:text-sm text-center tracking-[0] leading-6">
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#ffffff] text-xs md:text-sm tracking-[0] leading-6">
            Desenvolvido por{"  "}
          </span>
          <a
            href="https://impulseonagency.com"
            target="_blank"
            className="underline"
          >
            Impulseon Agency
          </a>
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#ffffff] text-xs md:text-sm tracking-[0] leading-6">
            &nbsp;
          </span>
        </div>
      </div>
    </footer>
  );
};
