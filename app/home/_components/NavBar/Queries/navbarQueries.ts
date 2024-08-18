import { gql } from "@apollo/client";

const getBarbershopStatus = gql`
  query Query($barbershopInfoId: String!) {
    barbershopInfo(id: $barbershopInfoId) {
      informacoes {
        status
      }
    }
  } 
`;

const updateStatusOfBarbershop = gql`
  mutation Mutation($statusData: StatusInput!) {
    updateStatusBarbershop(statusData: $statusData)
  }
`;

const updateStatusOfBarber = gql`
  mutation Mutation($statusData: StatusInput!) {
    updateStatusBarber(statusData: $statusData)
  }
`;