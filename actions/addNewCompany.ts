import { addCompany } from "@/graphql";

async function addNewCompany(formData: FormData) {
  "use server";

  const name = formData.get("name");
  const ceo = formData.get("ceo");
  const foundedYear = formData.get("foundedYear");
  const type = formData.get("type");

  try {
    if (
      !(name instanceof File) &&
      !(ceo instanceof File) &&
      !(foundedYear instanceof File) &&
      !(type instanceof File)
    ) {
      const variables = {
        company: {
          name,
          ceo,
          founded_year: Number(foundedYear),
          type,
        },
      };

      const res = await addCompany(variables);
      console.log("err", res.error);
      console.log("data", res.data);
    }

    console.log("success");
  } catch (err) {
    console.log("err", err);
  }
}

export default addNewCompany;
