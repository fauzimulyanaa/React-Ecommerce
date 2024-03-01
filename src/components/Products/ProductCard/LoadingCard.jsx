function LoadingCard() {
  return (
    <div className="font-custom w-[400px] box-border rounded-xl shadow-md bg-gray-100 py-4 group cursor-pointer relative animate-pulse">
      <div className="img flex justify-center">
        <div className="bg-gray-300 h-[80px] w-[250px]"></div>
      </div>
      <div className="desc flex justify-between px-6 mt-8">
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
      </div>
    </div>
  );
}

export default LoadingCard;
