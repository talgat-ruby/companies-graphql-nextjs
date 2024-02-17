import client from "@/client";
import { graphql } from "@/gql";

const CompanyQuery = graphql(`
  query Company($id: Int!) {
    companies_by_pk(id: $id) {
      id
      name
      ceo
      products {
        name
      }
    }
  }
`);

export function getCompany(id: number) {
  return client.query(CompanyQuery, { id });
}
