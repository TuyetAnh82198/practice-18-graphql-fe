import { useQuery } from "@apollo/client";

import { getAllPets, getPet } from "./queries";

const Component = () => {
  const { loading, error, data } = useQuery(getPet);
  console.log(data);
  return <div></div>;
};

export default Component;
