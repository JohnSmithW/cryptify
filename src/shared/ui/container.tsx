interface IcontainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IcontainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" {...props}>
      {children}
    </div>
  );
};
