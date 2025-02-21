"use client"
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; // Use 'next/navigation' to get route params and navigate between pages
import { useEffect, useState } from "react";
import axios from "axios";

export default function TechGyan() {
  const [techGyan, setTechGyan] = useState<any>(null); // State to store the fetched data
  const params = useParams(); // Get the dynamic parameters from the URL
  const router = useRouter(); // Router to programmatically navigate
  const id = Array.isArray(params.id) ? parseInt(params.id[0] || '0', 10) : parseInt(params.id || '0', 10);

  useEffect(() => {
    // Fetch the Tech Gyan data when the component mounts
    const fetchTechGyan = async () => {
      try {
        const response = await axios.get("/api/techgyan");
        console.log(response.data.data); // Log the data
        setTechGyan(response.data.data); // Set data to state
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchTechGyan();
  }, []);

  // Handle the loading state or if the data is not available yet
  if (!techGyan) {
    return <div>Loading...</div>; // Display loading message if data is not available yet
  }

  // Ensure the id is within the bounds of the techgyan array
  const totalPages = techGyan.length;
  const currentPage = Math.min(Math.max(id, 0), totalPages - 1); // Ensure the currentPage is valid

  // Function to navigate to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 0) {
      router.push(`/techgyan/${currentPage - 1}`);
    }
  };

  // Function to navigate to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      router.push(`/techgyan/${currentPage + 1}`);
    }
  };

  return (
    <>
      <h1 className=" grid justify-items-center mt-3">Technology Gyan!!</h1>
      <div className="grid justify-items-center min-h-screen p-8 pb-20 sm:p-20">
        {/* Display the information of the current page */}
        <h3>{techGyan[currentPage].heading}</h3>
        {techGyan[currentPage].informations.map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-between w-full mt-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </>

  );
}
