export type NavMenuLink = {
  label: string
  href: string
  image?: NavMenuImage
}

export type NavMenuImage = {
  src: string
  alt: string
  css?: string
}

export type NavMenuCategory = {
  label: string
  href?: string
  links?: NavMenuLink[]
  image?: NavMenuImage
}

export type NavMenuConfig = {
  label: string
  ariaLabel: string
  categories: NavMenuCategory[]
  initialCategory?: string
  image?: NavMenuImage
  showImageInitially?: boolean
  imageCategoryLabels?: string[]
  imageLinkLabels?: string[]
}

const menImage = {
  src: "/assets/20261102-rtl-nav-men.webp",
  alt: "Coach men’s bag from the men’s collection",
}

const womenImage = {
  src: "/assets/20261102-rtl-nav-women.webp",
  alt: "Coach handbags from the women’s collection",
  css: "block w-full h-auto object-contain object-top",
}

const bagsImage = {
  src: "/assets/20261102-rtl-nav-bags.webp",
  alt: "Coach bags",
  css: "block w-full h-auto object-contain object-top",
}

const tabbyImage = {
  src: "/assets/cdz15_b4bk_a0.webp",
  alt: "Coach Tabby bag",
  css: "block w-full h-auto object-contain object-top",
}

const newImage = {
  src: "/assets/new.webp",
  alt: "New Coach arrivals",
  css: "block w-full h-auto object-contain object-top",
}

const menCategories: NavMenuCategory[] = [
  {
    label: "View All",
    href: "https://www.coach.com/shop/men/view-all",
  },
  {
    label: "New",
    href: "https://www.coach.com/shop/new/mens-new-arrivals/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/new/mens-new-arrivals/view-all" },
      { label: "Bags", href: "https://www.coach.com/shop/new/mens-new-arrivals/bags" },
      { label: "Wallets", href: "https://www.coach.com/shop/new/mens-new-arrivals/wallets" },
    ],
  },
  {
    label: "Bags",
    href: "https://www.coach.com/shop/men/bags/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/men/bags/view-all" },
      { label: "New", href: "https://www.coach.com/shop/new/mens-new-arrivals/bags" },
      { label: "Messenger & Crossbody", href: "https://www.coach.com/shop/men/bags/messenger-crossbody" },
      { label: "Backpacks", href: "https://www.coach.com/shop/men/bags/backpacks" },
      { label: "Totes & Duffles", href: "https://www.coach.com/shop/men/bags/totes-duffles" },
      { label: "Briefcases", href: "https://www.coach.com/shop/men/bags/briefcases" },
    ],
  },
  {
    label: "Wallets",
    href: "https://www.coach.com/shop/men/wallets/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/men/wallets/view-all" },
      { label: "New", href: "https://www.coach.com/shop/new/mens-new-arrivals/wallets" },
      { label: "Small Wallets & Card Holders", href: "https://www.coach.com/shop/men/wallets/card-cases" },
      { label: "Billfolds", href: "https://www.coach.com/shop/men/wallets/billfolds" },
      { label: "Large Wallets", href: "https://www.coach.com/shop/men/wallets/large-wallets" },
    ],
  },
  {
    label: "Shoes",
    href: "https://www.coach.com/shop/men/shoes/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/men/shoes/view-all" },
      { label: "Sneakers", href: "https://www.coach.com/shop/men/shoes/sneakers" },
      { label: "Loafers & Clogs", href: "https://www.coach.com/shop/men/shoes/loafers-drivers" },
      { label: "Sandals & Slides", href: "https://www.coach.com/shop/men/shoes/sandals-slides" },
    ],
  },
  {
    label: "Clothing",
    href: "https://www.coach.com/shop/men/ready-to-wear/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/men/ready-to-wear/view-all" },
      { label: "Jackets & Outerwear", href: "https://www.coach.com/shop/men/ready-to-wear/jackets-outerwear" },
      { label: "Tops & Bottoms", href: "https://www.coach.com/shop/men/ready-to-wear/tops-bottoms" },
    ],
  },
  {
    label: "Accessories",
    href: "https://www.coach.com/shop/men/accessories/view-all",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/men/accessories/view-all" },
      { label: "Belts", href: "https://www.coach.com/shop/men/accessories/belts" },
      { label: "Hats Scarves & Gloves", href: "https://www.coach.com/shop/men/accessories/hats-scarves-gloves" },
      { label: "Watches", href: "https://www.coach.com/shop/men/accessories/watches" },
      { label: "Bag Accessories & Keychains", href: "https://www.coach.com/shop/men/accessories/bag-accessories-keychains" },
      { label: "Fragrance", href: "https://www.coach.com/shop/men/accessories/fragrance" },
      { label: "Eyewear", href: "https://www.coach.com/shop/men/accessories/sunglasses" },
      { label: "Tech & Travel", href: "https://www.coach.com/shop/men/accessories/tech-travel" },
      { label: "Product Care", href: "https://www.coach.com/shop/men/accessories/product-care" },
    ],
  },
  {
    label: "Gifts",
    href: "https://www.coach.com/shop/gifts/for-him/view-all",
    links: [{ label: "View All", href: "https://www.coach.com/shop/gifts/for-him/view-all" }],
  },
]

