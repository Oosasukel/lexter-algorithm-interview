import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Loading } from '../Loading';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
  children?: ReactNode;
}

export const Button = ({
  children,
  className,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      disabled={loading}
      className={`bg-transparent border-transparent hover:border-gray-50 border-2 text-base text-gray-50 rounded-md p-2 h-fit relative disabled:border-transparent ${className}`}
      {...rest}>
      {children}
      {loading && <Loading />}
    </button>
  );
};
