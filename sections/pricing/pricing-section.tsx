"use client";

import Image from "next/image";
import { Quote, MessageSquare } from "lucide-react";

const leaders = [
  {
    name: "Игорь Додон",
    position: "Председатель ПСРМ",
    quote: "Сегодня правящая партия, внеся изменения в Закон о государственном бюджете на 2025 год, сократила финансирование инвестиционных проектов. Это означает, что обещанных в предвыборной кампании дорог и преобразований не будет. Людей снова обманули",
    image: "/images/Dodon.jpg",
  },
  {
    name: "Влад Батрынча",
    position: "Член Политисполкома ПСРМ",
    quote: "Власть забрала 150 миллионов из капитального строительства, 400 миллионов — из дорожных проектов, 60 миллионов — из экологических. У власти нет соглашения с МВФ, потому что они нарушили финансовую и фискальную дисциплину. Дефицит бюджета составляет 18 миллиардов леев, и непонятно, что они собираются делать дальше с экономикой. Новое правительство — но без каких-либо экономических идей, без реальных проектов развития",
    image: "/images/Batrincea.jpg",
  },
  {
    name: "Владимир Односталко",
    position: "Член Политисполкома ПСРМ",
    quote: "Никто ни за что не отчитывается. И у нас повторяется та же практика – в парламентской стране профильный министр не считает нужным докладывать в парламенте и отвечать на вопросы по такому важному проекту как уточнение бюджета. Ее просто нет в парламенте",
    image: "/images/Odnostalko.jpg",
  },
  {
    name: "Григорий Новак",
    position: "Член Политисполкома ПСРМ",
    quote: "Дети и молодые люди в школах, лицеях и университетах все чаще становятся героями криминальных новостей; растет количество преступлений, совершенных под воздействием наркотиков. Мы должны защитить наших детей",
    image: "/images/Novak.jpg",
  },
  {
    name: "Ольга Чеботарь",
    position: "Член Политисполкома ПСРМ",
    quote: "Отсутствие чёткого плана по реинтеграции Приднестровского региона остаётся серьёзной проблемой. Этот план должен быть разработан и обсуждён прозрачно, с участием всех политических сил",
    image: "/images/Cabotari.jpg",
  },
];

export function PricingSection() {
  return (
    <section className="py-fluid-lg bg-white">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="mb-fluid-xl">
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="bg-[#D7120A] p-2 md:p-2.5 flex-shrink-0 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
            </div>
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
                    «{leader.quote}».
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
                    <p className="font-bold text-fluid-base text-white mb-0.5 uppercase font-extra-condensed">
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

