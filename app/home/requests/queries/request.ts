import { gql } from "@apollo/client";

export const allRequest = gql`
query AllRequests($barbeiroId: String!) {
  allRequests(barbeiroId: $barbeiroId) {
    barbeiro_id
    data
    avatar
    emailCliente
    id
    nomeCliente
    tipoServico
  }
}
`;

export const createSchedule = gql`
  mutation Mutation($deleteBarberId: String!) {
    deleteBarber(id: $deleteBarberId)
  }
`;

export const deleteSchedule = gql`
  mutation Mutation($deleteBarberId: String!) {
    deleteBarber(id: $deleteBarberId)
  }
`;