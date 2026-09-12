const fs = require('fs');
const path = require('path');

const updateTours = () => {
  const file = path.join(__dirname, 'src/data/tours.ts');
  let content = fs.readFileSync(file, 'utf8');

  const imageMapping = {
    'darjeeling': '/tour_darjeeling.jpg',
    'kalimpong-lava-lolaygaon': '/tour_kalimpong.jpg',
    'sikkim': '/tour_sikkim.jpg',
    'goa': '/tour_goa.jpg',
    'kashmir': '/Kashmir-Tour.png',
    'dooars-group-tour': '/Dooars-Group-Tour.png',
    'shimla-manali': '/Shimla-Manali-Tour-Package.png',
    'kashmir-paradise': '/Kashmir-Paradise-Tour.png',
    'kerala-gods-own-country': '/Kerala-Gods-Own-Country-Tour.png',
    'goa-beach-holiday': '/Goa-Beach-Holiday-Package.png',
    'rajasthan-heritage': '/Rajasthan-Heritage-Tour.png',
    'golden-triangle': '/The-Golden-Triangle-Tour.png',
    'andaman-island': '/Andaman-Island-Escape.png',
    'himachal-explorer': '/Himachal-Explorer-Tour.png',
    'uttarakhand-nature': '/Uttarakhand-Nature-Tour.png',
    'meghalaya-shillong': '/Meghalaya-&-Shillong-Tour.png',
    'jaisalmer-desert': '/Jaisalmer-Desert-Safari-Tour.png',
    'varanasi-spiritual': '/Varanasi-Spiritual-Tour.png',
    'ooty-mysore': '/Ooty-Mysore-Holiday-Package.png',
    'arunachal-pradesh': '/Arunachal-Pradesh-Adventure-Tour.png'
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
    'veh-1': '/swift-dzire.png',
    'veh-2': '/Suzuki-WagonR.png',
    'veh-3': '/Bolero-SUV.png',
    'veh-4': '/Tata-Sumo-Gold.png',
    'veh-5': '/Toyota-Innova.png',
    'veh-6': '/Toyota-Innova-Crysta.png',
    'veh-7': '/Maruti-Suzuki-Ertiga.png',
    'veh-8': '/Tempo-Traveller.png'
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
    'dest-1': '/tour_darjeeling.jpg', // Darjeeling
    'dest-2': '/tour_kalimpong.jpg', // Kalimpong
    'dest-3': '/tour_kalimpong.jpg', // Lava
    'dest-4': '/tour_kalimpong.jpg', // Lolaygaon
    'dest-5': '/tour_sikkim.jpg', // Sikkim
    'dest-6': '/Kashmir-Tour.png', // Kashmir
    'dest-7': '/tour_goa.jpg'     // Goa
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
