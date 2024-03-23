import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect } from 'react';

import {
  Backdrop,
  ModalContent,
  CarImg,
  ModalDescription,
  ModalAccessories,
  ModalListInfo,
  ModalListAccessories,
  ModalRentalList,
  RentalItem,
  SvgBtnClose,
  CloseBtn,
  RentalBtn,
} from './Modal.styled';
import {
  CarTitle,
  CarModel,
  ItemInfo,
  SvgVector,
} from '../CardItem/CardItem.styled';
import sprite from '../../images/sprite.svg';
const ModalRoot = document.querySelector('#Modal');

function Modal({ onClose, arr }) {
  const {
    make,
    model,
    rentalPrice,
    img,
    id,
    address,
    rentalConditions,
    type,
    mileage,
    accessories,
    year,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    photoLink,
  } = arr;
  useEffect(() => {
    return window.addEventListener('keydown', keyDown);
  }, []);

  useLayoutEffect(() => {
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, []);
  const keyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const addres = address.split(',').map((item) => item.trim());
  return createPortal(
    <Backdrop onClick={onOverlayClose}>
      <ModalContent>
        <CarImg src={img || photoLink} alt="car Photo" loading="lazy" />
        <CarTitle $size={true}>
          {make} {<CarModel>{model}</CarModel>}, {year}
        </CarTitle>
        <ModalListInfo>
          <ItemInfo>{addres[1]} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>{addres[2]} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>id:{id} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>Year:{year} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>Type: {type} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>Fuel Consumption: {fuelConsumption} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo> Engine Size:{engineSize}</ItemInfo>
        </ModalListInfo>
        <ModalDescription>{description}</ModalDescription>
        <ModalAccessories>Accessories and functionalities:</ModalAccessories>
        <ModalListAccessories>
          <ItemInfo>{accessories[0].slice(0, 13)} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>{accessories[1].slice(0, 13)} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>{accessories[2].slice(0, 13)} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>{functionalities[0].slice(0, 13)} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>{functionalities[1].slice(0, 13)} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector'}></use>
          </SvgVector>
          <ItemInfo>{functionalities[2].slice(0, 13)} </ItemInfo>
        </ModalListAccessories>
        <ModalAccessories>Rental Conditions: </ModalAccessories>
        <ModalRentalList>
          <RentalItem>
            Minimum age :<span>{rentalConditions.slice(13, 16)}</span>
          </RentalItem>
          <RentalItem> Valid driver’s license</RentalItem>
          <RentalItem>
            {rentalConditions.slice(38, rentalConditions.length)}
          </RentalItem>
          <RentalItem>
            Mileage:
            <span>
              {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </RentalItem>
          <RentalItem>
            Price:<span>{rentalPrice.slice(1)}$</span>
          </RentalItem>
        </ModalRentalList>
        <CloseBtn onClick={() => onClose(false)}>
          <SvgBtnClose>
            <use href={sprite + '#icon-x'}></use>
          </SvgBtnClose>
        </CloseBtn>
        <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
      </ModalContent>
    </Backdrop>,
    ModalRoot
  );
}

export default Modal;
