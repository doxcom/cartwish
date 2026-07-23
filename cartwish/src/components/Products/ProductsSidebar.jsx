import React from 'react'
import './ProductsSidebar.css'
import LinkWithIcon from '../navbar/LinkWithIcon'
import rocket from '../../assets/rocket.png'

const ProductsSidebar = () => {
  return (
    <aside className='products_sidebar'>
        <h2>Category</h2>

        <div className='category_links'></div>
          <LinkWithIcon 
          title='Electronics'
          link='products?category=electronics'
          emoji={rocket}
          sidebar={true}
          />
    </aside>
  )
}

export default ProductsSidebar