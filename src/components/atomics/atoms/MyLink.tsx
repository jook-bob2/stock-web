import Link, { LinkProps } from 'next/link';
import React from 'react';

interface Props extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MyLink({ children, ...props }: Props) {
  return <Link {...props}>{children}</Link>;
}
