"use client";

import Image from "next/image";
import { Quote, MessageSquare } from "lucide-react";

const leaders = [
  {
    name: "Игорь Додон",
    position: "Председатель ПСРМ",
    quote: "Мы строим будущее Молдовы вместе с народом. Наша сила — в единстве и справедливости.",
    image: "/images/Dodon.jpg",
  },
  {
    name: "Влад Батрынча",
    position: "Заместитель председателя ПСРМ",
    quote: "Каждый гражданин заслуживает достойной жизни. Мы работаем для каждого из вас.",
    image: "/images/Batrincea.jpg",
  },
  {
    name: "Владимир Односталко",
    position: "Член Политбюро ПСРМ",
    quote: "Прозрачность и честность — основа нашей работы. Народ должен знать правду.",
    image: "/images/Odnostalko.jpg",
  },
  {
    name: "Григорий Новак",
    position: "Член Политбюро ПСРМ",
    quote: "Экономическое развитие и социальная справедливость — приоритеты нашей партии.",
    image: "/images/Novak.jpg",
  },
  {
    name: "Ольга Чеботарь",
    position: "Член Политбюро ПСРМ",
    quote: "Защита прав женщин и семьи — это защита будущего нашей нации.",
    image: "/images/Cabotari.jpg",
  },
];

export function PricingSection() {
  return (
    <section className="py-fluid-lg bg-muted/30">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="mb-fluid-xl">
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-[#D7120A] flex-shrink-0" strokeWidth={2.5} />
            <h2 className="text-[#58595B] font-extra-condensed uppercase text-fluid-3xl md:text-fluid-4xl font-bold">
              Цитаты лидеров
            </h2>
          </div>
        </div>
        <div 
          className="auto-grid" 
          style={{
            '--min-column-width': '320px',
            '--grid-gap': 'clamp(1.5rem, 4vw, 2.5rem)'
          } as React.CSSProperties}
        >
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#D7120A] overflow-hidden shadow-none flex flex-col"
            >
              {/* Цитата з іконкою - белая часть */}
              <div className="p-6 flex-1">
                <div className="mb-fluid-md">
                  <Quote className="h-6 w-6 text-[#D7120A] mb-3" />
                  <p className="text-foreground text-fluid-base leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
              
              {/* Інформація про лідера з круглим фото - красная подкладка */}
              <div className="bg-[#D7120A] px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/30">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        style={{ 
                          objectPosition: 
                            leader.name === "Влад Батрынча" ? 'center 30%' : 
                            leader.name === "Ольга Чеботарь" ? 'center 20%' : 
                            'center 25%' 
                        }}
                        sizes="64px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-fluid-base text-white mb-1 uppercase font-extra-condensed">
                      {leader.name}
                    </p>
                    <p className="text-white/90 text-fluid-sm">
                      {leader.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

