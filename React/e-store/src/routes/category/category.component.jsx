import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';


const Category = ()=>{
  const {category} = useParams();
  // const {categoriesMap} = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products,setProducts] = useState(categoriesMap[category]);

  useEffect(()=>{
    return setProducts(categoriesMap[category])
  }
  ,[category,categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className="category-container">
        {products && products.map(product=><ProductCard key={product.id} product={product}/>)}
      </div>
    </>
  )
}

export default Category;