import { gql } from "@apollo/client";

export const getStructureImages = gql`
  query Barber($id: String!) {
    barbershopInfo(id: $id) {
      informacoes {
        fotosEstruturaBarbearia
      }
    }
  }
`;
