import { gql } from "@apollo/client";

export const allRequest = gql`
query AllRequests($barbeiroId: String!) {
  allRequests(barbeiroId: $barbeiroId) {
    barbeiro_id
    barbearia_id
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
  mutation CreateNewSchedule($newSchedule: CreateSchedule!) {
  createNewSchedule(newSchedule: $newSchedule)
}
`;

export const deleteSchedule = gql`
  mutation Mutation($deleteBarberId: String!) {
    deleteBarber(id: $deleteBarberId)
  }
`;