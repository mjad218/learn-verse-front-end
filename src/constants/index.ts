interface NavigationItems {
  name: string;
  slug: string;
}

interface Course {
  title: string;
  description: string;
  category: string; //should refer to a category object
  instructor: number; //should refer to an instructor object
  duration: number;
  price: number;
  image_url: string;
}

export const navigationItems: NavigationItems[] = [
  {
    name: "Embedded Systems",
    slug: "embedded",
  },
  {
    name: "Web Development",
    slug: "web-dev",
  },
  {
    name: "Desktop Applications",
    slug: "desktop-apps",
  },
  {
    name: "Mobile Development",
    slug: "mobile-dev",
  },
  {
    name: "UI/UX",
    slug: "uiux",
  },
  {
    name: "Databases",
    slug: "databases",
  },
];
