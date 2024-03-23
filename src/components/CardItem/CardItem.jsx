import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CarItem,
  CarIcon,
  CarTitle,
  CarModel,
  CarPrice,
  CarConteiner,
  LearnMoreBtn,
  PhotoConteiner,
  SvgHeart,
  SvgHeartActiv,
  SvgVector,
  ListInfo,
  ItemInfo,
} from './CardItem.styled';
import sprite from '../../images/sprite.svg';
import { addFavorites, deleteFavorites } from '../../redux/cars/carSlice';
import Modal from '../Modal/Modal';
import { selecFavorites } from '../../redux/cars/selector';

function CardItem({ car }) {
  const dispatch = useDispatch();
  const favoritesArr = useSelector(selecFavorites);
  const {
    make,
    model,
    year,
    rentalPrice,
    img,
    id,
    address,
    rentalCompany,
    type,
    photoLink,
  } = car;
  const addres = address.split(',').map((item) => item.trim());
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const isFavorite = favoritesArr.find((car) => car.id === id);
    if (isFavorite) {
      setFavorite(true);
    }
  }, [favoritesArr, id]);

  const HandleFavoriteClick = () => {
    setFavorite(!favorite);
    if (favorite) {
      dispatch(deleteFavorites(car));
    } else {
      dispatch(addFavorites(car));
    }
  };
  const [shownModal, setShownModal] = useState(false);

  const onModal = () => {
    setShownModal(!shownModal);
  };
  return (
    <CarItem>
      <PhotoConteiner>
        <CarIcon
          src={img || photoLink}
          onError={(e) => {
            e.target.src =
              'https://gavalimotors.com/adminpanel/assets/images/carnotfound.jpg';
          }}
          loading="lazy"
          alt="car Photo"
        />
        {!favorite ? (
          <SvgHeart onClick={HandleFavoriteClick}>
            <use href={sprite + '#icon-heart-1'}></use>
          </SvgHeart>
        ) : (
          <SvgHeartActiv onClick={HandleFavoriteClick}>
            <use href={sprite + '#icon-heart'}></use>
          </SvgHeartActiv>
        )}
      </PhotoConteiner>
      <div>
        <CarConteiner>
          <CarTitle>
            {make} {model.length < 8 ? <CarModel>{model}</CarModel> : ''},{year}
          </CarTitle>
          <div>
            <CarPrice>{rentalPrice}</CarPrice>
          </div>
        </CarConteiner>
        <ListInfo>
          <ItemInfo>{addres[1]} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector-1'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>{addres[2]} </ItemInfo>
          <ItemInfo>
            <SvgVector>
              <use href={sprite + '#icon-Vector-1'}></use>
            </SvgVector>
          </ItemInfo>
          <ItemInfo>{rentalCompany} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector-1'}></use>
          </SvgVector>
          <ItemInfo> {type === model ? 'Premium' : type} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector-1'}></use>
          </SvgVector>
          <ItemInfo> {make} </ItemInfo>
          <SvgVector>
            <use href={sprite + '#icon-Vector-1'}></use>
          </SvgVector>
          <ItemInfo> {id} </ItemInfo>
        </ListInfo>
        <LearnMoreBtn type="button" onClick={onModal}>
          Learn more
        </LearnMoreBtn>
        {shownModal && <Modal onClose={onModal} arr={car} />}
      </div>
    </CarItem>
  );
}

export default CardItem;
