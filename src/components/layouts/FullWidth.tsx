type Props = {
  children?: any;
};

export default function FullWidth({ children }: Props) {
  return (
    <div className="w-full grid grid-cols-12 gap-6 2xl:max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
}
