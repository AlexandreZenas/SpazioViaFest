import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const EventSolutionsSection = (): JSX.Element => {
  return (
    <section id="" className="w-full bg-primary-color shadow-[0px_0px_40px_#00000040] py-8 px-4 md:py-16">
      <div className="container  max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-0">
        <div className="text-white text-2xl md:text-4xl font-bold tracking-[-0.90px] leading-8 md:leading-10 [font-family:'Segoe_UI-Bold',Helvetica] text-center md:text-left">
          Quer nos conhecer?
          <br />
          Agende sua visita hoje.
        </div>

        <Card className="bg-[#ffffff01] rounded-md overflow-hidden shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] border-none ">
          <CardContent className="p-0">
            <a href="https://api.whatsapp.com/send/?phone=5521972524887&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                className=" w-[200px] h-12 bg-white hover:bg-slate-100 text-[#b3912e] [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-base"
              >
                Solicitar visita
              </Button>
            </a>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};
