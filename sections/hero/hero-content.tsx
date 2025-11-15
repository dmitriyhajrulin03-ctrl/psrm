import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroContent() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
      <div className="max-w-5xl">
        <h1 className="
          font-extra-condensed tracking-tight
          mb-fluid-md
          text-[#58595B]
        ">
          Вместе строим будущее Молдовы
        </h1>
        
        <p className="
          text-muted-foreground
          mb-fluid-lg
          max-w-3xl
          leading-relaxed
          text-fluid-lg
        ">
          Партия социалистов Республики Молдова — это сила, которая объединяет людей 
          ради процветания нашей страны. Мы работаем для каждого гражданина, 
          защищая интересы народа и строя справедливое общество.
        </p>
        
        <div className="flex flex-col sm:flex-row space-fluid-sm items-start">
          <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 py-6">
            <Link href="/join">Вступить в партию</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6">
            <Link href="/about">Узнать больше</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

