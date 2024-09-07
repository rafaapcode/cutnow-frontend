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

export const getLogoImages = gql`
  query Barber($id: String!) {
    barbershopInfo(id: $id) {
      informacoes {
        logo
      }
    }
  }
`;


export const getBannerImages = gql`
  query Barber($id: String!) {
    barbershopInfo(id: $id) {
      informacoes {
        fotoBanner
      }
    }
  }
`;
