import Link from "next/link";
import { getCompanies } from "@/graphql/";

export default async function Home() {
  const { data } = await getCompanies();

  return (
    <main>
      {data?.companies.map((company) => (
        <li key={company.id}>
          <Link href={`/${company.id}`}>{company.name}</Link>
          <span>Ceo: {company.ceo}</span>
          <span>Founded: {company.founded_year}</span>
          <span>Type: {company.type}</span>
        </li>
      ))}
    </main>
  );
}
