'use client'
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { getLocations } from "@/services/api";
import { Locations } from "@/types/locations";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import Astronomy from "@/components/layouts/astronomy/Astronomy";
import Timezone from "@/components/layouts/timezone/Timezone";
import Weather from "@/components/layouts/weather/Weather";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("london");
  const { data: locations } = useFetch<Locations>(getLocations);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="">
        <div className="dropList">
          <Dropdown
            locations={locations || []}
            selected={selectedLocation}
            onChange={(location) => setSelectedLocation(location)}
          />
        </div>
        <Timezone location={selectedLocation} />
        <Weather location={selectedLocation} />
        <Astronomy location={selectedLocation} />
      </main>
    </div>
  );
}
