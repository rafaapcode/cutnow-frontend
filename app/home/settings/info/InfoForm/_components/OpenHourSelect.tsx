import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const OpenHourSelect = ({onChange}: {onChange: any}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="bg-neutral-900 p-5">
        <SelectValue placeholder="Selecione um horário de abertura"/>
      </SelectTrigger>
      <SelectContent className="text-center bg-neutral-950">
        <SelectGroup>
          <SelectLabel>Horários de Abertura</SelectLabel>
          <SelectItem value="07:00:00" >07h</SelectItem>
          <SelectItem value="08:00:00">08h</SelectItem>
          <SelectItem value="09:00:00">09h</SelectItem>
          <SelectItem value="10:00:00">10h</SelectItem>
          <SelectItem value="11:00:00">11h</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OpenHourSelect;
