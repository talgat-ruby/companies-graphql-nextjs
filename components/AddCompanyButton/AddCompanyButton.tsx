"use client";

import { useRouter } from "next/navigation";

function AddCompanyButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/new")}>
      Add new company
    </button>
  );
}

export default AddCompanyButton;
