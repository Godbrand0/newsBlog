import React from "react";
import { useEffect, useState } from "react";

export default function PostSkeleton() {
  return (
    <div className="animate-pulse p-4 bg-gray-100 rounded shadow space-y-4 w-[700px] mt-5">
      <div className="w-full rounded bg-gray-200 h-48 mb-4"></div>
      <div className="w-full rounded bg-gray-200 h-48 mb-4"></div>
      <div className="w-full rounded bg-gray-200 h-48 mb-4"></div>
      <div className="w-full rounded bg-gray-200 h-48 mb-4"></div>
    </div>
  );
}
