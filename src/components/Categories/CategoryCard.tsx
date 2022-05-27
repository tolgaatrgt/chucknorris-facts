import React from "react";
import Box from "@mui/material/Box";
import { CategoryTitle } from "./styled";

interface CategoryCardProps {
  categoryName: string;
  onCategorySearch: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  onCategorySearch,
}) => {
  return (
    <Box
      sx={{ padding: "0.5rem", margin: "0 0.5rem" }}
      onClick={() => onCategorySearch(categoryName)}
    >
      <CategoryTitle variant="body2">{categoryName}</CategoryTitle>
    </Box>
  );
};

export default CategoryCard;
