export interface ContextPreferencesT {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  lang: string;
  toggleLang: (value: string) => void;
  toggleTheme: () => void;
  onOpen: () => void;
  onClose: () => void;
  menu: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
