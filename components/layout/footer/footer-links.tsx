import Link from "next/link";
import { Star, Target, Quote, Scale, TrendingUp, Shield, Heart, Building2, GraduationCap, HeartPulse, Gavel, Factory, Users } from "lucide-react";

const footerLinks = [
  {
    title: "Почему выбирают нас",
    icon: Star,
    links: [
      { href: "#social-justice", label: "Социальная справедливость", icon: Scale },
      { href: "#economic-development", label: "Экономическое развитие", icon: TrendingUp },
      { href: "#people-protection", label: "Защита интересов народа", icon: Shield },
    ],
  },
  {
    title: "Программные направления",
    icon: Target,
    links: [
      { href: "#family", label: "Поддержка семьи и детей", icon: Heart },
      { href: "#infrastructure", label: "Развитие инфраструктуры", icon: Building2 },
      { href: "#education", label: "Образование и наука", icon: GraduationCap },
      { href: "#healthcare", label: "Здравоохранение", icon: HeartPulse },
      { href: "#legal", label: "Правовая защита", icon: Gavel },
      { href: "#industry", label: "Промышленность и сельское хозяйство", icon: Factory },
    ],
  },
  {
    title: "Цитаты лидеров",
    icon: Quote,
    links: [
      { href: "#leaders", label: "Лидеры партии", icon: Users },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-fluid-lg">
      {footerLinks.map((section, index) => {
        const SectionIcon = section.icon;
        return (
          <div key={index}>
            <div className="flex items-center gap-2 mb-fluid-sm">
              {SectionIcon && <SectionIcon className="h-4 w-4 text-white" />}
              <h3 className="font-semibold text-white text-fluid-base">{section.title}</h3>
            </div>
            <ul className="space-fluid-xs text-fluid-sm">
              {section.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {LinkIcon && <LinkIcon className="h-3.5 w-3.5 flex-shrink-0" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

