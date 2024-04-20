import React, { FC } from 'react';

import { TypeTypography, tagsByType } from './utils.typography';

type Props = {
  children: React.ReactNode;
  type: keyof typeof TypeTypography;
  gutterBottom?: boolean;
  noWrap?: boolean;
  bold?: boolean;
  required?: boolean;
  color?: string;
  otherClasses?: string;
};

export const Typography: FC<Props> = ({
  children,
  type = TypeTypography.b1,
  gutterBottom = true,
  noWrap = false,
  bold = false,
  color,
  otherClasses,
}) => {
  const Parent = tagsByType(type, {
    bold,
    noWrap,
    gutterBottom,
    color,
    otherClasses,
  });

  return (
    <Parent>
      {children}
    </Parent>
  );
};
