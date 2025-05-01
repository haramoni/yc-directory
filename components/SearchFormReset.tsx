"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function SearchFormReset() {
  function handleReset() {
    const form = document.querySelector(
      "form[name='search-form']"
    ) as HTMLFormElement;

    if (form) form.reset();
  }

  return (
    <button type="reset" onClick={handleReset}>
      <Link
        href="/"
        className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white"
      >
        <X className="size-5" />
      </Link>
    </button>
  );
}
