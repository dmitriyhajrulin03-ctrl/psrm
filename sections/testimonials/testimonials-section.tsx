"use client";

import { Clock, Heart, Building2, GraduationCap, HeartPulse, Gavel, Factory, LucideIcon, Baby, Shield, Home, BookOpen, Microscope, Users, Stethoscope, Pill, Activity, Scale, Lock, TrendingUp, Briefcase, Truck, Target } from "lucide-react";

type DescriptionPoint = {
  text: string;
  icon: LucideIcon;
};

type ProgramPoint = {
  time: string;
  title: string;
  keyword: string;
  description: string;
  descriptionPoints: DescriptionPoint[];
  image: string;
  icon: LucideIcon;
};

function ProgramCard({ point, index }: { point: ProgramPoint; index: number }) {
  // Мобильная версия (1 колонка): простое чередование красная-серая-красная-серая
  // Десктоп версия (2 колонки): 
  //   Ряд 1 (0,1): красная, серая
  //   Ряд 2 (2,3): серая, красная
  //   Ряд 3 (4,5): красная, серая
  const row = Math.floor(index / 2);
  const positionInRow = index % 2;
  
  // Для мобильной версии простое чередование по индексу (красная-серая-красная-серая)
  const isRedMobile = index % 2 === 0;
  // Для десктопа сложная логика по рядам
  const isRedDesktop = (row % 2 === 0 && positionInRow === 0) || (row % 2 === 1 && positionInRow === 1);
  
  // Цвета для мобильной и десктоп версии
  const bgColorMobile = isRedMobile ? 'bg-[#D7120A]' : 'bg-gradient-to-r from-[#58595B] to-[#4A4B4D]';
  const bgColorDesktop = isRedDesktop ? 'md:bg-[#D7120A]' : 'md:bg-gradient-to-r md:from-[#58595B] md:to-[#4A4B4D]';
  
  // Объединяем классы
  const bgColor = `${bgColorMobile} ${bgColorDesktop}`;
  const textColor = 'text-white';
  
  return (
    <div 
      className="bg-white border border-border/50 overflow-hidden flex flex-col md:flex-row h-full"
      style={{ fontFamily: "'Ford Antenna', sans-serif" }}
    >
      {/* Левая часть - красный или серый фон с текстом (2/3 на десктопе) */}
      <div className={`${bgColor} px-6 py-6 md:px-8 md:py-8 flex-1 md:w-2/3 flex flex-col justify-between`}>
        <div>
          <h3 className={`${textColor} font-bold text-fluid-xl md:text-fluid-2xl uppercase mb-4 md:mb-6 font-extra-condensed leading-tight`}>
            {point.title}
          </h3>
          <ul className={`space-y-2 md:space-y-3 ${textColor} text-fluid-sm md:text-fluid-base leading-relaxed`}>
            {point.descriptionPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex items-start gap-3">
                  <Icon className={`h-5 w-5 md:h-6 md:w-6 ${textColor} flex-shrink-0 mt-0.5`} strokeWidth={2} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-6">
          <Clock className={`h-4 w-4 md:h-5 md:w-5 ${textColor} flex-shrink-0`} />
          <p className={`${textColor} text-sm md:text-base uppercase tracking-tight font-semibold`}>
            {point.time}
          </p>
        </div>
      </div>
      
      {/* Правая часть - белый фон с изображением (1/3 на десктопе) */}
      <div className="bg-white w-full md:w-1/3 flex-shrink-0 overflow-hidden">
        {point.image ? (
          <img
            src={point.image}
            alt={point.title}
            className="w-full h-full object-cover min-h-[200px] md:min-h-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full min-h-[200px] md:min-h-full bg-gray-100 flex items-center justify-center">
            {point.icon && (
              <point.icon className="h-16 w-16 md:h-20 md:w-20 text-[#58595B]" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const programPoints: ProgramPoint[] = [
  {
    time: "4 ГОДА",
    title: "ПОДДЕРЖКА СЕМЬИ",
    keyword: "СЕМЬЯ",
    description: "Укрепление института семьи, защита материнства и детства, улучшение условий для молодых семей",
    descriptionPoints: [
      { text: "Укрепление института семьи", icon: Heart },
      { text: "Защита материнства и детства", icon: Baby },
      { text: "Улучшение условий для молодых семей", icon: Home },
    ],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    icon: Heart,
  },
  {
    time: "4 ГОДА",
    title: "ИНФРАСТРУКТУРА",
    keyword: "ИНФРАСТРУКТУРА",
    description: "Модернизация дорог, коммуникаций и социальной инфраструктуры для улучшения качества жизни",
    descriptionPoints: [
      { text: "Модернизация дорог", icon: Truck },
      { text: "Развитие коммуникаций", icon: Building2 },
      { text: "Улучшение социальной инфраструктуры", icon: Building2 },
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    icon: Building2,
  },
  {
    time: "4 ГОДА",
    title: "ОБРАЗОВАНИЕ",
    keyword: "ОБРАЗОВАНИЕ",
    description: "Доступное качественное образование, поддержка науки и инноваций, развитие человеческого капитала",
    descriptionPoints: [
      { text: "Доступное качественное образование", icon: GraduationCap },
      { text: "Поддержка науки и инноваций", icon: Microscope },
      { text: "Развитие человеческого капитала", icon: Users },
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    icon: GraduationCap,
  },
  {
    time: "4 ГОДА",
    title: "ЗДРАВООХРАНЕНИЕ",
    keyword: "ЗДОРОВЬЕ",
    description: "Доступная и качественная медицинская помощь, профилактика заболеваний, забота о здоровье нации",
    descriptionPoints: [
      { text: "Доступная и качественная медицинская помощь", icon: Stethoscope },
      { text: "Профилактика заболеваний", icon: Activity },
      { text: "Забота о здоровье нации", icon: HeartPulse },
    ],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: HeartPulse,
  },
  {
    time: "4 ГОДА",
    title: "ПРАВОВАЯ ЗАЩИТА",
    keyword: "СПРАВЕДЛИВОСТЬ",
    description: "Защита прав граждан, борьба с коррупцией, обеспечение справедливости и верховенства закона",
    descriptionPoints: [
      { text: "Защита прав граждан", icon: Shield },
      { text: "Борьба с коррупцией", icon: Lock },
      { text: "Обеспечение справедливости и верховенства закона", icon: Scale },
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    icon: Gavel,
  },
  {
    time: "4 ГОДА",
    title: "ПРОМЫШЛЕННОСТЬ",
    keyword: "ЭКОНОМИКА",
    description: "Поддержка отечественного производителя, развитие агропромышленного комплекса, создание рабочих мест",
    descriptionPoints: [
      { text: "Поддержка отечественного производителя", icon: Factory },
      { text: "Развитие агропромышленного комплекса", icon: TrendingUp },
      { text: "Создание рабочих мест", icon: Briefcase },
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    icon: Factory,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-fluid-lg bg-white">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="mb-fluid-xl">
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="bg-[#D7120A] p-2 md:p-2.5 flex-shrink-0 flex items-center justify-center">
              <Target className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[#58595B] font-extra-condensed uppercase text-fluid-3xl md:text-fluid-4xl font-bold">
              Программные направления
            </h2>
          </div>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {programPoints.map((point, index) => (
            <ProgramCard key={index} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

