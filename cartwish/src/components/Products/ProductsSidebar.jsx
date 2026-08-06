import React, { useEffect, useState } from 'react'
import './ProductsSidebar.css'
import LinkWithIcon from '../navbar/LinkWithIcon'
import rocket from '../../assets/rocket.png'
import apiClient from '../../utils/api-client'

const ProductsSidebar = () => {
  const [categories, setCategories] =useState([])
  const [error, setError] = useState("")

  useEffect(() =>{
    apiClient
         .get("/category")
         .then((res) => setCategories(res.data))
         .catch((err) => setError(err.message));
  }, []);
  
  return (
    <aside className='products_sidebar'>
        <h2>Category</h2>

        <div className='category_links'></div>
          {error && <em className="form_error">{error}</em>}
          {categories.map(category => <LinkWithIcon
          key={category._id} 
          title={category.name}
          link={`products?category=${category.name}`}
          emoji={`http://localhost:5000/category/${category.image}`}
          sidebar={true}
          />)}
          
    </aside>
  )
}

export default ProductsSidebar