import { useSelector } from "react-redux";

export default function Home() {
  console.log(useSelector((store) => console.log(store)))
  return (
    <>Hello World</>
  );
}
