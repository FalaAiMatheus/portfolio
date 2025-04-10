'use client';

import { Button } from '@/components/ui/button';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { Moon, Sun } from 'lucide-react';

export const ToggleTheme = () => {
  const { handleChangeTheme } = useToggleTheme();

  return (
    <Button
      className="cursor-pointer"
      onClick={handleChangeTheme}
      variant="ghost"
      size="icon"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
