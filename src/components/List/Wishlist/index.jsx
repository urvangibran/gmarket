import LikedProductCard from "../../Cards/LikedProductCard";

const WishList = ({ likedProducts }) => {
  return (
    <ul className="p-2 space-y-3">
      {likedProducts.map((product) => (
        <LikedProductCard product={product} />
      ))}
    </ul>
  );
};

export default WishList;
