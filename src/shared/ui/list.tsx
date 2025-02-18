import clsx from 'clsx';

interface IListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<IListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 items-center gap-4 sm:grid-cols-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
