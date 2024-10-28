import { gql } from "@apollo/client";

export const allSchedulesBarbershop = gql`
query AllSchedulesToBarbershop($barbeariaId: String!) {
  allSchedulesOfTodayToBarbershop(barbeariaId: $barbeariaId) {
    barberAvatar
    clientAvatar
    data
    id
    nomeCliente
    tipoServico
  }
}
`;

export const allSchedulesBarber = gql`
query AllSchedulesToBarber($barbeiroId: String!) {
  allSchedulesOfTodayToBarber(barbeiroId: $barbeiroId) {
    barberAvatar
    clientAvatar
    nomeCliente
    tipoServico
    data
    id
    nomeCliente
    tipoServico
  }
}
`;
