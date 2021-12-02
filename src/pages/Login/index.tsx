import React, { useEffect, useState } from 'react';
import { useLayout } from '../../contexts';
import { useHistory } from 'react-router-dom';
import { ROUTES_Willkommen } from '../../constants';
import { Button, notification } from 'antd';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const dispatch = useDispatch();
  const layoutContext = useLayout();
  const { fullLoading, onLogin } = layoutContext;
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const redirectToHome = async () => {
    history.push(ROUTES_Willkommen());
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onLogin({email, password});
      redirectToHome();
    } catch (error) {
      notification.error({
        message: `Error`,
        description: 'This is error.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fullLoading) {
      redirectToHome();
    }
  }, [fullLoading]);

  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-4 mb-6"
        >
          <div
            className="bg-cover bg-center w-full h-24 mb-3 flex justify-center items-center flex-wrap flex-col text-lg bg-gray-300 text-gray-600"
          >
            <p><strong>Dashboard</strong></p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="username"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div></div>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              type="primary"
              loading={loading}
              htmlType="submit"
            >
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
