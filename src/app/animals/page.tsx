import Link from "next/link";
import React from "react";

type petSearchQuery = {
  sortBy: string;
};

type petsType = {
  name: string;
  id: number;
};

let pets: petsType[] = [
  {
    name: "Darcy",
    id: 0,
  },
  {
    name: "Buddy",
    id: 1,
  },
  {
    name: "Zelda",
    id: 2,
  },
  {
    name: "Tess",
    id: 3,
  },
  {
    name: "Nanuk",
    id: 4,
  },
  {
    name: "Rover",
    id: 5,
  },
];

//next js 'exposes' the search Params to us (search Params being the ?query=something in URLs). We're deconstructing that and then typing it.
export default function Page({
  searchParams,
}: {
  searchParams: petSearchQuery;
}) {
  // this compares each object in our pets array. If object a < object b, it will swap them in the array.
  function comparePets(a: petsType, b: petsType) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  // making a copy of the pets array so we don't mutate it. (if we just use the pets, it makes it impossible to 'undo' the sorting)
  let sortedPets = [...pets];

  if (searchParams.sortBy == "asc") {
    pets.sort(comparePets);
  } else if (searchParams.sortBy == "desc") {
    pets.sort(comparePets).reverse();
  }

  return (
    <div>
      <h4>This is a website about animals: here are many animals!</h4>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/animals">Remove the sort</Link>
      <br />
      <br />
      <Link href="/animals?sortBy=asc">Sort by ascending</Link>
      <br />
      <br />
      <Link href="/animals?sortBy=desc">Sort by descending</Link>
      <br />
      <br />
      <br />
      {pets.map((pet) => {
        return (
          <div key={pet.id}>
            <br />
            <Link href={`/animals/${pet.name.toLowerCase()}`}>{pet.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
