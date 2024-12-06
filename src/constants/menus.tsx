import {
  AffiliateDuoToneBlack,
  Buisness,
  CreditCard,
  Document,
  Explore,
  Home,
  IDuotoneBlack,
  PersonalDevelopment,
} from "@/icons"

export type MenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
  section?: boolean
  integration?: boolean
}

export type GroupMenuProps = {
  id: number
  label: string
  icon: JSX.Element
  path: string
}

export const LANDING_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <CreditCard />,
    path: "#pricing",
    section: true,
  },
  {
    id: 1,
    label: "Explore",
    icon: <Explore />,
    path: "/explore",
  },
]
export const GROUP_PAGE_MENU: MenuProps[] = [
  {
    id: 0,
    label: "Groups",
    icon: <Home />,
    path: "/explore",
    section: true,
  },

  {
    id: 1,
    label: "Events",
    icon: <Buisness />,
    path: "/explore",
  },
  {
    id: 2,
    label: "Members",
    icon: <PersonalDevelopment />,
    path: "/explore",
  },
  {
    id: 3,
    label: "About",
    icon: <Document />,
    path: "/explore",
  },
]

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
  {
    id: 0,
    label: "General",
    icon: <IDuotoneBlack />,
    path: "",
  },
  {
    id: 1,
    label: "Subscriptions",
    icon: <CreditCard />,
    path: "subscriptions",
  },
  {
    id: 2,
    label: "Affiliates",
    icon: <AffiliateDuoToneBlack />,
    path: "affiliates",
  },
]
