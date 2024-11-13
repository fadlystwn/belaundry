import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useSWRMutation from 'swr/mutation';
import * as Yup from 'yup';
import { useAuth } from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const sendRequest = (key: string, { arg: values }: { arg: LoginFormValues }) =>
  fetch(key, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  }).then((res) => res.json());

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const { trigger } = useSWRMutation(`${apiUrl}/user/sign-in`, sendRequest);

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const result = await trigger(values);
      console.log('HELLO 2', result.response);
      if (result.status) {
        login(result.response);
        navigate('/');
      } else {
        console.error('Login failed: invalid response structure');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  console.log('HELLO 3', login);

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightBlue">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-blue mb-6">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue text-white py-2 rounded-md font-semibold hover:bg-blue transition-colors"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
