import { getCompany } from "@/graphql";

type Props = {
  params: { companyId: string };
};

export default async function CompanyPage({ params }: Props) {
  const companyId = Number(params.companyId);
  const { data } = await getCompany(companyId);

  return (
    <main>
      <h1>{data?.companies_by_pk?.name}</h1>
      <h2>{data?.companies_by_pk?.ceo}</h2>
      <ul>
        {data?.companies_by_pk?.products.map((product) => (
          <li key={product.name}>
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
