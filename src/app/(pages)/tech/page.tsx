import Image from "next/image";

import techgyan from "@/app/assets/data/techgyan.json"

export default function Tech() {
  return (
    <>
      <div className="justify-items-center min-h-screen pb-20 gap-8 sm:p-20">
          <h1>Techology Gyan!!</h1>
          {techgyan[0].informations.map((item, index) => (
              <p className="gap-16" key={index}>{item}</p>
          ))}
      </div>
      </>
  );
}
