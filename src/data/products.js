const products = [
  {
    id: '1',
    name: 'Shirt 1',
    price: 1399,
    type: 'shirt',
    color: 'brown',
    size: 'M',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt1.jpg', 
    popularity: 10, 
    rating: 4.5, 
    releaseDate: '2023-08-01', 
    discountedPrice: 1200, 
    targetAudience: 'Men',
    images: [
      '/images/shirt1.jpg',
      '/images/shirt1_2.jpg', 
      '/images/shirt1_3.jpg',
      '/images/shirt1_4.jpg',
    ],
  },
  {
    id: '2',
    name: 'Shirt 2',
    price: 699,
    type: 'shirt',
    color: 'red',
    size: 'L',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt2.jpg', 
    popularity: 30, 
    rating: 4.7, 
    releaseDate: '2023-07-01', 
    discountedPrice: 500, 
    targetAudience: 'Women',
    images: [
      '/images/shirt2.jpg',
      '/images/shirt2_2.jpg', 
      '/images/shirt2_3.jpg',
      '/images/shirt2_4.jpg',
    ],
  },
  {
    id: '3',
    name: 'Shirt 3',
    price: 1059,
    type: 'shirt',
    color: 'black',
    size: 'XL',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt3.jpg', 
    popularity: 20, 
    rating: 4.3, 
    releaseDate: '2023-06-01', 
    discountedPrice: 899, 
    targetAudience: 'Men',
    images: [
      '/images/shirt3.jpg',
      '/images/shirt3_2.jpg', 
      '/images/shirt3_3.jpg',
      '/images/shirt3_4.jpg',
    ],
  },
  {
    id: '4',
    name: 'Shirt 4',
    price: 699,
    type: 'shirt',
    color: 'white',
    size: 'S',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt4.jpg', 
    popularity: 16, 
    rating: 4.0, 
    releaseDate: '2023-08-12', 
    discountedPrice: 600, 
    targetAudience: 'Women',
    images: [
      '/images/shirt4.jpg',
      '/images/shirt4_2.jpg', 
      '/images/shirt4_3.jpg',
      '/images/shirt4_4.jpg',
    ],
  },
  {
    id: '5',
    name: 'Shirt 5',
    price: 1999,
    type: 'shirt',
    color: 'blue',
    size: 'XXL',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt5.jpg', 
    popularity: 19, 
    rating: 3.9, 
    releaseDate: '2023-07-23', 
    discountedPrice: 1750, 
    targetAudience: 'Men',
    images: [
      '/images/shirt5.jpg',
      '/images/shirt5_2.jpg', 
      '/images/shirt5_3.jpg',
      '/images/shirt5_4.jpg',
    ],
  },
  {
    id: '6',
    name: 'Shirt 6',
    price: 1699,
    type: 'shirt',
    color: 'pink',
    size: 'XXXL',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt6.jpg', 
    popularity: 24, 
    rating: 4.1, 
    releaseDate: '2023-08-06', 
    discountedPrice: 1500, 
    targetAudience: 'Women',
    images: [
      '/images/shirt6.jpg',
      '/images/shirt6_2.jpg', 
      '/images/shirt6_3.jpg',
      '/images/shirt6_4.jpg',
    ],
  },
  {
    id: '7',
    name: 'Shirt 7',
    price: 499,
    type: 'shirt',
    color: 'blue',
    size: 'M',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt7.jpg', 
    popularity: 31, 
    rating: 4.6, 
    releaseDate: '2023-07-11', 
    discountedPrice: 239, 
    targetAudience: 'Men',
    images: [
      '/images/shirt7.jpg',
      '/images/shirt7_2.jpg', 
      '/images/shirt7_3.jpg',
      '/images/shirt7_4.jpg',
    ],
  },
  {
    id: '8',
    name: 'Shirt 8',
    price: 599,
    type: 'shirt',
    color: 'green',
    size: 'S',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt8.jpg', 
    popularity: 45, 
    rating: 3.6, 
    releaseDate: '2023-07-17', 
    discountedPrice: 339, 
    targetAudience: 'Women',
    images: [
      '/images/shirt8.jpg',
      '/images/shirt8_2.jpg', 
      '/images/shirt8_3.jpg',
      '/images/shirt8_4.jpg',
    ],
  },
  {
    id: '9',
    name: 'Shirt 9',
    price: 1099,
    type: 'shirt',
    color: 'yellow',
    size: 'L',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt9.jpg', 
    popularity: 29, 
    rating: 3.2, 
    releaseDate: '2023-05-11', 
    discountedPrice: 839, 
    targetAudience: 'Men',
    images: [
      '/images/shirt9.jpg',
      '/images/shirt9_2.jpg', 
      '/images/shirt9_3.jpg',
      '/images/shirt9_4.jpg',
    ],
  },
  {
    id: '10',
    name: 'Shirt 10',
    price: 699,
    type: 'shirt',
    color: 'grey',
    size: 'XL',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt10.jpg', 
    popularity: 37, 
    rating: 4.0, 
    releaseDate: '2023-04-11', 
    discountedPrice: 500, 
    targetAudience: 'Women',
    images: [
      '/images/shirt10.jpg',
      '/images/shirt10_2.jpg', 
      '/images/shirt10_3.jpg',
      '/images/shirt10_4.jpg',
    ],
  },
  {
    id: '11',
    name: 'Shirt 11',
    price: 1299,
    type: 'shirt',
    color: 'pink',
    size: 'XXL',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt11.jpg', 
    popularity: 55, 
    rating: 4.3, 
    releaseDate: '2023-06-22', 
    discountedPrice: 900, 
    targetAudience: 'Men',
    images: [
      '/images/shirt11.jpg',
      '/images/shirt11_2.jpg', 
      '/images/shirt11_3.jpg',
      '/images/shirt11_4.jpg',
    ],
  },
  {
    id: '12',
    name: 'Shirt 12',
    price: 1699,
    type: 'shirt',
    color: 'green',
    size: 'M',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    image: '/images/shirt12.jpg', 
    popularity: 28, 
    rating: 3.4, 
    releaseDate: '2023-07-27', 
    discountedPrice: 1400, 
    targetAudience: 'Women',
    images: [
      '/images/shirt12.jpg',
      '/images/shirt12_2.jpg', 
      '/images/shirt12_3.jpg',
      '/images/shirt12_4.jpg',
    ],
  },
];

export default products;
