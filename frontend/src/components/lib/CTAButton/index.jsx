export default function CTAButton({
  children,
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick?.()}
      className={`md:text-[#fb8800] md:bg-transparent text-whitefocus:outline-none rounded-md border-[1.5px] border-[#fb8800] text-sm md:hover:text-white md:hover:bg-[#fb8800] bg-[#fb8800] -mr-8 whitespace-nowrap shadow-[0_4px_14px_rgba(0,0,0,0.25)] w-fit p-2 ${className}`}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </button>
  );
}
