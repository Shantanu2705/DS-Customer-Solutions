import { TourPackage } from "@/types";

export const tours: TourPackage[] = [
  {
    id: "tour-1",
    slug: "darjeeling",
    title: "DARJEELING TOUR PACKAGE",
    duration: "2 Nights / 3 Days",
    route: "NJP to NJP – Private Car",
    minimumPax: 8,
    price: 3499,
    packageType: "A to Z Package Included",
    inclusions: [
      "Hotel Accommodation",
      "Private Car",
      "Parking Charges",
      "Food",
      "Local Sightseeing",
      "NJP Pickup & Drop"
    ],
    importantNote: "Minimum 8 Pax required to avail this package.",
    image: "/darjeeling.jpg"
  },
  {
    id: "tour-2",
    slug: "kalimpong-lava-lolaygaon",
    title: "KALIMPONG – LAVA – LOLAYGAON TOUR",
    duration: "2 Nights / 3 Days",
    route: "NJP to NJP – Private Car",
    minimumPax: 8,
    price: 3499,
    packageType: "ALL INCLUSIVE PACKAGE",
    inclusions: [
      "Hotel Accommodation",
      "Private Car",
      "Food",
      "Parking Charges",
      "Local Sightseeing",
      "NJP Pickup & Drop"
    ],
    importantNote: "Minimum 8 Pax required to avail this special package.",
    image: "/img1.jpeg"
  },
  {
    id: "tour-3",
    slug: "sikkim",
    title: "SIKKIM TOUR PACKAGE",
    duration: "6 Nights / 7 Days",
    route: "NJP to NJP",
    minimumPax: 8,
    price: 11999,
    packageType: "ALL INCLUSIVE PACKAGE",
    inclusions: [
      "Hotel Accommodation",
      "Private Car",
      "All Local Sightseeing",
      "Parking Charges",
      "Food Included"
    ],
    marketingLine: "Explore Sikkim • Create Beautiful Memories",
    image: "/img2.jpeg"
  },
  {
    id: "tour-4",
    slug: "goa",
    title: "GOA DHAMAKA OFFER",
    duration: "6 Nights / 7 Days",
    route: "Available on request.",
    minimumPax: 8,
    price: 11999,
    packageType: "Special Offer",
    inclusions: [
      "Hotel Accommodation",
      "Private Car",
      "Local Sightseeing",
      "Food Included"
    ],
    marketingLine: "Limited Slots Available! Book Your Group Now.",
    image: "/goa.jpg"
  },
  {
    id: "tour-5",
    slug: "kashmir",
    title: "KASHMIR TOUR PACKAGE",
    duration: "5 Nights / 6 Days",
    route: "Available on request.",
    minimumPax: 8,
    price: 9999,
    packageType: "A to Z Package Included",
    inclusions: [
      "Hotel Accommodation",
      "Private Car",
      "Local Sightseeing",
      "Food Included",
      "Parking Charges"
    ],
    marketingLine: "Explore Kashmir • Create Beautiful Memories",
    image: "/img3.jpeg"
  }
];
