import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { CommandList } from "./CommandList";

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <h1>Commands</h1>
      <CommandList initialCommandItems={data.commands} />
    </>
  );
}
