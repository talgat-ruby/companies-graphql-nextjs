import { addNewCompany } from "@/actions";

const initialState = {
  message: "",
};

export default async function NewCompanyPage() {
  return (
    <main>
      <form action={addNewCompany}>
        <h1>Add new company</h1>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="ceo" placeholder="ceo" />
        <input type="number" name="foundedYear" placeholder="year" />
        <input type="text" name="type" placeholder="type" />
        <button>Add</button>
      </form>
    </main>
  );
}
