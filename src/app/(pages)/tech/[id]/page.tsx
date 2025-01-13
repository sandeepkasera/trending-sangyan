"use client"
import Image from "next/image";
import { useParams } from "next/navigation"; // Use 'next/navigation' to get route params in app directory
import techgyan from "@/app/assets/data/techgyan.json"

export default function TechGyan() {
    const params = useParams(); // Get the dynamic parameters from the URL
    const id = Array.isArray(params.id) ? parseInt(params.id[0], 10) : parseInt(params.id, 10);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Tech Gyan!!</h1>
            {techgyan[id].informations.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}
