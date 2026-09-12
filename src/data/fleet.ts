import { Vehicle } from "@/types"

export const fleet: Vehicle[] = [
  {
    id: "veh-1",
    name: "Swift Dzire",
    type: "Sedan",
    capacity: 4,
    features: ["AC", "Comfortable Seating", "Good for Small Families", "Music System"],
    image: "/sedan_car.jpg"
  },
  {
    id: "veh-2",
    name: "WagonR",
    type: "Hatchback",
    capacity: 4,
    features: ["AC", "Compact", "City Tours", "Budget Friendly"],
    image: "/sedan_car.jpg" // Using dzire as fallback for now
  },
  {
    id: "veh-3",
    name: "Bolero",
    type: "SUV",
    capacity: 7,
    features: ["Non-AC / AC", "High Ground Clearance", "Good for Hilly Terrain", "Spacious"],
    image: "/suv_car.jpg"
  },
  {
    id: "veh-4",
    name: "Sumo",
    type: "SUV",
    capacity: 8,
    features: ["Non-AC", "Large Groups", "Hill Stations", "Economical"],
    image: "/suv_car.jpg" // Using bolero as fallback
  },
  {
    id: "veh-5",
    name: "Innova",
    type: "Premium SUV",
    capacity: 6,
    features: ["AC", "Premium Comfort", "Long Journeys", "Captain Seats"],
    image: "/suv_car.jpg"
  },
  {
    id: "veh-6",
    name: "Innova Crysta",
    type: "Luxury SUV",
    capacity: 6,
    features: ["AC", "Luxury Comfort", "Corporate Travel", "Extra Legroom"],
    image: "/suv_car.jpg" // Using innova as fallback
  },
  {
    id: "veh-7",
    name: "Ertiga",
    type: "MUV",
    capacity: 6,
    features: ["AC", "Family Travel", "Spacious Boot", "Comfortable"],
    image: "/suv_car.jpg" // Using innova as fallback
  },
  {
    id: "veh-8",
    name: "Tempo Traveller",
    type: "Van",
    capacity: 12,
    features: ["AC", "Large Groups", "Comfortable Seating", "Spacious"],
    image: "/van_car.jpg" // Fallback image
  }
];
