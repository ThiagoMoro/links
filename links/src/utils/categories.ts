import { MaterialIcons } from "@expo/vector-icons"

type Category = {
  id: String
  name: String
  icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
  { id: "1", name: "Curse", icon: "code" },
  { id: "2", name: "Project", icon: "folder" },
  { id: "3", name: "Site", icon: "language" },
  { id: "4", name: "Article", icon: "newspaper" },
  { id: "5", name: "Movie", icon: "movie" },
  { id: "6", name: "Docs", icon: "content-paste" },
]