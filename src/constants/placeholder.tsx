import { Chat, Courses, Document, Grid, Heart, MegaPhone } from "@/icons"

export type CreateGroupPlaceholderProps = {
  id: string
  label: string
  icon: JSX.Element
}

export const CREATE_GROUP_PLACEHOLDER: CreateGroupPlaceholderProps[] = [
  {
    id: "0",
    label: "Highly engaging",
    icon: <MegaPhone />,
  },
  {
    id: "1",
    label: "Easy to setup",
    icon: <Heart />,
  },
  {
    id: "2",
    label: "Group chat and posts",
    icon: <Chat />,
  },
  {
    id: "3",
    label: "Students can create teams within Groups",
    icon: <Grid />,
  },
  {
    id: "4",
    label: "Gamification",
    icon: <Document />,
  },
  {
    id: "5",
    label: "Host unlimited courses",
    icon: <Courses />,
  },
]
