import { FC } from 'react';
import { Typography } from '../Typography/Typography';

type Props = {
  label: string;
  children: React.ReactNode;
  helpText?: string;
  required?: boolean;
  error?: string;
  otherClasses?: string;
  appendInner?: React.ReactNode;
};

export const FormFieldContainer: FC<Props> = ({
  label,
  children,
  helpText,
  required,
  error,
  otherClasses,
  appendInner
}) => {
  return (
    <div
      className={`flex flex-col w-full text-left mb-4 ${otherClasses ? otherClasses : ''
        }`}
    >
      <Typography
        type="l4"
        bold
        gutterBottom
        required={required}
        noWrap
        color="text-[#3D3D3D]"
        otherClasses="mb-[16px] font-bold"
      >
        {label}
      </Typography>

      <div className="grid grid-flow-col-dense items-center">
        <div>
          {children}
        </div>

        {appendInner && (
          <div className='ml-3'>
            {appendInner}
          </div>
        )}
      </div>

      {helpText && (
        <div className="mt-2 text-grey-700 text-[.75rem]">
          {helpText}
        </div>
      )}

      {error && (
        <Typography
          type="b4"
          bold={false}
          color="text-red-500"
          gutterBottom={false}
          otherClasses='mt-[8px]'
        >
          {error}
        </Typography>
      )}
    </div>
  );
};
