import LikedProductCard from "../../Cards/LikedProductCard";

const WishList = ({ likedProducts }) => {
  return (
    <ul className="p-2 space-y-3">
      {likedProducts.map((p) => (
        <LikedProductCard product={p} />
      ))}
    </ul>
  );
};

export default WishList;
