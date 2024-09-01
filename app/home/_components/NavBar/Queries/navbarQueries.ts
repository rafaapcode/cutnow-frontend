import { gql } from "@apollo/client";

export const getBarbershopStatus = gql`
  query Query($id: String!) {
    barbershopInfo(id: $id) {
      informacoes {
        status
      }
    }
  }
`;

export const getBarberStatus = gql`
  query Barber($id: String!) {
    barber(id: $id) {
      status
    }
  }
`;

export const updateStatusOfBarbershop = gql`
  mutation Mutation($statusData: StatusInput!) {
    updateStatusBarbershop(statusData: $statusData)
  }
`;

export const updateStatusOfBarber = gql`
  mutation Mutation($statusData: StatusInput!) {
    updateStatusBarber(statusData: $statusData)
  }
`;

export const getBarbershopLogo = gql`
  query Query($id: String!) {
    barbershopInfo(id: $id) {
      informacoes {
        logo
      }
    }
  }
`;

export const getBarberFoto = gql`
  query Barber($id: String!) {
    barber(id: $id) {
      informacoes {
        foto
      }
    }
  }
`;
