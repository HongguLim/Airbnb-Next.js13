"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import Menuitem from "./Menuitem";
import useRegisterModal from "../hooks/useRegisterModal";

export default function UserMenu() {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
          hidden 
          md:block 
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-neural-100 
          transition 
          cursor-pointer"
        >
          당신의 공간을 에어비앤비하세요
        </div>
        <div
          onClick={toggleIsOpen}
          className="
        p-4
        md: py-1
        md: px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover: shadow-md
        transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
        absolute
        reounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm"
        >
          <div
            className="
flex
flex-col
cursor-pointer"
          >
            <>
              <Menuitem onClick={() => {}} label="로그인" />
              <Menuitem onClick={registerModal.onOpen} label="회원가입" />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
