const LinkButton = ({ to, children }) => {
  return (
    <p className="mt-6 text-sm text-center text-gray-600">
    
      <a href={to} className="text-blue-600 hover:underline">
        {children}
      </a>
    </p>
  );
};

export default LinkButton;
