import { ProductRatingStars, CommentsLink, ProductRating } from "./style";

const Rating = () => {
  return (
    <ProductRating>
      <div>
        {[...Array(5)].map((star, id) => {
          return <ProductRatingStars key={id}>&#9733;</ProductRatingStars>;
        })}
      </div>
      <CommentsLink>12 Yorum</CommentsLink>
    </ProductRating>
  );
};

export default Rating;
