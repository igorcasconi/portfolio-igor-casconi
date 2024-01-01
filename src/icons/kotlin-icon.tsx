import * as React from "react";
import { SVGProps } from "react";

const KotlinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#0d91d6" d="m24 6-6.01 6.35-6.02 6.34L6 25V6z" />
    <path
      fill="#f88909"
      d="M24 6h-.04l-5.99 6.33-6.01 6.35L6 24.97V42l8.69-8.69 6.18-6.18 6.19-6.19 6.19-6.19L42 6z"
    />
    <path fill="#c757bc" d="M14.69 33.31 6 42V25.09z" />
    <path fill="#d3638f" d="m20.87 27.13-6.18 6.18L6 25.09V25l5.97-6.31z" />
    <path fill="#e07063" d="m27.06 20.94-6.19 6.19-8.9-8.44 6.02-6.34z" />
    <path fill="#ec7d36" d="m33.25 14.75-6.19 6.19-9.07-8.59L24 6z" />
    <path fill="#f88909" d="m42 6-8.75 8.75L24 6z" />
    <path fill="#0095d5" d="m11.51 19.15-3.52 3.73L6 21v-7.06z" />
    <path fill="#2b88da" d="m15.03 15.42-3.52 3.73L6 13.94V6.87z" />
    <path fill="#557bde" d="m18.56 11.7-3.53 3.72L6 6.87V6h6.53z" />
    <path fill="#806ee3" d="m22.08 7.97-3.52 3.73L12.53 6H24z" />
    <path fill="#0095d5" d="M23 25 6 42h34z" />
    <path fill="#2b88da" d="M25.68 42h-8.16l-5.76-5.75 4.08-4.08z" />
    <path fill="#557bde" d="M33.86 42h-8.18l-9.84-9.83 4.08-4.08z" />
    <path fill="#806ee3" d="M42 42h-8.14L19.92 28.09 24 24z" />
  </svg>
);

export default KotlinIcon;
