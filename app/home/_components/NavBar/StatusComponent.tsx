import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StatusComponent = ({setStatus}: {setStatus: (e: any) => void}) => {
  return (
    <Select onValueChange={setStatus}>
      <SelectTrigger className="w-full" >
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="aberto"><span className="text-secondary-green">Aberto</span></SelectItem>
          <SelectItem value="fechado"><span className="text-red-400">Fechado</span></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusComponent;
