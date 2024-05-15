export interface ContextPreferencesT {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  onOpen: () => void;
  onClose: () => void;
  menu: boolean;
  toggleTheme: () => void;
}
