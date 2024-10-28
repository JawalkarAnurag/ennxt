
export default function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.imageUrl} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
}
