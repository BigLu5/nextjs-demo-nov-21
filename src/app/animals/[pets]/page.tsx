import React from "react";
import Link from "next/link";

type petParam = { params: { pets: string } };

export default function Page({ params }: petParam) {
  return (
    <div>
      <h2>This is a dynamic route parameter: {params.pets}</h2>
      <Link href="/animals">{`<-- Go back`}</Link>
    </div>
  );
}
