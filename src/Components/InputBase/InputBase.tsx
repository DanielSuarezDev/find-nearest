import React, { FC } from 'react';


import { FormFieldContainer } from '../FormFieldContainer/FormFieldContainer';
import { OnlyInput } from '../OnlyInput/OnlyInput';

interface InputBaseProps {
  placeholder?: string;
  value?: string | number | undefined | null | any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: 'text' | 'number' | 'password' | 'email';
  label: string;
  error?: string;
  height?: string;
  required?: boolean;
  isPhoneField?: boolean;
  otherClasses?: string;
  width?: string;
  isTextarea?: boolean;
  helpText?: string;
  appendInner?: React.ReactNode;
  defaultPlaceholder?: boolean;
}

export const MyInputBase: FC<InputBaseProps> = ({
  label,
  value,
  disabled,
  placeholder,
  required,
  height = 'h-[44px]',
  width = 'w-full',
  type = 'text',
  error,
  otherClasses,
  isTextarea = false,
  helpText,
  appendInner,
  onChange,
  defaultPlaceholder = true,
}) => {

  const handleChange = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    onChange(event);
  };

  const inputType = type;
  const errorClass = error ? '!border-error-main' : 'border-grey-300';
  const heightClass = height ? height : 'h-auto';
  const widthClass = width ? width : 'w-full';
  const disabledClasses = disabled ? '!bg-gray-200 cursor-not-allowed' : '';

  return (
    <FormFieldContainer
      appendInner={appendInner}
      error={error}
      label={label}
      helpText={helpText}
      required={required}
      otherClasses={otherClasses}
    >
      <div
        className={`flex border-[1px] items-center relative border-grey-300 rounded-[6px] bg-white ${heightClass} ${disabledClasses} ${errorClass} ${widthClass}`}
      >
        <OnlyInput
          placeholder={`${defaultPlaceholder ? `Escribe tu  ${label}`   : placeholder}`}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          type={inputType}
          isTextarea={isTextarea}
        />
      </div>
    </FormFieldContainer>
  );
};
