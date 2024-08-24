import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const CloseHourSelect = ({onChange, horario}: {onChange: any, horario: string}) => {
  return (
    <Select onValueChange={onChange} value={horario}>
      <SelectTrigger className="bg-neutral-900 p-5">
        <SelectValue placeholder="Selecione um horário de fechamento"/>
      </SelectTrigger>
      <SelectContent className="text-center bg-neutral-950">
        <SelectGroup>
          <SelectLabel>Horários de Fechamento</SelectLabel>
          <SelectItem value="16:00h" >16h</SelectItem>
          <SelectItem value="17:00h">17h</SelectItem>
          <SelectItem value="18:00h">18h</SelectItem>
          <SelectItem value="19:00h">19h</SelectItem>
          <SelectItem value="20:00h">20h</SelectItem>
          <SelectItem value="21:00h">21h</SelectItem>
          <SelectItem value="22:00h">22h</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CloseHourSelect;
