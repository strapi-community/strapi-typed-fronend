import type { MetaFunction } from "@remix-run/node";
import type { CollectionTypeResponse } from "../../types/types";

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Get Notes" },
    { name: "description", content: "Get notes." },
  ];
};

export const loader = async () => {
  const res = await fetch("http://localhost:1337/api/notes");
  const data = await res.json();
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>() as CollectionTypeResponse<"api::note.note">;
  console.log(data.data[0].attributes.isTrue);
  return <div>{data.data[0].attributes.content}</div>;
}
