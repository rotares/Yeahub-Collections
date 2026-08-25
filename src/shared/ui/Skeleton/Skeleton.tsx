import clsx from 'clsx';
import type { CSSProperties, HTMLAttributes } from 'react';
import styles from './Skeleton.module.css';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  count?: number;
  className?: string;
};

export const Skeleton = ({
  variant = 'rectangular',
  width,
  height,
  borderRadius,
  count = 1,
  className,
  style,
  ...props
}: SkeletonProps) => {
  const customStyles: CSSProperties = {
    ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
    ...(borderRadius !== undefined && {
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    }),
    ...style,
  };

  const renderItem = (index: number) => (
    <div
      key={index}
      className={clsx(styles.skeleton, styles[variant], className)}
      style={customStyles}
      {...props}
    />
  );

  if (count > 1) {
    return <>{Array.from({ length: count }).map((_, i) => renderItem(i))}</>;
  }

  return renderItem(0);
};
