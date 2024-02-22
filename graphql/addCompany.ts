import client from "@/client";
import { graphql } from "@/gql";
import { Companies_Insert_Input, Exact } from "@/gql/graphql";

const AddCompanyMutation = graphql(`
  mutation AddCompany($company: companies_insert_input!) {
    insert_companies_one(object: $company) {
      id
      name
    }
  }
`);

export function addCompany(
  variables: Exact<{ company: Companies_Insert_Input }>,
) {
  return client.mutation(AddCompanyMutation, variables);
}
