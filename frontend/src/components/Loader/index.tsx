import * as L from "./styles";

const Loader = ({ message }) => {
  return (
    <>
      <L.WrapperBg>
        <p>Aguarde</p>
        <p>{message}</p>
        <L.RotatingCircle />
      </L.WrapperBg>
    </>
  )
}

export default Loader
