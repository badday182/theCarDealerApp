import { notFound } from "next/navigation";
import React from "react";

export default async function ResultPage({ params }) {
  
  async function getVehicleModels(makeId, year) {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }

      const data = await response.json();
      return data.Results;
    } catch (error) {
      console.error("Error fetching vehicle models:", error);
      throw error;
    }
  }

  let models = [];
  let error = false;

  try {
    models = await getVehicleModels(params.makeId, params.year);
    if (models.length === 0) {
      return notFound();
    }
  } catch {
    error = true;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="text-red-600">
            Failed to load vehicle models. Please try again later.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Vehicle Models for {params.year}
        </h1>

        <div className="grid gap-4">
          {models.map((model) => (
            <div
              key={model.Model_ID}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-medium text-gray-900">
                {model.Model_Name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
