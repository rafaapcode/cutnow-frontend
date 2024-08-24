import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const OpenHourSelect = ({onChange, horario}: {onChange: any, horario: string}) => {
  return (
    <Select onValueChange={onChange} value={horario}>
      <SelectTrigger className="bg-neutral-900 p-5">
        <SelectValue placeholder="Selecione um horário de abertura"/>
      </SelectTrigger>
      <SelectContent className="text-center bg-neutral-950">
        <SelectGroup>
          <SelectLabel>Horários de Abertura</SelectLabel>
          <SelectItem value="07:00h">07h</SelectItem>
          <SelectItem value="08:00h">08h</SelectItem>
          <SelectItem value="09:00h">09h</SelectItem>
          <SelectItem value="10:00h">10h</SelectItem>
          <SelectItem value="11:00h">11h</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OpenHourSelect;
