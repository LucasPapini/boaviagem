import * as S from "./styles";

type SelectOption = {
  id: number;
  sigla: string;
  value: string;
  nomeComposto: string;
};

type SelectProps = {
  options: SelectOption[];
  value: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, value, title, onChange, ...props }: SelectProps) => {
  return (
    <S.SelectContainer>
      <p>{title}:</p>
      <S.Select
        {...props}
        onChange={onChange}
        value={value}
      >
        <option value="">---</option>
        {options && options.map((option) => (
          <option key={option?.id} value={option?.sigla} disabled={!!option.value && true}>
            {option?.sigla} - {option?.nomeComposto}
          </option>
        ))}
      </S.Select>
    </S.SelectContainer>
  );
}

export default Select;