const womenCategories: NavMenuCategory[] = [
  { label: "View All" },
  {
    label: "New",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/new/womens-new-arrivals/view-all" },
      { label: "Bags", href: "https://www.coach.com/shop/new/womens-new-arrivals/handbags" },
      { label: "Wallets", href: "https://www.coach.com/shop/new/womens-new-arrivals/wallets-wristlets" },
    ],
  },
  {
    label: "Best Sellers",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/women/bestsellers" },
      { label: "Tabby", href: "https://www.coach.com/shop/women/collections/tabby" },
      { label: "Brooklyn", href: "https://www.coach.com/shop/women/handbags/view-all?familyCollection=Brooklyn" },
      { label: "Chelsea", href: "https://www.coach.com/shop/women/handbags/view-all?familyCollection=Chelsea" },
    ],
  },
  {
    label: "Bags",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/women/handbags/view-all" },
      { label: "Tabby", href: "https://www.coach.com/shop/women/collections/tabby" },
      { label: "Brooklyn", href: "https://www.coach.com/shop/women/handbags/view-all?familyCollection=Brooklyn" },
      { label: "Chelsea", href: "https://www.coach.com/shop/women/handbags/view-all?familyCollection=Chelsea" },
    ],
  },
  {
    label: "Wallets",
    links: [
      { label: "View All", href: "https://www.coach.com/shop/women/wallets-wristlets/view-all" },
      { label: "New", href: "https://www.coach.com/shop/new/womens-new-arrivals/wallets-wristlets" },
      { label: "Small Wallets & Card Holders", href: "https://www.coach.com/shop/women/wallets-wristlets/small-wallets" },
      { label: "Large Wallets", href: "https://www.coach.com/shop/women/wallets-wristlets/large-wallets" },
      { label: "Wristlets", href: "https://www.coach.com/shop/women/wallets-wristlets/wristlets" },
    ],
  },
  { label: "Charms & Straps" },
  { label: "Shoes" },
  { label: "Clothing" },
  { label: "Accessories" },
  { label: "Coach (Re)Loved" },
  { label: "Gifts" },
]

const landingMenu = (
  label: string,
  ariaLabel: string,
  categories: NavMenuCategory[],
): NavMenuConfig => ({ label, ariaLabel, categories })

export const navMenus = {
  women: {
    label: "Women",
    ariaLabel: "Women’s shopping categories",
    categories: womenCategories,
    initialCategory: "Bags",
    image: womenImage,
    imageCategoryLabels: ["Bags"],
    imageLinkLabels: ["Tabby", "Brooklyn"],
  },
  men: {
    label: "Men",
    ariaLabel: "Men’s shopping categories",
    categories: menCategories,
    image: menImage,
    showImageInitially: true,
    imageCategoryLabels: ["View All"],
  },
  bags: {
    ...landingMenu("Bags", "Bags shopping categories", [
      { label: "View All", href: "https://www.coach.com/shop/women/handbags/view-all" },
      { label: "New", href: "https://www.coach.com/shop/new/womens-new-arrivals/bags" },
      { label: "Shoulder Bags", href: "https://www.coach.com/shop/women/handbags/shoulder-bags-hobos" },
      { label: "Totes", href: "https://www.coach.com/shop/women/handbags/totes-carryalls" },
      { label: "Crossbody Bags", href: "https://www.coach.com/shop/women/handbags/crossbody-bags" },
      { label: "Top Handles & Carryalls", href: "https://www.coach.com/shop/women/handbags/satchels-top-handles" },
      { label: "Clutches", href: "https://www.coach.com/shop/women/handbags/clutches" },
      { label: "Backpacks", href: "https://www.coach.com/shop/women/handbags/backpacks" },
      { label: "Men's", href: "https://www.coach.com/shop/men/bags/view-all" },
      { label: "Bag Guides", href: "https://www.coach.com/stories/guides" },
      {
        label: "The Tabby Shop",
        href: "https://www.coach.com/shop/women/collections/tabby",
        image: tabbyImage,
      },
      { label: "The Coach Originals", href: "https://www.coach.com/shop/new/featured/the-coach-originals" },
    ]),
    image: bagsImage,
    showImageInitially: true,
  },
  new: {
    ...landingMenu("New", "New arrivals categories", [
      { label: "View All", href: "https://www.coach.com/shop/new/view-all", image: newImage },
      {
        label: "Bags",
        href: "https://www.coach.com/shop/new/womens-new-arrivals/bags",
        image: { src: "/assets/Bags.webp", alt: "New Coach bags" },
      },
      {
        label: "Wallets & Wristlets",
        href: "https://www.coach.com/shop/new/womens-new-arrivals/wallets-wristlets",
        image: { src: "/assets/Wallet.webp", alt: "New Coach wallets and wristlets" },
      },
      {
        label: "Shoes",
        href: "https://www.coach.com/shop/new/womens-new-arrivals/shoes",
        image: { src: "/assets/shoes.webp", alt: "New Coach shoes" },
      },
      {
        label: "Men's",
        href: "https://www.coach.com/shop/new/mens-new-arrivals/view-all",
        image: menImage,
      },
      {
        label: "Trending Now",
        href: "https://www.coach.com/shop/new/trending-now",
        image: { src: "/assets/Trending%20now.webp", alt: "Trending Coach styles" },
      },
      { label: "Courage To Be Real", href: "https://www.coach.com/content/courage-to-be-real" },
      { label: "&Coach", href: "https://www.coach.com/content/and-coach" },
    ]),
    image: newImage,
    showImageInitially: true,
  },
  gifts: landingMenu("Gifts", "Gifts shopping categories", [
    { label: "For Her", href: "https://www.coach.com/shop/gifts/for-her/view-all" },
    { label: "For Him", links: menCategories.find(({ label }) => label === "Gifts")?.links },
  ]),
} satisfies Record<"women" | "men" | "bags" | "new" | "gifts", NavMenuConfig>
