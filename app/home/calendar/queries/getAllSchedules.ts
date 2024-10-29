import { gql } from "@apollo/client";

export const allSchedulesOfBarbershop = gql`
  query AllSchedulesOfBarbershop($barbeariaId: String!) {
    allSchedulesOfBarbershop(barbeariaId: $barbeariaId) {
      data
      nomeBarbeiro
      nomeCliente
      tipoServico
    }
  }
`;

export const allSchedulesOfBarber = gql`
  query AllSchedulesOfBarber($barbeiroId: String!) {
    allSchedulesOfBarber(barbeiroId: $barbeiroId) {
      data
      nomeCliente
      tipoServico
      nomeCliente
    }
  }
`;
