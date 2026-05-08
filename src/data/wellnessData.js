import { FiActivity, FiBookOpen, FiClock, FiDroplet, FiFeather, FiHeadphones, FiHeart, FiMoon, FiMusic, FiSun, FiWind } from "react-icons/fi";
import { FaLock } from "react-icons/fa6";
import ananyaImg from "../assests/images/ananya.png";
import meeraImg from "../assests/images/meera.png";
import kavithaImg from "../assests/images/kavitha.png";
import priyaImg from "../assests/images/priya.png";
import vinyasaImg from "../assests/images/vinyasa.png";
import yinImg from "../assests/images/yin.png";
import powerImg from "../assests/images/power.png";
import meditationImg from "../assests/images/meditation.png";
import sacredImg from "../assests/images/sacredimage.png";
import heroImg from "../assests/images/hero.png";

export const dashboardMenu = [
  { label: "Home", path: "/dashboard", icon: FiActivity },
  { label: "Meditation", path: "/dashboard/meditation", icon: FiMoon },
  { label: "Sleep", path: "/dashboard/sleep", icon: FiMoon },
  { label: "Music", path: "/dashboard/music", icon: FiMusic },
  { label: "Wisdom", path: "/dashboard/wisdom", icon: FiBookOpen },
  { label: "Movement", path: "/dashboard/movement", icon: FiActivity },
  { label: "Breathwork", path: "/dashboard/breathwork", icon: FiWind },
  { label: "Kids Yoga", path: "/dashboard/kids", icon: FiFeather },
  { label: "Profile", path: "/profile", icon: FiHeart },
];

export const featuredSessions = [
  {
    id: "sunrise-vinyasa",
    title: "Sunrise Vinyasa Flow",
    instructor: "Meera Sharma",
    duration: 24,
    level: "All levels",
    image: vinyasaImg,
    premium: false,
    description: "Open the body with an uplifting morning sequence.",
    preview: "A flowing morning session to awaken joints and breath.",
    tags: ["Flow", "Energy", "Morning"],
  },
  {
    id: "deep-yin",
    title: "Deep Yin Release",
    instructor: "Kavitha Rao",
    duration: 18,
    level: "Gentle",
    image: yinImg,
    premium: true,
    description: "A calming deep-stretch ritual for the nervous system.",
    preview: "Hold each posture and let the body soften slowly.",
    tags: ["Yin", "Restorative", "Evening"],
  },
  {
    id: "power-core",
    title: "Power Core Yoga",
    instructor: "Ananya Iyer",
    duration: 32,
    level: "Intermediate",
    image: powerImg,
    premium: true,
    description: "Strengthen your center with controlled heat-building movement.",
    preview: "A focused core sequence to energize and tone.",
    tags: ["Strength", "Core", "Power"],
  },
  {
    id: "sacred-stillness",
    title: "Sacred Stillness",
    instructor: "Priya Nair",
    duration: 20,
    level: "All levels",
    image: sacredImg,
    premium: false,
    description: "A quiet meditation to reconnect with inner spaciousness.",
    preview: "Guided pause for inner quiet and spiritual grounding.",
    tags: ["Meditation", "Stillness", "Breath"],
  },
];

export const dailyRoutine = [
  {
    id: "morning-meditation",
    title: "Morning Meditation",
    duration: 10,
    icon: FiSun,
    gradient: "from-[#fff2dd] via-[#fef8f0] to-[#eaf7e5]",
    sessionId: "sacred-stillness",
  },
  {
    id: "breathwork",
    title: "Breathwork",
    duration: 8,
    icon: FiWind,
    gradient: "from-[#eff7ea] via-[#f8f1e8] to-[#fff4e5]",
    sessionId: "deep-yin",
  },
  {
    id: "stretch-session",
    title: "Stretch Session",
    duration: 14,
    icon: FiFeather,
    gradient: "from-[#fdf1e5] via-[#fff8f1] to-[#e9f6f1]",
    sessionId: "sunrise-vinyasa",
  },
  {
    id: "night-relaxation",
    title: "Night Relaxation",
    duration: 12,
    icon: FiMoon,
    gradient: "from-[#f7ead7] via-[#fdf7ef] to-[#eff7ea]",
    sessionId: "deep-yin",
  },
];

export const liveClasses = [
  {
    id: "live-1",
    title: "Gentle Flow for Energy",
    instructor: "Ananya Iyer",
    time: "07:00",
    category: "Morning Yoga",
    seatsLeft: 18,
    image: ananyaImg,
    meetingLink: "https://meet.google.com/placeholder",
  },
  {
    id: "live-2",
    title: "Evening Reset Session",
    instructor: "Kavitha Rao",
    time: "18:30",
    category: "Stress Relief",
    seatsLeft: 9,
    image: kavithaImg,
    meetingLink: "https://meet.google.com/placeholder",
  },
  {
    id: "live-3",
    title: "Sleep Wind Down",
    instructor: "Meera Sharma",
    time: "21:00",
    category: "Night Relaxation",
    seatsLeft: 22,
    image: meeraImg,
    meetingLink: "https://meet.google.com/placeholder",
  },
];

export const recommendationTopics = [
  { id: "yoga", title: "Yoga Sessions", icon: FiFeather },
  { id: "sleep", title: "Sleep Music", icon: FiMusic },
  { id: "healing", title: "Spiritual Healing", icon: FiHeart },
  { id: "chakra", title: "Chakra Therapy", icon: FiHeart },
  { id: "sound", title: "Sound Meditation", icon: FiHeadphones },
  { id: "breath", title: "Breath Sync", icon: FiWind },
];

export const dashboardInsights = [
  { id: "streak", label: "Weekly streak", value: 6, total: 7, color: "#E8651A" },
  { id: "meditation", label: "Meditation minutes", value: 220, total: 300, color: "#2E7D32" },
  { id: "sessions", label: "Yoga sessions completed", value: 18, total: 25, color: "#1565C0" },
  { id: "score", label: "Wellness score", value: 84, total: 100, color: "#8a6a3c" },
];

export const dashboardNotifications = [
  { id: "n1", title: "Your evening flow is ready.", time: "2m ago", unread: true },
  { id: "n2", title: "3 new live classes added.", time: "Today", unread: true },
  { id: "n3", title: "Streak milestone unlocked.", time: "Yesterday", unread: false },
];

export const sessionCatalog = [
  ...featuredSessions,
  {
    id: "breath-reset",
    title: "Breath Reset",
    instructor: "Meera Sharma",
    duration: 14,
    level: "Beginner",
    image: meditationImg,
    premium: false,
    description: "A short reset for clarity and gentle energy.",
    preview: "This practice helps slow the mind and expand the rib cage.",
    tags: ["Breath", "Reset", "Calm"],
  },
  {
    id: "morning-sun",
    title: "Morning Sun Salutation",
    instructor: "Ananya Iyer",
    duration: 22,
    level: "All levels",
    image: heroImg,
    premium: false,
    description: "A grounded sun sequence to start the day with focus.",
    preview: "Build heat, balance, and intention for the day ahead.",
    tags: ["Sun", "Flow", "Strength"],
  },
];

export const pricingPlans = [
  { id: "basic", name: "Basic", price: "Free", features: ["Daily routine", "Dashboard access", "Limited sessions"] },
  { id: "plus", name: "Plus", price: "₹499/mo", features: ["Full library", "Live classes", "Session previews"] },
  { id: "pro", name: "Pro", price: "₹999/mo", features: ["1:1 coaching", "Unlimited classes", "Priority support"], highlighted: true },
];

