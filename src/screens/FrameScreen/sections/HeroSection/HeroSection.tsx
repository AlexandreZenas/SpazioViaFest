import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // FAQ data for the left column
  const leftFaqItems = [
    {
      question: "O serviço de buffet é incluso ?",
      answer: "Não. Não oferecemos serviços de buffet, apenas o aluguel do espaço.",
    },
    {
      question: "Por quantas horas é o período de aluguel",
      answer: "alugar do espaço é por 5 horas, podendo ser estendido mediante taxa adicional.",
    },
    {
      question: "Em qual dia da semana posso fazer a minha festa?",
      answer: "As festas podem ser agendadas de segunda a domingo, dependendo da disponibilidade do espaço.",
    }
  ];

  // FAQ data for the right column
  const rightFaqItems = [
    {
      question: "Onde fica o Espaço Amanda Eventos?",
      answer: "O Espaço Amanda Eventos está localizado no coração da cidade, próximo a pontos turísticos e com fácil acesso.",
    },
    {
      question: "Qual a capacidade da casa?",
      answer: "A casa tem capacidade para até 150 pessoas confortavelmente.",
    },
    {
      question: "Em qual dia da semana posso fazer a minha festa?",
      answer: "As festas podem ser agendadas de segunda a domingo, dependendo da disponibilidade do espaço.",
    }
  ];

  return (
    <section id="FAQ" className="w-full bg-white ">
    <Card className="flex flex-col  items-center justify-center gap-4 px-4 md:px-20 py-8 md:py-16 relative self-stretch w-full flex-[0_0_auto] rounded-md shadow-[0] border-none">
      <h2 className="relative w-full max-w-[236px] mt-[-1.00px] font-main-title font-[number:var(--main-title-font-weight)] text-primary-color text-[28px] md:text-[length:var(--main-title-font-size)] text-center tracking-[var(--main-title-letter-spacing)] leading-[32px] md:leading-[var(--main-title-line-height)] [font-style:var(--main-title-font-style)]">
        Perguntas frequentes
      </h2>
      <p> Veja as principais dúvidas dos nossos clientes</p>

      <div className="my-12 flex flex-col items-start lg:flex-row justify-center lg:gap-16 relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-full flex flex-col items-start justify-center gap-3.5 relative flex-1 grow border-b [border-bottom-style:solid] border-[#eef1f2]">
          <Accordion type="single" collapsible className="w-full">
            {leftFaqItems.map((item, index) => (
              <AccordionItem
                key={`left-faq-${index}`}
                value={`left-item-${index}`}
                className="border-b [border-bottom-style:solid] border-[#eef1f2]"
              >
                <AccordionTrigger className="flex items-center justify-between px-0 py-4 relative w-full">
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Krub',Helvetica] font-medium text-gray-500 text-base tracking-[0] leading-6 text-left">
                    {item.question}
                  </span>
                  {/* <ChevronDownIcon className="h-4 w-4 text-[#c88e38] shrink-0 transition-transform duration-200" /> */}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-3.5 relative flex-1 grow border-b [border-bottom-style:solid] border-[#eef1f2]">
          <Accordion type="single" collapsible className="w-full">
            {rightFaqItems.map((item, index) => (
              <AccordionItem
                key={`right-faq-${index}`}
                value={`right-item-${index}`}
                className="border-b [border-bottom-style:solid] border-[#eef1f2]"
              >
                <AccordionTrigger className="flex items-center justify-between px-0 py-4 relative w-full">
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Krub',Helvetica] font-medium text-gray-500 text-base tracking-[0] leading-6 text-left">
                    {item.question}
                  </span>
                  {/* <ChevronDownIcon className="h-4 w-4 text-[#c88e38] shrink-0 transition-transform duration-200" /> */}
                </AccordionTrigger>
                <AccordionContent >{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 pt-10 pb-0 px-4 md:px-[177px] relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-[#21242d] text-[15px] text-center tracking-[0] leading-5">
          Entre em contato conosco e solicite um orçamento para seu evento
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <Button className="hover:bg-[#FF9500] inline-flex items-center justify-center gap-2.5 px-[29px] py-6 relative flex-[0_0_auto] bg-primary-color rounded-md ">
            <span className="w-[142px] mt-[-1.00px] text-white leading-[normal] relative [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-base text-center tracking-[0]">
              Solicitar orçamento
            </span>
          </Button>
        </a>

      </div>
    </Card>
    </section>

  );
};
