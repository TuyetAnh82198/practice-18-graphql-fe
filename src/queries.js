import { gql } from "@apollo/client";

const getAllPets = gql`
  query Query {
    pets {
      _id
      name
    }
  }
`;

const getPet = gql`
  query Query {
    pet(id: "P002") {
      _id
      name
      breed {
        petBreed
      }
    }
  }
`;

export { getAllPets, getPet };
