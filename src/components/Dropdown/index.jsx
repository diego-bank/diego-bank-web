import React, { useState } from 'react';

import Select from 'react-select';

// componente de dropdown
const Dropdown = ({options, handleChange}) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        onChange={handleChange}
        placeholder=""
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="Dropdown"
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: '#23265A',
            border: '#858BE9 solid 1px',
            minWidth: '200px',
          }),
          option: (styles, { isDisabled, isFocused, isSelected }) => ({
            backgroundColor: isSelected ? '#858BE9' : isFocused ? '#858ce98d' : '#fff',
            cursor: 'pointer',
            color: '#000'
          }),
          placeholder: () => ({
            color: '#fff',
          }),
          input: () => ({
            color: '#fff',
          }),
          singleValue: (styles) => ({
            ...styles,
            color: '#fff',
          })
        }}
      />
    </>
  );
};

export default Dropdown;