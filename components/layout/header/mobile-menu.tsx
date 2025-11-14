"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Star, Target, Quote, Scale, TrendingUp, Shield, Heart, Building2, GraduationCap, HeartPulse, Gavel, Factory, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/shared";

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

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const pathname = usePathname();

  const toggleDropdown = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                if (item.hasDropdown && item.dropdownItems) {
                  const isExpanded = expandedItems.has(index);
                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={cn(
                          "w-full px-4 py-3 rounded-md text-sm font-medium transition-colors",
                          "flex items-center justify-between",
                          "text-foreground hover:bg-accent/50"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4" />}
                          {item.label}
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.dropdownItems.map((dropdownItem) => {
                            const isActive = pathname === dropdownItem.href;
                            const DropdownIcon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "block px-4 py-2 rounded-md text-sm transition-colors",
                                  "flex items-center gap-2",
                                  isActive
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                              >
                                {DropdownIcon && <DropdownIcon className="h-4 w-4" />}
                                {dropdownItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = item.href && pathname === item.href;
                return (
                  <Link
                    key={item.href || index}
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      "flex items-center gap-2",
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
              <div className="pt-4 border-t mt-4 space-y-2">
                <LanguageSwitcher />
                <Button asChild className="w-full">
                  <Link href="/join" onClick={() => setOpen(false)}>
                    Вступить
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

