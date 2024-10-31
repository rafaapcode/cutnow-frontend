import { gql } from "@apollo/client";

export const allScheduleOfBarber = gql`
  query AllSchedulesOfBarber($barbeiroId: String!) {
    allSchedulesOfBarber(barbeiroId: $barbeiroId) {
      data
      nomeBarbeiro
      nomeCliente
      tipoServico
    }
  }
`;

export const allScheduleOfBarbershop = gql`
  query AllSchedulesOfBarbershop($barbeariaId: String!) {
    allSchedulesOfBarbershop(barbeariaId: $barbeariaId) {
      data
      nomeBarbeiro
      nomeCliente
      tipoServico
    }
  }
`;
