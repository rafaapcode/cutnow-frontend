import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusComponent = ({
  setStatus,
  isAdm,
  status
}: {
  setStatus: (e: any) => void;
  isAdm: boolean;
  status: string
}) => {
  return (
    <Select onValueChange={setStatus}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={status} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {isAdm ? ( 
            <>
              <SelectItem value="aberto">
                <span className="text-secondary-green">Aberto</span>
              </SelectItem>
              <SelectItem value="fechado">
                <span className="text-red-400">Fechado</span>
              </SelectItem>
            </>
          ) : (
            <>
              <SelectItem value="atendendo">
                <span className="text-secondary-green">Atendendo</span>
              </SelectItem>
              <SelectItem value="disponível">
                <span className="text-blue-500">Disponível</span>
              </SelectItem>
              <SelectItem value="indiponível">
                <span className="text-neutral-500">Indiponível</span>
              </SelectItem>
            </>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusComponent;
