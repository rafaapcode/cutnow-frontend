import { gql } from "@apollo/client";

export const allBarbersQuery = gql`
  query AllBarbers($barbershopId: String!) {
    allBarbers(id: $barbershopId) {
      nome
      informacoes {
        foto
      }
      id
    }
  }
`;
