"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Star, Target, Quote, Scale, TrendingUp, Shield, Heart, Users, Building2, GraduationCap, HeartPulse, Gavel, Factory, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface NavItem {
  href?: string;
  label: string;
  icon?: LucideIcon;
  hasDropdown?: boolean;
  dropdownItems?: { href: string; label: string; icon?: LucideIcon }[];
}

const navItems: NavItem[] = [
  {
    label: "Почему выбирают нас",
    icon: Star,
    hasDropdown: true,
    dropdownItems: [
      { href: "#social-justice", label: "Социальная справедливость", icon: Scale },
      { href: "#economic-development", label: "Экономическое развитие", icon: TrendingUp },
      { href: "#people-protection", label: "Защита интересов народа", icon: Shield },
    ],
  },
  {
    label: "Программные направления",
    icon: Target,
    hasDropdown: true,
    dropdownItems: [
      { href: "#family", label: "Поддержка семьи и детей", icon: Heart },
      { href: "#infrastructure", label: "Развитие инфраструктуры", icon: Building2 },
      { href: "#education", label: "Образование и наука", icon: GraduationCap },
      { href: "#healthcare", label: "Здравоохранение", icon: HeartPulse },
      { href: "#legal", label: "Правовая защита", icon: Gavel },
      { href: "#industry", label: "Промышленность и сельское хозяйство", icon: Factory },
    ],
  },
  {
    href: "#leaders",
    label: "Цитаты лидеров",
    icon: Quote,
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-fluid-xs">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        if (item.hasDropdown && item.dropdownItems) {
          return (
            <DropdownMenu
              key={index}
              trigger={
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm font-medium text-foreground hover:bg-accent/50",
                    "flex items-center gap-1.5"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              }
            >
              {item.dropdownItems.map((dropdownItem) => {
                const DropdownIcon = dropdownItem.icon;
                return (
                  <DropdownMenuItem key={dropdownItem.href} asChild>
                    <Link href={dropdownItem.href} className="flex items-center gap-2">
                      {DropdownIcon && <DropdownIcon className="h-4 w-4" />}
                      {dropdownItem.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenu>
          );
        }

        const isActive = item.href && pathname === item.href;
        return (
          <Link
            key={item.href || index}
            href={item.href || "#"}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors",
              "flex items-center gap-1.5",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-foreground hover:bg-accent/50"
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

