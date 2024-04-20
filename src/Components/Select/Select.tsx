import clsx from 'clsx';
import React, { useState } from 'react';
import Select from 'react-select';
import { FormFieldContainer } from '../FormFieldContainer/FormFieldContainer';

type Option = { label: string; value: string };

interface SelectProps {
  label: string;
  value?: Option;
  options: Option[];
  placeHolder?: string;
  defaultValue?: Option;
  onChange: (value: Option | string) => void;
  onBlur?: () => void;
  error?: string;
  isMulti?: boolean;
  required?: boolean;
  isSearchable?: boolean;
  showDefaultOptions?: boolean;
  helpText?: string;
  appendInner?: React.ReactNode;
}

const placeholderStyles =
  'text-grey-600 outline-none hover:border-gray-400 px-4 w-full font-normal font-DMSansRegular -ml-1';
const selectInputStyles = 'pl-1 ';
const valueContainerStyles = 'p-1 gap-1 relative';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-gray-100 rounded-[6px] items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-[6px]';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-1 rounded-[6px] hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'none';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-[6px] hover:text-black';
const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-[6px]';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';
const errorStyle = 'border-error-main';

export const SelectLabels: React.FC<SelectProps> = ({
  value = '',
  options,
  error,
  isSearchable = true,
  showDefaultOptions = true,
  placeHolder = '',
  defaultValue,
  isMulti = false,
  label,
  required,
  helpText,
  appendInner,
  onChange,
}) => {
  const controlStyles = {
    base: `h-auto border rounded-[6px] bg-white hover:cursor-pointer text-grey-600 outline-none ${
      error && '!border-error-main'
    }`,
    focus: `border-primary-600 ring-1 ring-primary-500 ${
      error && '!border-error-main'
    }`,
    nonFocus: `border-gray-300 hover:border-gray-400 ${
      error && '!border-error-main'
    }`,
  };

  const [inputValue, setInputValue] = useState('');
  const [opcionesFiltradas, setOpcionesFiltradas] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    if (newValue.length >= 3) {
      const filteredOptions = options
        ?.filter((option) =>
          option.label.toLowerCase().includes(newValue.toLowerCase()),
        )
        .map((option) => ({
          label: option.label,
          value: option.value,
        }));
      setOpcionesFiltradas(filteredOptions);
    } else {
      setOpcionesFiltradas([]);
    }
  };

  return (
    <FormFieldContainer appendInner={appendInner} error={error} label={label} helpText={helpText} required={required}>
        <Select
          unstyled
          isClearable={true}
          value={value}
          defaultValue={defaultValue}
          onInputChange={handleInputChange}
          placeholder={placeHolder}
          onChange={(v) => {
            console.log(v);
            onChange(v as string | Option);
          }}
          isMulti={isMulti}
          isSearchable={isSearchable}
          options={showDefaultOptions ? options : opcionesFiltradas}
          noOptionsMessage={() =>
            inputValue.length < 3 ? null : 'No options found'
          }
          styles={{
            input: (base) => ({
              ...base,
              'input:focus': {
                boxShadow: 'none',
              },
            }),
            multiValueLabel: (base) => ({
              ...base,
              whiteSpace: 'normal',
              overflow: 'visible',
            }),
            control: (base) => ({
              ...base,
              transition: 'none',
              fontSize: '16px',
            }),
            multiValue: (base) => ({
              ...base,
              whiteSpace: 'normal',
              overflow: 'visible',
              backgroundColor: 'transparent',
              border: '1.25px solid #3D3D3D',
              padding: '8px 16px',
              fontWeight: 700,
              color: '#3D3D3D',
            }),
            multiValueRemove: (base) => ({
              ...base,
              backgroundColor: 'transparent',
              border: 'none',
            }),
          }}
          classNames={{
            control: ({ isFocused }) =>
              clsx(
                isFocused ? controlStyles.focus : controlStyles.nonFocus,
                controlStyles.base,
                error && errorStyle,
              ),
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            multiValue: () => multiValueStyles,
            multiValueLabel: () => multiValueLabelStyles,
            multiValueRemove: () => multiValueRemoveStyles,
            indicatorsContainer: () => indicatorsContainerStyles,
            clearIndicator: () => clearIndicatorStyles,
            indicatorSeparator: () => indicatorSeparatorStyles,
            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            groupHeading: () => groupHeadingStyles,
            option: ({ isFocused }) =>
              clsx(
                isFocused && optionStyles.focus,
                // isSelected && optionStyles.selected,
                optionStyles.base,
              ),
            noOptionsMessage: () => noOptionsMessageStyles,
          }}
        />
      </FormFieldContainer>
  );
};
