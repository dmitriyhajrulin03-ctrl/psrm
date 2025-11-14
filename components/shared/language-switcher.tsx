"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  return (
    <DropdownMenu
      trigger={
        <Button
          variant="ghost"
          className="text-sm font-medium text-foreground hover:bg-accent/50 flex items-center gap-1"
        >
          <span className="text-xs">ЯЗЫК:</span>
          <div className="w-4 h-3 bg-gradient-to-b from-blue-600 via-red-600 to-white rounded-sm" />
          <ChevronDown className="h-4 w-4" />
        </Button>
      }
    >
      <DropdownMenuItem>Русский</DropdownMenuItem>
      <DropdownMenuItem>Română</DropdownMenuItem>
    </DropdownMenu>
  );
}

