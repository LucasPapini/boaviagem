import * as C from "./styles";

type CardProps = {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <C.CardMain>
      <C.CardBody>
        {children}
      </C.CardBody>
    </C.CardMain>
  );
}

export default Card;
