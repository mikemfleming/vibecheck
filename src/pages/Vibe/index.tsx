import {
    useParams
  } from "react-router-dom";

export default function Vibe() {
      // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  // @ts-ignore
  let { vibename } = useParams();

  return (
    <div>
      <h3>vibename: {vibename}</h3>
    </div>
  );
}
