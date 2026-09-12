import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Darjeeling",
    slug: "darjeeling",
    image: "/tour_darjeeling.jpg",
    shortDescription: "The Queen of the Hills, famous for its tea gardens, Toy Train, and stunning views of Kangchenjunga.",
    description: "Darjeeling is one of the most beautiful hill stations in India, located in West Bengal..."
  },
  {
    id: "dest-2",
    name: "Kalimpong",
    slug: "kalimpong",
    image: "/tour_kalimpong.jpg",
    shortDescription: "A serene hill station known for its orchids, nurseries, and peaceful environment.",
    description: "Kalimpong is a beautiful hill station in the Indian state of West Bengal..."
  },
  {
    id: "dest-3",
    name: "Lava",
    slug: "lava",
    image: "/tour_kalimpong.jpg", // fallback
    shortDescription: "A small hamlet situated 34 kilometers east of the Kalimpong town.",
    description: "Lava is surrounded by virgin pine forests and often hidden in mists and clouds..."
  },
  {
    id: "dest-4",
    name: "Lolaygaon",
    slug: "lolaygaon",
    image: "/tour_kalimpong.jpg", // fallback
    shortDescription: "A beautiful Lepcha village known for its heritage forest and canopy walk.",
    description: "Located at an altitude of 1,675m, Lolaygaon offers spectacular views of the Himalayan range..."
  },
  {
    id: "dest-5",
    name: "Sikkim",
    slug: "sikkim",
    image: "/tour_sikkim.jpg",
    shortDescription: "A land of dramatic contours, pristine lakes, and majestic Himalayan peaks.",
    description: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal..."
  },
  {
    id: "dest-6",
    name: "Kashmir",
    slug: "kashmir",
    image: "/Kashmir-Tour.png",
    shortDescription: "Paradise on Earth, famous for its Dal Lake, Shikara rides, and snow-capped mountains.",
    description: "Jammu and Kashmir is a region administered by India as a union territory..."
  },
  {
    id: "dest-7",
    name: "Goa",
    slug: "goa",
    image: "/tour_goa.jpg",
    shortDescription: "India's favorite beach destination known for its beautiful coastline and vibrant culture.",
    description: "Goa is a state in western India with coastlines stretching along the Arabian Sea..."
  }
];
