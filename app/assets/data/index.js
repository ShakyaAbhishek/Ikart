import HouseholdIcon from '../../assets/images/household.png';
import GroceryIcon from '../../assets/images/groceryIcon.png';
import LiquorIcon from '../../assets/images/liquor.png';
import ChilledIcon from '../../assets/images/chilledIcon.png';
import PharmacyIcon from '../../assets/images/pharmacy.png';
import RedPepperIcon from '../../assets/images/redpepper.png';
import GingerIcon from '../../assets/images/ginger.png';
import KiwiIcon from '../../assets/images/kiwi.png';
import GrapesIcon from '../../assets/images/grapes.png';
import OnionIcon from '../../assets/images/onion.png';
import StrawberryIcon from '../../assets/images/strawberry.png';
import MangoSmallIcon from '../../assets/images/mango.png';
import MangoBigIcon from '../../assets/images/mangobig.png';
import GarlicSmallIcon from '../../assets/images/garlic.png';
import GarlicBigIcon from '../../assets/images/garlicbig.png';

export const allData = {
  categories: [
    {
      categoryId: 'c101',
      categoryName: 'Household',
      icon: HouseholdIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
    {
      categoryId: 'c102',
      categoryName: 'Grocery',
      icon: GroceryIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
    {
      categoryId: 'c103',
      categoryName: 'Liquor',
      icon: LiquorIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
    {
      categoryId: 'c104',
      categoryName: 'Chilled',
      icon: ChilledIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
    {
      categoryId: 'c105',
      categoryName: 'Cleaners',
      icon: PharmacyIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
    {
      categoryId: 'c106',
      categoryName: 'Vegetables & Fruits',
      icon: PharmacyIcon,
      subcategories: [
        {
          subCategoryId: 'sc201',
          subCategoryName: 'Vegetables',
          icon: 'vegetables-cat-icon',
        },
        {
          subCategoryId: 'sc202',
          subCategoryName: 'Fruits',
          icon: 'fruits-cat-icon',
        },
      ],
    },
  ],
  allMemberProducts: {
    id: 'homeSection1',
    title: 'Grocery Member Deals',
    products: [
      {
        id: 'p5001',
        name: 'Bell Pepper Red',
        iconSmall: RedPepperIcon,
        iconBig: RedPepperIcon,
        price: '120.00',
        unit: 'gram',
        quantity: '100',
        inCart: false,
        categoryId: 'c102',
        categoryName: 'Grocery',
        subCategoryId: 'sc201',
        subCategoryName: 'Vegitables',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5002',
        name: 'Ginger',
        iconSmall: GingerIcon,
        iconBig: GingerIcon,
        price: '85.00',
        unit: 'gram',
        quantity: '100',
        inCart: false,
        categoryId: 'c102',
        categoryName: 'Grocery',
        subCategoryId: 'sc201',
        subCategoryName: 'Vegitables',
        nqty: 1,

        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5003',
        name: 'Kiwi',
        iconSmall: KiwiIcon,
        iconBig: KiwiIcon,
        price: '3.00',
        unit: 'gram',
        quantity: '100',
        inCart: false,
        categoryId: 'c102',
        categoryName: 'Grocery',
        subCategoryId: 'sc201',
        subCategoryName: 'Vegitables',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5004',
        name: 'Garlic',
        iconSmall: GarlicSmallIcon,
        iconBig: GarlicBigIcon,
        price: '30.00',
        unit: 'gram',
        quantity: '100',
        inCart: false,
        categoryId: 'c102',
        categoryName: 'Grocery',
        subCategoryId: 'sc201',
        subCategoryName: 'Vegitables',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  allOfferDeals: {
    id: 'homeSection2',
    title: 'Grocery Deals & Offers',
    products: [
      {
        id: 'p5101',
        name: 'Grapes',
        iconSmall: GrapesIcon,
        iconBig: GrapesIcon,
        price: '160.00',
        unit: 'gram',
        quantity: '1000',
        inCart: false,
        categoryId: 'c106',
        categoryName: 'Vigitable & Fruits',
        subCategoryId: 'sc202',
        subCategoryName: 'Fruits',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5102',
        name: 'Red Onions',
        iconSmall: OnionIcon,
        price: '90.00',
        unit: 'gram',
        quantity: '1000',
        inCart: false,
        categoryId: 'c106',
        categoryName: 'Vigitable & Fruits',
        subCategoryId: 'sc201',
        subCategoryName: 'Vegitables',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5103',
        name: 'Strawberry',
        iconSmall: StrawberryIcon,
        iconBig: StrawberryIcon,
        price: '160.00',
        unit: 'gram',
        quantity: '500',
        inCart: false,
        categoryId: 'c106',
        categoryName: 'Vigitable & Fruits',
        subCategoryId: 'sc202',
        subCategoryName: 'Fruits',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'p5104',
        name: 'Mango',
        iconSmall: MangoSmallIcon,
        iconBig: MangoBigIcon,
        price: '60.00',
        unit: 'gram',
        quantity: '500',
        inCart: false,
        categoryId: 'c106',
        categoryName: 'Vigitable & Fruits',
        subCategoryId: 'sc202',
        subCategoryName: 'Fruits',
        nqty: 1,
        discription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
};
