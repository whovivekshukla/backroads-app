import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://squarespace.com", icon: "fab fa-squarespace" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 1,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

export const toursData = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    place: "china",
    days: "6 days",
    price: "2100",
  },

  {
    id: 2,
    image: tour2,
    date: "october 1st, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    place: "indonesdia",
    days: "11 days",
    price: "1400",
  },

  {
    id: 3,
    image: tour3,
    date: "may 4th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    place: "hong kong",
    days: "8 days",
    price: "5000",
  },

  {
    id: 4,
    image: tour4,
    date: "december 7 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    place: "kenya",
    days: "20 days",
    price: "3300",
  },
];
