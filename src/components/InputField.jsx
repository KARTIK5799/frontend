const InputField = ({ label, id, type, placeholder }) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 text-left">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default InputField;
  