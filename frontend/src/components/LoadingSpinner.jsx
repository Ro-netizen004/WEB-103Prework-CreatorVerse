const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-20 bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
    </div>
  );
};

export default LoadingSpinner;
