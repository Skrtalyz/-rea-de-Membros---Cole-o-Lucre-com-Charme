export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoId: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const courseData: Module[] = [
  {
    id: "module-1",
    title: "Crochet Fundamentals",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Choosing Your First Hook & Yarn",
        description: "Welcome to the wonderful world of crochet! In this first lesson, we'll guide you through selecting the perfect yarn and crochet hook to start your journey. We'll cover different materials, weights, and sizes to ensure you have the best tools for success.",
        videoId: "aAxGTnVNJiE",
      },
      {
        id: "lesson-1-2",
        title: "Mastering the Slip Knot & Chain Stitch",
        description: "Every crochet project begins with these two fundamental techniques. Learn how to create a secure slip knot and practice making even, consistent chain stitches. This is the foundation upon which all other stitches are built!",
        videoId: "PSi7r5Tih3s",
      },
    ],
  },
  {
    id: "module-2",
    title: "Basic Stitches",
    lessons: [
      {
        id: "lesson-2-1",
        title: "The Single Crochet (sc)",
        description: "Discover the single crochet, one of the most versatile and common stitches. We'll break it down step-by-step, helping you create a dense, sturdy fabric perfect for amigurumi, washcloths, and more.",
        videoId: "--_yIe2S0kU",
      },
      {
        id: "lesson-2-2",
        title: "The Half Double & Double Crochet (hdc, dc)",
        description: "Ready to add some height to your projects? Learn the half double crochet and double crochet stitches. These taller stitches work up quickly and create a softer, more flexible fabric ideal for blankets and scarves.",
        videoId: "GcOzdAzmtNM",
      },
    ],
  },
  {
    id: "module-3",
    title: "Your First Project: A Simple Scarf",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Putting It All Together",
        description: "Let's combine your new skills to create a beautiful, simple scarf! This lesson will guide you through starting the project, working in rows, and keeping your edges straight. You'll be amazed at how quickly it comes together.",
        videoId: "l_uTCQWyh-I",
      },
    ],
  },
];
