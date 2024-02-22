import client from "@/client";
import { graphql } from "@/gql";

const CompaniesQuery = graphql(`
  query Companies {
    companies {
      id
      name
      ceo
      founded_year
      type
      created_at
      updated_at
    }
  }
`);

export function getCompanies() {
  return client.query(CompaniesQuery, {});
}
