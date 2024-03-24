import { useState, useEffect, useRef } from 'react';

import {
  CustomDropdown,
  DropdownHeader,
  DropdownList,
  DropdownItem,
  SvgDown,
  DropdownText,
} from './Dropdown.stuled';
import sprite from '../../assets/sprite.svg';

function Dropdown({ arr, value, set, height, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (arr) => {
    set(arr);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <CustomDropdown>
      <DropdownHeader onClick={toggleDropdown} ref={dropdownRef}>
        <DropdownText>{selectedOption || value}</DropdownText>
        <SvgDown $active={isOpen ? true : undefined}>
          <use href={sprite + '#icon-chevron-down'}></use>
        </SvgDown>
      </DropdownHeader>
      {isOpen && (
        <DropdownList $heigh={height ? height : undefined}>
          {arr.map((arr, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(arr)}>
              {arr}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </CustomDropdown>
  );
}

export default Dropdown;
