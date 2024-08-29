"use client";

import "./input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
}

export default function Input({ label, type, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={label} className="text-sm mb-3 block">
        {label}
      </label>
      <input
        id={label}
        type={type}
        {...rest}
        className="peer block w-full rounded-md border border-gray-200 p-3 text-sm outline-2"
      />
    </div>
  );
}
