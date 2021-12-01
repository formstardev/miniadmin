export interface OnLoginProps {
  email: string;
  password: string;
}

export interface LayoutProps {
  waitChildren: boolean;
  fullLoading: boolean;
  user: any;
  navigationSelected: string,
  setFullLoading: (value: boolean) => void;
  setUser: (value: any) => void;
  setNavigationSelected: (value: string) => void;
  onLogin: (credentials: OnLoginProps) => void;
  onLogout: () => void;
}
