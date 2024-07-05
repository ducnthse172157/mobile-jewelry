const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../../assets/users/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../../assets/users/35.jpeg'),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: '21 May, 2022',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 July, 2021',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: 'Argos in Cappadocia',
    image: require('../../assets/hotels/cp-1.jpeg'),
    location: 'Turkey, Cappadocia',
    rating: 9,
    pricePeerDay: '130$',
    type: 'HOTEL',
  },
  2: {
    id: 2,
    title: 'Sultan Cave Suites',
    image: require('../../assets/hotels/cp-2.jpeg'),
    location: 'Turkey, Cappadocia',
    rating: 9.3,
    pricePeerDay: '230$',
    type: 'HOTEL',
  },
  3: {
    id: 3,
    title: 'Villa Brunella',
    image: require('../../assets/hotels/capri-1.jpeg'),
    location: 'Italy, Capri',
    rating: 9.4,
    pricePeerDay: '280$',
    type: 'HOTEL',
  },
  4: {
    id: 4,
    title: 'Hotel La Floridiana',
    image: require('../../assets/hotels/capri-2.jpeg'),
    location: 'Italy, Capri',
    rating: 9.3,
    pricePeerDay: '190$',
    type: 'HOTEL',
  },
  5: {
    id: 5,
    title: "Le Taha'a by Pearl Resorts",
    image: require('../../assets/hotels/polynesia-1.jpeg'),
    location: 'Polynesia, Bora Bora',
    rating: 9.2,
    pricePeerDay: '250$',
    type: 'HOTEL',
  },
  6: {
    id: 6,
    title: 'Le Meridien Bora Bora',
    image: require('../../assets/hotels/polynesia-2.jpeg'),
    location: 'Polynesia, Bora Bora',
    rating: 9.4,
    pricePeerDay: '270$',
    type: 'HOTEL',
  },
  7: {
    id: 7,
    title: 'InterContinental Phuket Resort',
    image: require('../../assets/hotels/phuket-1.jpg'),
    location: 'Thailand, Phuket',
    rating: 9.2,
    pricePeerDay: '210$',
    type: 'HOTEL',
  },
  8: {
    id: 8,
    title: 'The Nai Harn',
    image: require('../../assets/hotels/phuket-2.jpeg'),
    location: 'Thailand, Phuket',
    rating: 9.4,
    pricePeerDay: '430$',
    type: 'HOTEL',
  },
  9: {
    id: 9,
    title: 'Hotel Poseidon',
    image: require('../../assets/hotels/ac-1.jpeg'),
    location: 'Italy, Amalfi Coast',
    rating: 9.2,
    pricePeerDay: '330$',
    type: 'HOTEL',
  },
  10: {
    id: 10,
    title: 'Le Agavi Hotel',
    image: require('../../assets/hotels/ac-2.jpeg'),
    location: 'Italy, Amalfi Coast',
    rating: 9.4,
    pricePeerDay: '350$',
    type: 'HOTEL',
  },
  11: {
    id: 11,
    title: 'Hotel Casa 1800 Granada',
    image: require('../../assets/hotels/granada-1.jpeg'),
    location: 'Spain, Granada',
    rating: 9.2,
    pricePeerDay: '230$',
    type: 'HOTEL',
  },
  12: {
    id: 12,
    title: 'Parador de Granada',
    image: require('../../assets/hotels/granada-2.jpeg'),
    location: 'Spain, Granada',
    rating: 9.4,
    pricePeerDay: '120$',
    type: 'HOTEL',
  },

  13: {
    id: 13,
    title: 'Konansou',
    image: require('../../assets/hotels/cb-1.jpeg'),
    location: 'Japan, Cherry blossoms',
    rating: 9.2,
    pricePeerDay: '740$',
    type: 'HOTEL',
  },
  14: {
    id: 14,
    title: 'Shuhokaku Kogetsu',
    image: require('../../assets/hotels/cb-2.jpeg'),
    location: 'Japan, Cherry blossoms',
    rating: 9.4,
    pricePeerDay: '240$',
    type: 'HOTEL',
  },
};

export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/images/O-Nhan-Kim-Cuong-Dai-Hoa-WOW1-scaled-1-scaled.jpg'),
    description:
      'Customer Priority',
  },
  {
    id: 4,
    image: require('../../assets/images/nhan-bac-nam-dinh-kim-cuong-7mm-nnam0016.jpg'),
    description:
      'Work hard with Benefit',
  },
  {
    id: 6,
    image: require('../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
    description:
      "Bring up the best service",
  },
];

