import React from 'react';

interface SvgIconProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  src,
  alt = 'icon',
  width = '100%',
  height = '100%',
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SvgIcon;
