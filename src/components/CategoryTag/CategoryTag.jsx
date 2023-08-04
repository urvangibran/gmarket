const CategoryChip = ({ product }) => {
  return (
    <h5 className="px-2 py-1 first-letter:uppercase bg-[#CDF0F8] mb-2 text-sm verdana w-fit rounded-md">
      {product?.category}
    </h5>
  );
};

export default CategoryChip;
