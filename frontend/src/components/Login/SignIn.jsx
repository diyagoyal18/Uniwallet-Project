import MetaMaskLogin from "./MetaMaskLOgin";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint for user login
      const response = await axios.post('http://localhost:5000/api/user/login', formData);

      // Assuming the API returns a token upon successful login
      const token = response.data.token;

      // You can store the token in localStorage or a state management solution like Redux
      localStorage.setItem('token', token);

      setErrorMessage(''); // Clear any previous error messages

      // Navigate to the dashboard after successful login using useNavigate
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error.response?.data);
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  // Check if the user is already authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // Convert to boolean
  };

  // Redirect to the dashboard if already authenticated
  

  
    return (
      <>
       
        <div className=" flex flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
               Create One
              </Link>
            </p>
          </div>
          <h1 className=" text-center text-4xl font-semibold p-12">OR</h1>
          <MetaMaskLogin/>
        </div>
     
      </>
    )
  }
  