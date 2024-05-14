import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Maximizing Efficiency: Harnessing the Power of NovaMind's UI Components",
    paragraph:
      "Unlock the potential of your website with NovaMind's revolutionary UI components. Discover how to elevate user experiences and streamline workflows.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Filane Fex",
      image: "/images/blog/author-01.png",
      designation: "User Experience Designer",
    },
    tags: ["UI Design", "Efficiency"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mastering Design: 9 Ways to Elevate Your Skills with NovaMind",
    paragraph:
      "Enhance your design prowess with NovaMind's expert tips. Learn how to refine your craft and create impactful designs that captivate audiences.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Alpet Gexha",
      image: "/images/blog/author-02.png",
      designation: "Design Strategist",
    },
    tags: ["Design", "Skill Improvement"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Coding Efficiency: Accelerate Your Development with NovaMind",
    paragraph:
      "Boost your coding speed and efficiency with NovaMind's pro tips. Discover shortcuts and techniques to streamline your development process.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Software Engineer",
    },
    tags: ["Coding", "Efficiency"],
    publishDate: "2025",
  },
];
export default blogData;
