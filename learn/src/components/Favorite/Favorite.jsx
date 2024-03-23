import { useSelector } from 'react-redux';

import { selecFavorites, carsFilterFavorites } from '../../redux/cars/selector';
import CardItem from '../CardItem/CardItem';
import { FavoritList, Text } from './Favorite.styled';
import CardFilter from '../CardFilter/CardFilter';

function Favorite() {
  const favoritesArr = useSelector(selecFavorites);
  const FilterFavorite = useSelector(carsFilterFavorites);

  return (
    <>
      {FilterFavorite ? (
        <>
          <CardFilter filterArr={favoritesArr} />
          <FavoritList>
            {FilterFavorite.length === 0 ? (
              <p>not faund favorites</p>
            ) : (
              FilterFavorite.map((el, index) => (
                <CardItem key={index} car={el} />
              ))
            )}
          </FavoritList>
        </>
      ) : (
        <>
          {favoritesArr.length === 0 ? (
            <Text>
              It appears that you have not added any car to your favorites yet.
              To get started, you can add car that you like to your favorites
              for easier access in the future.
            </Text>
          ) : (
            <>
              <CardFilter filterArr={favoritesArr} />
              <FavoritList>
                {favoritesArr.map((el, index) => (
                  <CardItem key={index} car={el} />
                ))}
              </FavoritList>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Favorite;
