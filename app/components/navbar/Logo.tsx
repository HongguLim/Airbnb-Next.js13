"use client";

import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
}
