import CloseHourSelect from "../_components/CloseHourSelect";

const CloseHourInput = ({ onChange}: {onChange: any}) => {
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
      <label htmlFor="bairro" className="text-paragraph-1 md:text-subtitle-3">
        Horario de Fechamento
      </label>
      <CloseHourSelect onChange={onChange}  />
    </div>
  );
};

export default CloseHourInput;
