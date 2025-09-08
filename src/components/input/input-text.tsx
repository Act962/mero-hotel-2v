import React, { ComponentProps, ReactNode } from "react";

interface InputTextProps extends ComponentProps<"input"> {
  error?: ReactNode;
}

export default function InputText({ error, ...props }: InputTextProps) {
  return (
    <div>
      <input
        {...props}
        className="h-14 bg-gray-200 px-3 flex items-center gap-1 w-full"
      />
    </div>
  );
}
