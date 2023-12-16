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
    title: "Discord",
    icon: "discord",
    username: "@r.a.y.oo",
    buttonTitle: "Join",
    buttonLink: "https://discord.gg/AwBUme7v7Z",
    buttonSecondaryText: "",
    color: "#5865F2",
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
    layout: "2x4",
    type: "equipment",
    title: "My Projects",
    image: "/equipments-image.jpg",
    equipments: [
      {
        title: "Wema House",
        link: "https://wemahouse.com/",
      },
      {
        title: "Webbyrayoo",
        link: "https://webbyrayoo.tech/",
      },
      {
        title: "Quizwiz",
        link: "https://ra-y-oo.github.io/triviaWebapp/",
      },
      {
        title: "3themed Calc",
        link: "https://ra-y-oo.github.io/calculator-app-main/",
      },
      {
        title: "Chat App",
        link: "https:/",
      },
      {
        title: "Godox M1 RGB",
        link: "https",
      },
      {
        title: "Elgato Camlink 4K",
        link: "https",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@_ray00_",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/_ray00_",
    buttonSecondaryText: "",
    color: "#1DA1F2",
    description:
      "Creative Designer and Developer Building the best User Experiences",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Free Web Design",
    icon: "superpeer",
    promotion: "LIMITEDTIMEOFFER",
    oldPrice: "$180",
    price: "$40",
    buttonLink: "https://calendly.com/webbyrayoo/30min",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Web Design and Marketing OFFER!",
    icon: "superpeer",
    promotion: "LIMITEDTIMEOFFER",
    oldPrice: "$680",
    price: "$400",
    buttonLink: "https://calendly.com/webbyrayoo/30min",
  },
  {
    layout: "2x1",
    type: "project",
    title: "rayoo",
    icon: "github",
    color: "#070707",
    buttonLink: "https://github.com/ra-y-oo",
    stars: 0,
  },
  {
    layout: "2x2",
    type: "social",
    title: "Web Design and Marketing OFFER!",
    username: "@webbyrayoo",
    description:
      "Get the best value for your money at webbyrayoo.tech. Book a call today to get the best offers of a lifetime.",
    icon: "",
    buttonTitle: "Upto",
    buttonSecondaryText: "%80 OFF",
    buttonLink:
      "https://calendly.com/webbyrayoo/30min",
  },
  {
    layout: "2x1",
    type: "project",
    title: "AI Blog Post Generator",
    icon: "github",
    stars: 0,
    color: "#070707",
    buttonLink: "https://github.com/ra-y-oo",
  },
];

export const siteConfig = {
  creator: "RAYOO",
  title: "Developer & Designer",
  bio: "A creative Developer and Designer. Building the best user experiences through the power of design.",
  location: "webbyrayoo.tech",
  locationLink:
    "https://webbyrayoo.tech/",
  email: "ryanomoro37@gmail.com",
  items: GridItems,
} as const;
