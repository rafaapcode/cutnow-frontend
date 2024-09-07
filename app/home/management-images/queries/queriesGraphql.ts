import { gql } from "@apollo/client";

export const getBanner = gql`
  query Barber($id: String!) {
    barber(id: $id) {
      informacoes {
        banner
      }
    }
  }
`;

export const getPortfolio = gql`
  query Barber($id: String!) {
    barber(id: $id) {
      informacoes {
        portfolio
      }
    }
  }
`;
