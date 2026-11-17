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
  centered?: boolean
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

const coachtopiaImage = {
  src: "/assets/20261102-rtl-nav-coachtopia.webp",
  alt: "Coachtopia model carrying a black shoulder bag",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
}

const blackBag = {
  src: "/assets/cgq18_blk_a92 (1).webp",
  alt: "Coachtopia model carrying a black shoulder bag",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
}

const giftImage = {
  src: "/assets/20261028-gift-nav.webp",
  alt: "Coach gift box and red leather bag",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
}

const giftRecipientImage = {
  src: "/assets/20261102-rtl-nav-gift-recipient.jfif",
  alt: "Coach gifts by recipient",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
}

const giftGuideImage = {
  src: "/assets/20261102-rtl-nav-gift-guide.jfif",
  alt: "Coach gift guide",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
}

const giftBestsellerImage = {
  src: "/assets/20261102-rtl-nav-bestseller.jfif",
  alt: "Coach gift bestsellers",
  css: "block w-full h-auto max-h-[360px] object-contain object-center",
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
      { label: "Accessories", href: "https://www.coach.com/shop/new/mens-new-arrivals/wallets" },
      { label: "Drops", href: "https://www.coach.com/shop/new/mens-new-arrivals/wallets" },
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
  gifts: {
    label: "Gifts",
    ariaLabel: "Gifts shopping categories",
    centered: true,
    image: giftImage,
    showImageInitially: true,
    categories: [
      { label: "View All", href: "https://www.coach.com/shop/gifts/view-all" },
      { label: "For Her", href: "https://www.coach.com/shop/gifts/for-her/view-all" },
      { label: "For Him", href: "https://www.coach.com/shop/gifts/for-him/view-all" },
      {
        label: "Bestsellers",
        href: "https://www.coach.com/shop/women/bestsellers",
        image: giftBestsellerImage,
      },
      { label: "Stocking Stuffers", href: "https://www.coach.com/shop/gifts/stocking-stuffers" },
      {
        label: "Gifts by Recipient",
        href: "https://www.coach.com/shop/gifts/view-all",
          links: [
          { label: "For You", href: "https://www.coach.com/shop/gifts/for-self-gifting" },
          { label: "For Them", href: "https://www.coach.com/shop/gifts/for-loved-ones" },
          { label: "For All Their Events", href: "https://www.coach.com/shop/gifts/for-the-party-girl" },
          { label: "For Their Next Trip", href: "https://www.coach.com/shop/gifts/for-jetsetter" },
        ],
        image: giftRecipientImage,
      },
      {
        label: "Gift Guide",
        href: "https://www.coach.com/shop/gifts/gift-guide",
        image: giftGuideImage,
      },
      { label: "Gift Cards", href: "https://www.coach.com/shop/gifts/gift-services/gift-cards" },
      {
        label: "AI Gift Assistant",
        image: giftRecipientImage,
      },
    ],
  },
  coachtopia: {
    label: "Coachtopia",
    ariaLabel: "Coachtopia shopping categories",
    centered: true,
    image: coachtopiaImage,
    showImageInitially: true,
    categories: [
      {
        label: "New",
        href: "https://www.coach.com/shop/coachtopia/all/new",
        image: blackBag,
        links: [
          {label: "View All", href: "https:youtube.com"},
          {label: "Bags",href: "https:youtube.com"},
          {label: "Accessories",href: "https:youtube.com"},
          {label: "Drops", href: "https:youtube.com"}
        ]
      },
      {
        label: "Bags",
        href: "https://www.coach.com/shop/coachtopia/all/bags",
        image: coachtopiaImage,
        links: [
          { label: "View All", href: "https://www.coach.com/shop/coachtopia/all/bags", image: coachtopiaImage },
          { label: "New", href: "https://www.coach.com/shop/coachtopia/bags/new", image: coachtopiaImage },
          { label: "Shoulder Bags", href: "https://www.coach.com/shop/coachtopia/bags/shoulder-bags", image: coachtopiaImage },
          { label: "Crossbody Bags", href: "https://www.coach.com/shop/coachtopia/bags/crossbody-bags", image: coachtopiaImage },
          { label: "Totes", href: "https://www.coach.com/shop/coachtopia/bags/totes", image: coachtopiaImage },
          { label: "Alter/Ego Bags", href: "https://www.coach.com/shop/coachtopia/alter-ego-collection?filterCategory=Bags", image: coachtopiaImage },
          { label: "Bowling Bags", href: "https://www.coach.com/shop/coachtopia/bags/bowling-bags", image: coachtopiaImage },
          { label: "Coachtopia Loop Bags", href: "https://www.coach.com/shop/coachtopia/coachtopia-loop?filterCategory=Bags", image: coachtopiaImage },
          { label: "Gifts", href: "https://www.coach.com/shop/coachtopia/gifts?filterCategory=Bags", image: coachtopiaImage },
        ],
      },
      {
        label: "Accessories",
        href: "https://www.coach.com/shop/coachtopia/featured/accessories",
        image: coachtopiaImage,
        links: [
          { label: "View All", href: "https://www.coach.com/shop/coachtopia/featured/accessories", image: coachtopiaImage },
          { label: "New", href: "https://www.coach.com/shop/coachtopia/accessories/new", image: newImage },
          { label: "Wallets", href: "https://www.coach.com/shop/coachtopia/accessories/wallets-view-all", image: { src: "/assets/Wallet.webp", alt: "Coach wallets" } },
          { label: "Bag Charms", href: "https://www.coach.com/shop/coachtopia/accessories/bag-charms", image: bagsImage },
          { label: "Gifts", href: "https://www.coach.com/shop/coachtopia/gifts?filterCategory=Accessories|Bag+Charms+and+Straps|Wallets+and+Wristlets", image: coachtopiaImage },
        ],
      },
      {
        label: "Featured",
        href: "https://www.coach.com/shop/coachtopia/featured/view-all",
      },
      {
        label: "Gifts",
        href: "https://www.coach.com/shop/coachtopia/gifts",
        image: coachtopiaImage,
        links: [
          { label: "View All", href: "https://www.coach.com/shop/coachtopia/gifts", image: coachtopiaImage },
          { label: "Bags", href: "https://www.coach.com/shop/coachtopia/gifts?filterCategory=Bags", image: coachtopiaImage },
          { label: "Accessories", href: "https://www.coach.com/shop/coachtopia/gifts?filterCategory=Accessories|Bag+Charms+and+Straps|Wallets+and+Wristlets", image: coachtopiaImage },
          { label: "Gifts Under $200", href: "https://www.coach.com/shop/coachtopia/gifts?pmin=20&pmax=200", image: coachtopiaImage },
        ],
      },
      {
        label: "Circularity",
        href: "https://www.coach.com/shop/coachtopia/the-world-of-coachtopia",
        links: [
          { label: "The Road to Circularity", href: "https://www.coach.com/shop/coachtopia/the-world-of-coachtopia/the-road-to-circularity-2" },
          { label: "Community Action", href: "https://www.coach.com/shop/coachtopia/the-world-of-coachtopia/community-action" },
          { label: "How To Coachtopia", href: "https://www.coach.com/shop/coachtopia/the-world-of-coachtopia/how-to-coachtopia" },
          { label: "About Coachtopia", href: "https://www.coach.com/shop/coachtopia/the-world-of-coachtopia" },
        ],
      },
    ],
  },
} satisfies Record<"women" | "men" | "bags" | "new" | "gifts" | "coachtopia", NavMenuConfig>
