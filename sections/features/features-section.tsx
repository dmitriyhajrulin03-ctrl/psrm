import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Социальная справедливость",
    description: "Защита прав и интересов каждого гражданина, обеспечение равных возможностей и достойного уровня жизни для всех",
  },
  {
    icon: TrendingUp,
    title: "Экономическое развитие",
    description: "Стимулирование роста экономики, создание рабочих мест и поддержка малого и среднего бизнеса",
  },
  {
    icon: Shield,
    title: "Защита интересов народа",
    description: "Борьба за справедливость, прозрачность власти и реальное участие граждан в управлении страной",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-fluid-lg bg-white">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="mb-fluid-xl">
          <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
            <div className="bg-[#D7120A] p-2 md:p-2.5 flex-shrink-0 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-[#58595B] font-extra-condensed uppercase text-fluid-3xl md:text-fluid-4xl font-bold">
              Почему выбирают нас
            </h2>
          </div>
        </div>
        <div 
          className="auto-grid" 
          style={{
            '--min-column-width': '280px',
            '--grid-gap': 'clamp(1.5rem, 4vw, 2rem)'
          } as React.CSSProperties}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border border-[#D7120A] bg-white rounded-none shadow-none">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-4 md:gap-5">
                    <div className="flex-shrink-0">
                      <Icon className="h-12 w-12 md:h-16 md:w-16 text-[#58595B] stroke-[1.5]" />
                    </div>
                    <h3 className="text-[#D7120A] font-bold text-fluid-xl md:text-fluid-2xl uppercase text-left font-extra-condensed">
                      {feature.title}
                    </h3>
                    <p className="text-foreground text-fluid-sm md:text-fluid-base leading-relaxed text-left">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

