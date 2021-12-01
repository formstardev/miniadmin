import { message, notification } from 'antd';
import React, {
  useContext,
  createContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';
import { TOKEN } from '../constants/globals';
import { LayoutProps, OnLoginProps } from './use-layout.props';

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
  return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
  const [waitChildren, setWaitChildren] = useState<boolean>(true);
  const [fullLoading, setFullLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [navigationSelected, setNavigationSelected] = useState<string>(''); //navigation selected

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      setFullLoading(true);
      getUser();
    } else {
      setFullLoading(false);
    }
    setWaitChildren(false)
  }, [])

  async function onLogin(credentials: OnLoginProps) {
    try {
      await validateCredentials(credentials);
      localStorage.setItem(TOKEN, 'seu_token_aqui');
      await getUser();
    } catch (error) {
      throw new Error();
    }
  }

  // TODO: Alterar por serviço
  async function validateCredentials(credentials: OnLoginProps) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'admin@admin.com' && credentials.password === '123456') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    })
  }

  async function getUser() {
    try {
      const user$ = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: 'José Onofre'
          });
        }, 2000);
      })
      setUser(user$);
    } catch (error) {
      notification.error({
        message: 'Tente novamente'
      })
    } finally {
      setFullLoading(false);
    }
  }

  function onLogout() {
    setUser(undefined);
    localStorage.removeItem(TOKEN);
  }
  return {
    waitChildren,
    fullLoading,
    user,
    navigationSelected,
    setFullLoading,
    setUser,
    setNavigationSelected,
    onLogin,
    onLogout
  };
}

export const ProvideLayout: FunctionComponent = ({ children }) => {
  const layout: LayoutProps = useProvideLayout();
  if(layout.waitChildren) {
    return null;
  }
  return <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>;
};