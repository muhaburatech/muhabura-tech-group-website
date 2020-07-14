import React from "react";
import { Link } from "gatsby";

export function PrimaryButton({ text, to }) {
  return (
    <Link
      className="px-4 py-3 bg-gray-900 text-gray-200 text-md font-medium  rounded hover:bg-gray-800"
      to={to}
    >
      {text}
    </Link>
  );
}

export function SecondaryButton({ text, to }) {
  return (
    <Link
      className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-md font-medium  rounded hover:bg-gray-400"
      to={to}
    >
      {text}
    </Link>
  );
}
