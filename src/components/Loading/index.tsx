export const Loading = () => {
  return (
    <div className="bg-gray-800 opacity-50 rounded-lg absolute left-0 top-0 w-full h-full z-10 flex items-center justify-center">
      <div className="w-8 h-8 animate-spin border-t-2 border-l-2 border-white rounded-full"></div>
    </div>
  );
};
