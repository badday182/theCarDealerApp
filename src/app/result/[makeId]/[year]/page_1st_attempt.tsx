import React from "react";

export default function ResultPage({
  params,
}) {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Results
        </h1>
        <div>
          <p className="mb-2">Make ID: {params.makeId}</p>
          <p className="mb-2">Year: {params.year}</p>
        </div>
      </div>
    </div>
  )
}