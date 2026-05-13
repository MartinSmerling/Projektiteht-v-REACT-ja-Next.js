import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white p-6 rounded shadow">
      {children}
    </div>
  );
}
