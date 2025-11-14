import { Navigation } from "./navigation";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "@/components/shared";
import { LanguageSwitcher } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-2xl px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <Navigation />
          <div className="flex items-center space-fluid-sm">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/join">Вступить</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

