import * as C from "./styles";

type CardProps = {
  children: React.ReactNode;
}

const CardList = ({ children }: CardProps) => {
  return (
    <C.CardList>
      <C.CardBody>
        {children}
      </C.CardBody>
    </C.CardList>
  );
}

export default CardList;
