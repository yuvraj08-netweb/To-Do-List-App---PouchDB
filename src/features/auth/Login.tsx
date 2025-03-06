import { Input, Checkbox, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import { credentials } from "./Signup";
import { useAuthStore } from "../../state/useAuthStore";

const Login = () => {
  const [form] = useForm();
  const {login} = useAuthStore();
  
  const onFinish = async (values: credentials) => {
    console.log("Received values:", values);
    const res = await login(values.email, values.password);
    console.log(res, "resresresrse");
    // Handle signup logic here
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-lg w-full">
        <div
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="bg-gray-300 rounded-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-[#242424]">
              Welcome Back
            </h2>
            <p className="mt-4 text-center text-[#242424]">
              Sign in to continue
            </p>

            {/* Ant Design Form */}
            <Form
              form={form}
              layout="vertical"
              className="mt-8 space-y-6"
              onFinish={onFinish}
            >
              {/* Email Field */}
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  placeholder="Email address"
                  type="email"
                  className="!bg-transparent !border-gray-800 !text-gray-700"
                />
              </Form.Item>

              {/* Password Field */}
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  type="password"
                  className="!bg-transparent !border-gray-800 !text-gray-700"
                  placeholder="Password"
                />
              </Form.Item>

              <div className="flex justify-between">
                {/* Remember Me Checkbox */}
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="!text-gray-800">Remember me</Checkbox>
                </Form.Item>

                {/* Forgot Password Link */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-medium !text-[#AC5553] hover:text-indigo-400"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
              {/* Sign In Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full py-3 !bg-[#AC5553] hover:!bg-indigo-600 text-gray-900 font-medium rounded-md focus:!outline-none focus:!ring-2 focus:!ring-offset-2 focus:!ring-indigo-500"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Sign up Link */}
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don't have an account?</span>
            <Link
              to={"/signup"}
              className="font-medium text-[#AC5553] hover:text-indigo-400"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