export const PLACES = [
  {
    name: 'Cappadocia',
    image: require('../../assets/images/gnddddh000003-nhan-kim-cuong-nau-vang-trang-18k-pnj-1.png'),
    items: [
      {
      id: 4,
      gemstone_id: 104,
      material_id: 204,
      image: require('../../assets/images/gnddddh000003-nhan-kim-cuong-nau-vang-trang-18k-pnj-1.png'),
      price: 399.99,
      name: 'Cappadocia',
      color: "Rose Gold",
      size: "7 inches",
      weight: "15g",
      description:
        "Charming bracelet with multiple ruby gemstones set in a rose gold chain.",
      gallery: [
      require('../../assets/images/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg'),
      require('../../assets/images/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg'),
      require('../../assets/images/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg'),
      ],
      type: 'PLACE',
    },
    {
      id: 5,
      gemstone_id: 105,
      material_id: 205,
      image: require('../../assets/images/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg'),
      price: 499.99,
      name: 'Capri',
      color: "Silver",
      size: "N/A",
      weight: "100g",
      description:
        'Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.',
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 6,
      gemstone_id: 106,
      material_id: 206,
      image: require('../../assets/images/nhan-kim-cuong-nu-18k-vnf2022052678-2.png'),
      price: 249.99,
      name: 'Bora Bora',
      color: "White Gold",
      size: "N/A",
      weight: "7g",
      description:
      'Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.',
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 7,
      gemstone_id: 107,
      material_id: 207,
      image: require('../../assets/images/gnddddh000003-nhan-kim-cuong-nau-vang-trang-18k-pnj-1.png'),
      price: 159.99,
      name: 'Phuket',
      color: "Silver",
      size: "20 inches",
      weight: "5g",
      description:
      'Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand',
      gallery: [],
      type: 'PLACE',
    }
  ],
},
{
  name: 'necklace',
  image: require('../../assets/images/img-4552.webp'),
  items: [
    {
    id: 8,
    gemstone_id: 108,
    material_id: 208,
    image: require('../../assets/images/mdmamd733_1_2_c98eb97ea1bb4280a474151b4eaf2afb.webp'),
    price: 499.99,
    name: 'Amalfi',
    color: "Gold",
    size: "6",
    weight: "5g",
    description:
    'A beautiful ring with a sparkling diamond gemstone set in a gold band.',
    gallery:[],
    type: 'PLACE',
    },
    {
    id: 9,
    gemstone_id: 103,
    material_id: 203,
    image: require('../../assets/images/vyn13-t-h.webp'),
    price: 199.99,
    name: 'Cherry',
    color: "Gold",
    size: "N/A",
    weight: "3g",
    description:
    "Stylish pair of earrings with emerald gemstones set in platinum.",
    gallery: [],
    type: 'PLACE',
    },
    {
      id: 10,
      gemstone_id: 110,
      material_id: 210,
      image: require('../../assets/images/3E71FC75-9EF2-4D06-A9C8-04AC4A1392E6-768x768.jpg'),
      price: 899.99,
      name: 'Cherry',
      color: "Platinum",
      size: "N/A",
      weight: "7g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
  ]
},
{
  name:'Earrings',
  image: require('../../assets/images/images.jpg'),
  items: [
    {
      id: 11,
      gemstone_id: 111,
      material_id: 211,
      image: require('../../assets/images/pMY9sEZYkC_20211225135731.jpg'),
      price: 899.99,
      name: 'Apple',
      color: "Platinum",
      size: "N/A",
      weight: "10g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 12,
      gemstone_id: 112,
      material_id: 212,
      image: require('../../assets/images/GUEST_d250974e-fd75-4ec2-b0f3-4f23c80ae067.jpg'),
      price: 899.99,
      name: 'Banana',
      color: "Gold",
      size: "N/A",
      weight: "12g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 13,
      gemstone_id: 113,
      material_id: 213,
      image: require('../../assets/images/9361IST.jpg'),
      price: 899.99,
      name: 'Blueberry',
      color: "Platinum",
      size: "N/A",
      weight: "13g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
  ],
},
{
  name: 'Bracelets',
  image: require('../../assets/images/-473Wx593H-469199981-gold-MODEL.webp'),
  items: [
    {
      id: 14,
      gemstone_id: 114,
      material_id: 214,
      image: require('../../assets/images/custom-initial-bracelet.webp'),
      price: 899.99,
      name: 'Mango',
      color: "Platinum",
      size: "N/A",
      weight: "10g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 15,
      gemstone_id: 115,
      material_id: 215,
      image: require('../../assets/images/images (1).jpg'),
      price: 699.99,
      name: 'Durian',
      color: "Platinum",
      size: "N/A",
      weight: "15g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
    {
      id: 15,
      gemstone_id: 115,
      material_id: 215,
      image: require('../../assets/images/images (2).jpg'),
      price: 799.99,
      name: 'Strawberry',
      color: "Platinum",
      size: "N/A",
      weight: "18g",
      description:
      "Stylish pair of earrings with emerald gemstones set in platinum.",
      gallery: [],
      type: 'PLACE',
    },
  ],
},
];





// export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map(item => ({
//   ...item,
//   id: Math.random().toString(),
// }));

// export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
//   ...item,
//   id: Math.random().toString(),
// }));

// export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];