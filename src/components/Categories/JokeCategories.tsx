import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryStack } from "./styled";

interface JokeCategoriesProps {
  categories: string[];
  onCategorySearch: (category: string) => void;
}

const JokeCategories: React.FC<JokeCategoriesProps> = ({
  categories,
  onCategorySearch,
}) => {
  return (
    <CategoryStack>
      {categories.map((category) => (
        <CategoryCard
          onCategorySearch={onCategorySearch}
          key={category}
          categoryName={category}
        />
      ))}
    </CategoryStack>
  );
};
export default JokeCategories;
