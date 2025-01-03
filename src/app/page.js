'use client';
import { getMakesUrl } from "../utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [makes, setMakes] = useState([])
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedMakeID, setSelectedMakeID] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => (currentYear - i).toString()
  )

  useEffect(() => {
    const generateStaticParams = async () => {
      try {     
        const makesResponse = await fetch(getMakesUrl())
        const makesData = await makesResponse.json()
        setMakes(makesData.Results)
        const currentYear = new Date().getFullYear()
        const years = Array.from(
          { length: currentYear - 2015 + 1 },
          (_, i) => (currentYear - i).toString()
        )
    
        const paths = makesData.Results.flatMap(make => 
          years.map(year => ({
            makeId: make.MakeId.toString(),
            year: year
          }))
        )
    
        return paths
      } catch (error) {
        console.error('Error generating static params:', error)
        return []
      } finally {
            setIsLoading(false)
          }
    }

    generateStaticParams()
  }, [])

  const isNextEnabled = selectedMake && selectedYear

  const handleMakeChange = (e) => {
    const makeName = e.target.value
    setSelectedMake(makeName)
    
    // Find and set MakeId
    const selectedMake = makes.find(make => make.MakeName === makeName)
    setSelectedMakeID(selectedMake ? selectedMake.MakeId.toString() : '')
  }
  return (
    <div className="min-h-screen flex flex-col justify-center">
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
            id="make"
            value={selectedMake}
            onChange={handleMakeChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled={isLoading}
          >
            <option value="">Select a make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeName}>
                {make.MakeName}
              </option>
            ))}
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
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4">
        <Link
              href={isNextEnabled ? `/result/${selectedMakeID}/${selectedYear}` : '#'}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                ${isNextEnabled 
                  ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  : 'bg-gray-300 cursor-not-allowed'}`}
              onClick={(e) => !isNextEnabled && e.preventDefault()}
            >
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
