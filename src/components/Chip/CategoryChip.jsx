const CategoryChip = ({ product }) => {
  return (
    <h5 className="px-2 py-1 bg-gradient-to-tr from-lime-400 to-green-600 text-white font-medium mb-2 text-sm font-Poppins w-fit rounded-lg">
      {product?.category}
    </h5>
  );
};

export default CategoryChip;
