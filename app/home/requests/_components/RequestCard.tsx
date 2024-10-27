import { ApolloQueryResult, OperationVariables, useMutation } from "@apollo/client";
import Image from "next/image";
import toast from "react-hot-toast";
import { createSchedule } from "../queries/request";

type IRequestCardProp = {
  barbeiro_id: string;
  data: string;
  avatar: string;
  emailCliente: string;
  id: string;
  nomeCliente: string;
  tipoServico: string;
  barbearia_id: string;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
}

const RequestCard = ({avatar, barbeiro_id, data, emailCliente, id, nomeCliente, tipoServico, barbearia_id, refetch }: IRequestCardProp) => {
  const hourDate = data.split("T");
  const hour = hourDate[1];
  const date = hourDate[0];
  const [createNewSchedule] = useMutation(createSchedule)

  const handleClickAcceptRequest = async () => {
    try {
      const {data: result} = await createNewSchedule({
        variables: {
          barbeiroId: barbeiro_id,
          newSchedule: {
            tipoServico,
            requestId: id,
            nomeCliente,
            data,
            emailCliente,
            barbearia_id,
            barbeiro_id
          }
        }
      });
      // console.log("Solicitação aceita", res.data);
      if(!result.createNewSchedule) {
        toast.error("Ocorreu um erro ao confirmar a SOLICITAÇÃO , entre em contato do o suporte.");
      } else {
        toast.success("Agendamento criado com sucesso e SOLICITAÇÃO confirmada !");
        refetch();
      }

    } catch (error) {
      toast.error("Erro ao criar o agendamento");
    }
  };

  return (
    <div className="w-[283px] h-[283px] md:w-[320px]  md:h-[320px] xl:w-[350px] xl:h-[350px] rounded-lg relative mx-auto">
      <Image
        alt="client image"
        fill
        src={avatar}
        className="object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between p-2 gap-y-2 absolute w-full bottom-0 rounded-b-lg h-[170px] bg-black/55 backdrop-blur-sm">
        <div className="bg-terciary-green p-2 w-fit rounded-md text-black font-semibold tracking-tight text-sm">
          <p>{tipoServico}</p>
        </div>
        <div className="flex flex-col gap-y-2 font-bold">
          <p className="text-sm">{nomeCliente}</p>
          <p className="text-sm">{emailCliente}</p>
          <p className="text-xs">{date}  as  {hour}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-neutral-500 text-sm text-white py-1 rounded-md font-bold px-2 text hover:bg-neutral-700 transition-all duration-150">RECUSAR</button>
          <button onClick={handleClickAcceptRequest} className="bg-secondary-green text-sm text-black py-1 rounded-md font-bold px-2 text hover:bg-terciary-green transition-all duration-150">ACEITAR</button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
