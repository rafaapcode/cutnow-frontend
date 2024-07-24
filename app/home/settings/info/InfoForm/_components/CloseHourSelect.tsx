import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const CloseHourSelect = ({onChange}: {onChange: any}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="bg-neutral-900 p-5">
        <SelectValue placeholder="Selecione um horário de fechamento"/>
      </SelectTrigger>
      <SelectContent className="text-center bg-neutral-950">
        <SelectGroup>
          <SelectLabel>Horários de Fechamento</SelectLabel>
          <SelectItem value="16:00:00" >16h</SelectItem>
          <SelectItem value="17:00:00">17h</SelectItem>
          <SelectItem value="18:00:00">18h</SelectItem>
          <SelectItem value="19:00:00">19h</SelectItem>
          <SelectItem value="20:00:00">20h</SelectItem>
          <SelectItem value="21:00:00">21h</SelectItem>
          <SelectItem value="22:00:00">22h</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CloseHourSelect;
