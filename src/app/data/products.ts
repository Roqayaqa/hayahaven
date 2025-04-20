export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  images: string[];
  colors: string[];
  colorImages: { [color: string]: string[] };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Elegant Chiffon Hijab",
    imageUrl: "/images/products/product1.png",
    description: "A lightweight and breathable chiffon hijab.",
    price: 25.0,
    images: [
      "/images/products/product1.png",
      "/images/products/product1-hover.png"
    ],
    colors: ["#F2EFEA", "#E3C5A3", "#C7625D"],
    colorImages: {
      "#F2EFEA": [
        "/images/products/product1-beige-1.png",
        "/images/products/product1-beige-2.png"
      ],
      "#E3C5A3": [
        "/images/products/product1-brown-1.png",
        "/images/products/product1-brown-2.png"
      ],
      "#C7625D": [
        "/images/products/product1-rose-1.png",
        "/images/products/product1-rose-2.png"
      ]
    }
  },
  {
    id: "2",
    name: "Premium Jersey Hijab",
    imageUrl: "/images/products/product2.png",
    description: "A soft and comfortable jersey hijab.",
    price: 30.0,
    images: [
      "/images/products/product2.png",
      "/images/products/product2-hover.png"
    ],
    colors: ["#D6D2CD", "#BAA5A0", "#6C4A4A"],
    colorImages: {
      "#D6D2CD": [
        "/images/products/product2-lightgrey-1.png",
        "/images/products/product2-lightgrey-2.png"
      ],
      "#BAA5A0": [
        "/images/products/product2-taupe-1.png",
        "/images/products/product2-taupe-2.png"
      ],
      "#6C4A4A": [
        "/images/products/product2-darkbrown-1.png",
        "/images/products/product2-darkbrown-2.png"
      ]
    }
  },
  {
    id: "3",
    name: "Luxury Silk Hijab",
    imageUrl: "/images/products/product3.png",
    description: "An exquisite silk hijab for elegant looks.",
    price: 45.0,
    images: [
      "/images/products/product3.png",
      "/images/products/product3-hover.png"
    ],
    colors: ["#EEE1D3", "#D7BFAE", "#926D57"],
    colorImages: {
      "#EEE1D3": [
        "/images/products/product3-cream-1.png",
        "/images/products/product3-cream-2.png"
      ],
      "#D7BFAE": [
        "/images/products/product3-beige-1.png",
        "/images/products/product3-beige-2.png"
      ],
      "#926D57": [
        "/images/products/product3-choco-1.png",
        "/images/products/product3-choco-2.png"
      ]
    }
  },
  {
    id: "4",
    name: "Printed Cotton Hijab",
    imageUrl: "/images/products/product4.png",
    description: "A vibrant printed cotton hijab.",
    price: 28.0,
    images: [
      "/images/products/product4.png",
      "/images/products/product4-hover.png"
    ],
    colors: ["#E6D2B5", "#BC9270", "#6A3D2D"],
    colorImages: {
      "#E6D2B5": [
        "/images/products/product4-beigeprint-1.png",
        "/images/products/product4-beigeprint-2.png"
      ],
      "#BC9270": [
        "/images/products/product4-brownprint-1.png",
        "/images/products/product4-brownprint-2.png"
      ],
      "#6A3D2D": [
        "/images/products/product4-darkprint-1.png",
        "/images/products/product4-darkprint-2.png"
      ]
    }
  },
  {
    id: "5",
    name: "Embroidered Modal Hijab",
    imageUrl: "/images/products/product5.png",
    description: "A beautifully embroidered modal hijab.",
    price: 38.0,
    images: [
      "/images/products/product5.png",
      "/images/products/product5-hover.png"
    ],
    colors: ["#F3E7D3", "#D1A47A", "#805D3B"],
    colorImages: {
      "#F3E7D3": [
        "/images/products/product5-cream-1.png",
        "/images/products/product5-cream-2.png"
      ],
      "#D1A47A": [
        "/images/products/product5-gold-1.png",
        "/images/products/product5-gold-2.png"
      ],
      "#805D3B": [
        "/images/products/product5-brown-1.png",
        "/images/products/product5-brown-2.png"
      ]
    }
  },
  {
    id: "6",
    name: "Classic Black Abaya",
    imageUrl: "/images/products/product6.png",
    description: "A timeless classic black abaya.",
    price: 55.0,
    images: [
      "/images/products/product6.png",
      "/images/products/product6-hover.png"
    ],
    colors: ["#000000", "#333333", "#4D4D4D"],
    colorImages: {
      "#000000": [
        "/images/products/product6-black-1.png",
        "/images/products/product6-black-2.png"
      ],
      "#333333": [
        "/images/products/product6-darkgrey-1.png",
        "/images/products/product6-darkgrey-2.png"
      ],
      "#4D4D4D": [
        "/images/products/product6-lightblack-1.png",
        "/images/products/product6-lightblack-2.png"
      ]
    }
  }
];
