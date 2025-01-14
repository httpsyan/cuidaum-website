import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  color?: "white" | "black";
}

export const LoaderIcon = ({ className = "", color = "white" }: Props) => {
  return (
    <svg
      className={cn("w-8 h-8 animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />

        <path
          fill={color}
          d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"
          opacity=".1"
        />

        <path
          fill={color}
          d="M12 4a7.958 7.958 0 0 0-5.533 2.222a1 1 0 1 1-1.384-1.444A9.958 9.958 0 0 1 12 2a1 1 0 1 1 0 2Z"
        />
      </g>
    </svg>
  );
};
