interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Laptop">Laptop</option>
        <option value="Car">Car</option>
        <option value="House">House</option>
        <option value="Bike">Bike</option>
        <option value="Phone">Phone</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
