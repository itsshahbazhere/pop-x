
const Width = ({ children, align = "top" }) => {
  const justify = align === "bottom" ? "justify-end" : "justify-top";

  return (
    <div className="min-h-[100dvh] bg-white flex justify-center items-center p-4">
      <div
        className={`w-[360px] bg-gray-50 border min-h-[85dvh] border-gray-300  flex flex-col ${justify}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Width;
