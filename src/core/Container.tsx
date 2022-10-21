import classes from "../core/Container.module.css";


type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Container: React.FC<Props> = ({ children }: Props) => {
  return <>
  <main className={classes.container}>
  {children}
  </main>
  </>;
};

export default Container;
