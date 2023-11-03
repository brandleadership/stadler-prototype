type ButtonPrimaryProps = {
  children?: React.ReactNode;
};

export default function ButtonPrimary({ children }: ButtonPrimaryProps) {
  const primaryButtonStyles = `bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2`;

  return (
    <button className={primaryButtonStyles}>
      {children ?? (
        <>
          Jetzt bewerben
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5650_6261)">
              <path
                d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_5650_6261">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0.5 0.517578)"
                />
              </clipPath>
            </defs>
          </svg>
        </>
      )}
    </button>
  );
}
