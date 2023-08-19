import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../../categories";
const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000_000),
  category: z.enum(categories),
});

type ExpenseDataForm = z.infer<typeof schema>;
interface Props {
  onFormSubmit: (data: ExpenseDataForm) => void;
}

const ExpenseForm = ({ onFormSubmit }: Props) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ExpenseDataForm>({ resolver: zodResolver(schema) });
  return (
    <form
      className="mb-3"
      onSubmit={handleSubmit((data) => {
        onFormSubmit(data), reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
          id="amount"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
