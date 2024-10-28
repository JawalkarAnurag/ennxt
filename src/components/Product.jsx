
import  { useState } from 'react';

const productData = [
  {
    id: 1,
    name: 'Men\'s Shirt',
    price: '$29.99',
    image: 'AdobeStock_173660090.png',
    category: 'forHim',
  },
  {
    id: 2,
    name: 'Unisex Joggers',
    price: '$49.99',
    image: '18.png',
    category: 'forHer',
  },{
    id: 3,
    name: 'Men\'s Shirt',
    price: '$29.99',
    image: '3.png',
    category: 'forHim',
  },{
    id: 4,
    name: 'Men\'s Stinger Red ',
    price: '$29.99',
    image: '7.png',
    category: 'forHim',
  },{
    id: 5,
    name: 'Men\'s Stinger Blue',
    price: '$29.99',
    image: '11.png',
    category: 'forHim',
  },
  // Add more product data as needed
];

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState('forHim');

  const productsToShow = productData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="product-section">
      <div className="category-buttons">
        <button
          className={selectedCategory === 'forHim' ? 'active' : ''}
          onClick={() => setSelectedCategory('forHim')}
        >
          For Him
        </button>
        <button
          className={selectedCategory === 'forHer' ? 'active' : ''}
          onClick={() => setSelectedCategory('forHer')}
        >
          For Her
        </button>
      </div>

      <div className="product-cards">
        {productsToShow.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
            />
            <div className="product-card-details">
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-price">{product.price}</p>
              <button className='btn btn-outline-success'>Add to Cart</button>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
