const fs = require('fs');
const path = require('path');

const updateTours = () => {
  const file = path.join(__dirname, 'src/data/tours.ts');
  let content = fs.readFileSync(file, 'utf8');

  // Mapping tour slugs to image files
  const imageMapping = {
    'darjeeling': '/mountain_tour.jpg',
    'kalimpong-lava-lolaygaon': '/mountain_tour.jpg',
    'sikkim': '/mountain_tour.jpg',
    'goa': '/beach_tour.jpg',
    'kashmir': '/mountain_tour.jpg',
    'dooars-group-tour': '/forest_safari.jpg',
    'shimla-manali': '/mountain_tour.jpg',
    'kashmir-paradise': '/mountain_tour.jpg',
    'kerala-gods-own-country': '/beach_tour.jpg',
    'goa-beach-holiday': '/beach_tour.jpg',
    'rajasthan-heritage': '/heritage_tour.jpg',
    'golden-triangle': '/heritage_tour.jpg',
    'andaman-island': '/beach_tour.jpg',
    'himachal-explorer': '/mountain_tour.jpg',
    'uttarakhand-nature': '/forest_safari.jpg',
    'meghalaya-shillong': '/mountain_tour.jpg',
    'jaisalmer-desert': '/desert_safari.jpg',
    'varanasi-spiritual': '/spiritual_tour.jpg',
    'ooty-mysore': '/mountain_tour.jpg',
    'arunachal-pradesh': '/mountain_tour.jpg'
  };

  for (const [slug, img] of Object.entries(imageMapping)) {
    const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*)"[^"]+"`, 'g');
    content = content.replace(regex, `$1"${img}"`);
  }
  
  fs.writeFileSync(file, content);
};

const updateFleet = () => {
  const file = path.join(__dirname, 'src/data/fleet.ts');
  let content = fs.readFileSync(file, 'utf8');
  
  const imageMapping = {
    'veh-1': '/sedan_car.jpg',
    'veh-2': '/sedan_car.jpg',
    'veh-3': '/suv_car.jpg',
    'veh-4': '/suv_car.jpg',
    'veh-5': '/suv_car.jpg',
    'veh-6': '/suv_car.jpg',
    'veh-7': '/suv_car.jpg',
    'veh-8': '/van_car.jpg'
  };

  for (const [id, img] of Object.entries(imageMapping)) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]+"`, 'g');
    content = content.replace(regex, `$1"${img}"`);
  }
  
  fs.writeFileSync(file, content);
};

const updateDestinations = () => {
  const file = path.join(__dirname, 'src/data/destinations.ts');
  let content = fs.readFileSync(file, 'utf8');
  
  const imageMapping = {
    'dest-1': '/mountain_tour.jpg', // Darjeeling
    'dest-2': '/mountain_tour.jpg', // Kalimpong
    'dest-3': '/mountain_tour.jpg', // Lava
    'dest-4': '/mountain_tour.jpg', // Lolaygaon
    'dest-5': '/mountain_tour.jpg', // Sikkim
    'dest-6': '/mountain_tour.jpg', // Kashmir
    'dest-7': '/beach_tour.jpg'     // Goa
  };

  for (const [id, img] of Object.entries(imageMapping)) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]+"`, 'g');
    content = content.replace(regex, `$1"${img}"`);
  }
  
  fs.writeFileSync(file, content);
};

updateTours();
updateFleet();
updateDestinations();
console.log('Update complete');
