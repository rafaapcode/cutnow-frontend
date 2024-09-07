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

export const createDescricao = gql`
  mutation UpdateInfoBarber($informations: BarberInfoUpdate!) {
    updateInfoBarber(informations: $informations)
  }
`;

export const getPortfolioImages = gql`
  query Barber($id: String!) {
    barber(id: $id) {
      informacoes {
        portfolio
      }
    }
  }
`;
