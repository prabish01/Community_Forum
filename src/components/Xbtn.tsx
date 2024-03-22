"use client";

import React from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const Xbtn = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} aria-label="close modal" variant="subtle" className="rounded-lg h-6 w-6 p-0">
      <X className="h-4 w-4 " />
    </Button>
  );
};

export default Xbtn;
