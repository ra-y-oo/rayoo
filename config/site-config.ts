export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@webbyrayoo",
    description:
      "My true passion is learning and sharing my knowledge, which is why I started creating Youtube videos about web development and design",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/channel/UCamOhZ1bfn6du3mtaxL0tYA",
    buttonSecondaryText: "",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@ra-y-oo",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/ra-y-oo",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Behance",
    icon: "behance",
    username: "@ra-y-oo",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://www.behance.net/webbyrayoo",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "My Projects",
    image: "/equipments-image.jpg",
    equipments: [
      {
        title: "Omuga Media",
        link: "https://www.omuga.co.ke/",
      },
      {
        title: "Murble Tours",
        link: "https://murbletours.co.ke/",
      },
      {
        title: "Quizwiz",
        link: "https://ra-y-oo.github.io/triviaWebapp/",
      },
      {
        title: "Booking Experience",
        link: "https://www.behance.net/gallery/229833987/Tour-Booking-UX-Case-Study",
      },
      {
        title: "Surreal Tech",
        link: "https://design.surrealtech.shop",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "@_ray00_",
    buttonTitle: "Follow",
    buttonLink: "https://www.linkedin.com/in/webbyrayoo/",
    buttonSecondaryText: "",
    color: "#1DA1F2",
    description:
      "Creative Designer and Developer Building the best User Experiences",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Need a stunning website?",
    icon: "superpeer",
    promotion: "Book a Call",
    oldPrice: "$680",
    price: "$400",
    buttonLink: "https://cal.com/rayoo/30min",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Omuga Media Brand Identity Design",
    icon: "behance",
    color: "#070707",
    buttonLink: "https://www.behance.net/gallery/229998561/Designing-A-Brand-That-Moves-Omuga-Media",
    stars: 0,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Web Design and Marketing OFFER!",
    username: "@surrealtech",
    description:
      "Get the best value for your money at surrealtech. Book a call today to get the best offers of a lifetime.",
    icon: "",
    buttonTitle: "Upto",
    buttonSecondaryText: "%80 OFF",
    buttonLink:
      "https://cal.com/rayoo/30min",
  },
  {
    layout: "2x1",
    type: "project",
    title: "webappPOS",
    icon: "github",
    stars: 0,
    color: "#070707",
    buttonLink: "https://pos.surrealtech.shop",
  },
];

export const siteConfig = {
  creator: "RAYOO",
  title: "Digital Designer",
  bio: "A creative Developer and Designer. Building the best user experiences through the power of design.",
  location: "surrealtech.shop",
  locationLink:
    "https://design.surrealtech.shop",
  email: "ryanomoro37@gmail.com",
  items: GridItems,
} as const;
