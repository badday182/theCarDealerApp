'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  return (
    <div className="min-h-screen px-2 flex flex-col justify-center">
      <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Vehicle Filter
        </h1>

        <div className="space-y-4">
          <div>
            <label 
              htmlFor="make" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vehicle Make
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a make</option>
            </select>
          </div>

          <div>
            <label 
              htmlFor="year" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Model Year
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a year</option>
            </select>
          </div>

          <div className="pt-4">
            <Link
              href={'https://www.google.com.ua/imghp?hl=ru&tab=ri&ogbl'}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'`}            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
