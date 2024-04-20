import { FC } from 'react';

interface InputBaseProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: "number" | "text" | "password" | "email";
  showPassword?: boolean;
  otherClasses?: string;
  defaultValue?: string;
  isTextarea?: boolean;
}

export const OnlyInput: FC<InputBaseProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
  type,
  showPassword,
  defaultValue,
  otherClasses = '',
  isTextarea = false,
}) => {
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    isTextarea ?
    <textarea
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange as unknown as (event: React.ChangeEvent<HTMLTextAreaElement>) => void}
      className={`px-4 w-full text-grey-600 outline-none h-[150px]  hover:border-gray-400 ${otherClasses} font-normal font-DMSansRegular`}
      disabled={disabled}
    />
    :
    <input
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 w-full text-grey-600 outline-none hover:border-gray-400 ${otherClasses} font-normal font-DMSansRegular`}
      disabled={disabled}
      type={inputType}
    />
  );
};
