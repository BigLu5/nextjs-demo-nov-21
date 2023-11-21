import React from "react";

type petParam = { params: { pets: string } };

export default function Page({ params }: petParam) {
  return <div>This is a dynamic route parameter: {params.pets}</div>;
}
