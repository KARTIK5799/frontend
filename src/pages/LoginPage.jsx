import loginImage from "../assets/output.jpg";
import InputField from "../components/InputField";
import LinkButton from "../components/LinkButton";
import PasswordInput from "../components/PasswordInput";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 sticky flex items-center justify-center p-10">
      <div className="bg-white w-full md:h-full rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="relative overflow-hidden h-full bg-gradient-to-br rounded-3xl w-full md:w-1/2 p-10 flex flex-col items-center justify-center text-white">
          <img
            src={loginImage}
            alt="Bus"
            className="absolute z-0 w-full h-full object-cover transform scale-x-[-1]"
          />
          <div className="z-10 absolute top-5 md:top-10 left-5 md:left-10">
            <h2 className="font-bold hidden md:block text-4xl md:text-7xl text-black text-left md:w-[50%]">
              Get Your Ticket From Here
            </h2>
            <p className="mt-3 text-2xl hidden md:block text-gray-100 w-[50%] shadow-black text-left">
              Secure your seat in just a few clicks. Login now to continue.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:relative w-full md:w-1/2 p-8 md:p-14 bg-gray-50 flex flex-col justify-center items-center">
          <h3 className="text-2xl md:absolute top-10 font-bold text-gray-800 mb-8 md:mb-20">
            VeloCity
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Welcome Back</h2>
          <p className="text-gray-600 mb-4 text-center">
            Enter your email and password to access your account.
          </p>
          <form className="space-y-5 w-full max-w-md">
            <InputField
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
            <PasswordInput
              label="Password"
              id="password"
              placeholder="Enter your password"
            />
            <div className="flex items-center justify-between mt-4">
              <LinkButton to="#">Forgot password?</LinkButton>
            </div>
            <button   type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign In
            </button>
          </form>
          <LinkButton to="/register">Don’t have an account? Sign Up</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
