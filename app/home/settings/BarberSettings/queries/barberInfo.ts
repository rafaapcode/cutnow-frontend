import { gql } from "@apollo/client";

export const getDescricao = gql`
  query Informacoes($barberId: String!) {
    barber(id: $barberId) {
      informacoes {
        descricao
      }
    }
  }
`;
