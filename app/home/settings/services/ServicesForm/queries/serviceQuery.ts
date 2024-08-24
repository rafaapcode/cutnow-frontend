import { gql } from "@apollo/client";

export const serviceUpdateQuery = gql`
  mutation Mutation($serviceData: ServicosUpdate!) {
    updateServices(serviceData: $serviceData)
  }
`;
