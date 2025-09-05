import React from 'react';
import { ArrowLeft } from "lucide-react";

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <header className="bg-[#2A2A2A] shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-[#b4ff39]">
            <ArrowLeft className="h-5 w-5" />
            <span>Loading...</span>
          </div>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2A2A2A] shadow rounded-lg overflow-hidden">
          {/* Speaker Profile Skeleton */}
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between animate-pulse">
            <div className="flex-1 sm:flex sm:items-start sm:space-x-6">
              <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                <div className="w-32 h-32 bg-gray-700 rounded-lg" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="h-8 bg-gray-700 w-3/4 rounded-md" />
                <div className="h-6 bg-gray-700 w-1/2 rounded-md" />
                <div className="h-6 bg-gray-700 w-1/2 rounded-md" />
                <div className="h-10 bg-gray-700 w-full rounded-md mt-4" />
              </div>
            </div>

            <div className="flex-shrink-0 mt-6 sm:mt-4">
              <div className="w-28 h-28 bg-gray-700 rounded-lg" />
              <div className="h-4 bg-gray-700 w-3/4 rounded-md mt-2" />
            </div>
          </div>

          <div className="border-t border-gray-700">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="h-8 bg-gray-700 w-1/4 rounded-md" />
              <div className="bg-[#232323] rounded-lg p-6 space-y-4">
                <div className="h-6 bg-gray-700 w-3/4 rounded-md" />
                <div className="h-4 bg-gray-700 w-full rounded-md" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-[#2A2A2A] p-3 rounded-lg animate-pulse">
                      <div className="h-5 w-5 bg-gray-700 rounded-full" />
                      <div className="flex flex-col">
                        <div className="h-4 bg-gray-700 w-1/2 rounded-md" />
                        <div className="h-4 bg-gray-700 w-3/4 rounded-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkeletonLoader;
