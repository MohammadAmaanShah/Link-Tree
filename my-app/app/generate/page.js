import { Suspense } from "react";
import Generate from "./generate";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
