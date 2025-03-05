import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-lg w-full">
        <div
          style={{
            boxShadow:
              '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          className="bg-gray-300 rounded-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-[#242424]">
              Create Account
            </h2>
            <p className="mt-4 text-center text-[#242424]">Sign up to continue</p>

            {/* Ant Design Form */}
            <Form
              method="POST"
              action="#"
              layout="vertical"
              className="mt-8 space-y-6"
            >
              {/* Email Field */}
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
              >
                <Input
                  placeholder="Email address"
                  type="email"
                  className='!bg-transparent !border-gray-800 !text-gray-700'
                />
              </Form.Item>

              {/* Password Field */}
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                type='password'
                 className='!bg-transparent !border-gray-800 !text-gray-700'
                  placeholder="Password"
                />
              </Form.Item>

              {/* Sign In Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full py-3 !bg-[#AC5553] hover:!bg-indigo-600 text-gray-900 font-medium rounded-md focus:!outline-none focus:!ring-2 focus:!ring-offset-2 focus:!ring-indigo-500"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Sign up Link */}
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Already have an account?</span>
            <Link to={"/login"} className="font-medium text-[#AC5553] hover:text-indigo-400">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
