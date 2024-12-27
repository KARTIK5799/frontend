import busImage from "../assets/bus.png";
import InputField from "../components/InputField";
import LinkButton from "../components/LinkButton";
import PasswordInput from "../components/PasswordInput";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center p-10">
      <div className="bg-white w-full md:h-full rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Section */}
        <div className="relative overflow-hidden h-full bg-gradient-to-br rounded-3xl w-full md:w-1/2 p-10 flex flex-col items-center justify-center text-white">
          <img
            src={busImage}
            alt="Bus"
            className="absolute z-0 w-full h-full object-cover transform scale-x-[-1]"
          />
          <div className="z-10 absolute top-5 md:top-10 left-5 md:left-10">
            <h2 className="font-bold hidden md:block text-4xl md:text-7xl text-black text-left md:w-[50%]">
              Get Your Ticket From Here
            </h2>
            <p className="mt-3 text-2xl hidden md:block text-gray-100 w-[50%] shadow-black text-left">
              Secure your seat in just a few clicks. Register now to get started.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:relative w-full md:w-1/2 p-8 md:p-14 bg-gray-50 flex flex-col justify-center items-center">
          <h3 className="text-2xl md:absolute top-10 font-bold text-gray-800 mb-8 md:mb-20">
            VeloCity
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-4 text-center">
            Fill in the details below to register and access your account.
          </p>
          <form className="space-y-5 w-full max-w-md">
            <InputField
              label="Full Name"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
            <InputField
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
            <PasswordInput
              label="Password"
              id="password"
              placeholder="Create a password"
            />
            <button   type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign Up
            </button>
          </form>
          {/* Correct usage of LinkButton without passing children as prop */}
          <LinkButton to="/login">Already have an account? Login</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
