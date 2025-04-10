import { useTheme } from 'next-themes';

export function useToggleTheme() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return {
    handleChangeTheme,
  };
}
