import Link from "next/link";


type ButtonPrimaryProps = {
  children?: React.ReactNode;
  position?: "left" | "center" | "right";
  buttonText?: string;
  href?: string;
};

export default function ButtonPrimary({
  children,
  position,
  buttonText,
  href,
}: ButtonPrimaryProps) {
  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent:
      position === "left"
        ? "flex-start"
        : position === "center"
        ? "center"
        : "flex-end",
    alignItems: "center",
  };
  const primaryButtonStyles = `bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2`;

  return (
    <div style={containerStyles}>
      <Link className={primaryButtonStyles} href={href ?? "#"}>
        {children ?? (
          <>
            {buttonText ? buttonText : "Jetzt bewerben"}
            <img
              className="w-4 h-4"
              src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
              alt=""
            />
          </>
        )}
      </Link>
    </div>
  );
}
