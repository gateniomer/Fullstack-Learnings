import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selectors";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () =>{
  // const {categoriesMap} = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return(
    <>
      {
        Object.keys(categoriesMap).map(title => (
            <CategoryPreview key={title} title={title} products={categoriesMap[title]}/>
  ))
      }

    </>
  )
}

export default CategoriesPreview;