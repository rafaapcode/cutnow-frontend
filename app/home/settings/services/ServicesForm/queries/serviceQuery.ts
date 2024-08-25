import { gql } from "@apollo/client";

export const serviceUpdateQuery = gql`
  mutation Mutation($serviceData: ServicosUpdate!) {
    updateServices(serviceData: $serviceData)
  }
`;

export const getAllServices = gql`
  query Query($barbershopServicesId: String!) {
    barbershopServices(id: $barbershopServicesId) {
      nome: nomeService
      preco
      tempo: tempoMedio
    }
  }
`;
