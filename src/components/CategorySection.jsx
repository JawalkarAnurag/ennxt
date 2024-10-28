
import CategoryCard from './CategoryCard'; // Create CategoryCard component separately

const categories = [
  { id: 1, name: 'New Launch', imageUrl: '/slider_4.jpg' },
  { id: 2, name: 'Best Sellers', imageUrl: '/slider_4.jpg' },
  { id: 3, name: 'T-Shirts', imageUrl: '/IMG_0156.JPG' },
  { id: 4, name: 'Stingers', imageUrl: '/IMG_0183.JPG' },
  { id: 5, name: 'Joggers', imageUrl: '/IMG_0233.JPG' },
  { id: 6, name: 'Sale!!', imageUrl: '/slider_4.jpg' },
  
  // Add more categories as needed
];

export default function CategorySection() {
  return (
    <div className="category-section">
      <h2>Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
