import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const testimonials = [
    {
      name: "Talita Filosi",
      role: "Formanda",
      image: "/imagem-de-talita-filosi--formanda.png",
      testimonial: `"Equipe excelente, foi o melhor lugar que poderia
      ter escolhido pra fazer minha formatura, e em
      nome de nos 4 formandos agradecemos a toda a
      equipe, buffet excelente!!! Todos da equipe
      sempre muito solícitos em todo momento da
      preparação desse grande dia! Gratidão !
      Recomendo, e espero em breve poder voltar."`,
    },
    {
      name: "Gláucia Rodrigues",
      role: "Mãe de debutante",
      image: "/imagem-de-gl-ucia-rodrigues--m-e-de-debutante.png",
      testimonial: `"Passando para agradecer a belíssima
      festa que tivemos na noite de ontem.
      Nunca tivemos dúvidas sobre o sucesso
      que esta noite seria e vocês foram
      importantíssimos, nos proporcionando
      muita tranquilidade desde nosso primeiro
      encontro até o grande dia. Gratidão."`,
    },
    {
      name: "Eloane Guerreiro",
      role: "Noiva",
      image: "/imagem-de-eloane-guerreiro--noiva.png",
      testimonial: `"Desde o primeiro atendimento pela internet fui
      muito bem atendida, vivi um sonho de princesa,
      minha decoração liiiiiiiinda demais. O decorador
      me orientou muito em cada detalhe. Salão
      maravilhoso, todos os funcionários dedicados,
      meus convidados me parabenizaram pelo
      atendimento e buffet do salão por tudo na
      verdade, que noite linda. Muito obrigada por ter
      vivido esse sonho. Continue assim vocês são
      excelentes. Nunca vou esquecer esse dia."`,
    },
  ];

  return (
    <section className="w-full py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <p className="text-primary-color font-bold text-lg tracking-[0.90px] uppercase mb-2">
            NÃO ACREDITE SÓ NO QUE FALAMOS
          </p>

          <div className="flex flex-col items-center">
            <h2 className="font-bold text-graysblack text-3xl md:text-5xl text-center leading-[36px] md:leading-[48px]">
              Veja a opinião dos nossos
            </h2>
            <div className="flex items-center">
              <h2 className="font-bold text-graysblack text-3xl md:text-5xl text-center leading-[36px] md:leading-[48px]">
                clientes
              </h2>
              <div className="w-12 h-12 ml-4">
                <img
                  className="w-[42px] h-[30px] mt-2"
                  alt="Vector"
                  src="/vector-8.svg"
                />
              </div>
            </div>
          </div>

          <Separator className="w-full max-w-[512px] h-0.5 bg-gray-100 rounded-full mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 ${index === 1 ? "lg:border-x lg:border-solid" : ""}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start mb-6">
                  <Avatar className="w-16 h-16 rounded-full bg-gray-200">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-[17.9px] leading-7 whitespace-pre-line">
                  {testimonial.testimonial}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
