import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

type Props = {
  selected: String
  onChange: (category: String) => void
}

export function Categories({ selected, onChange }: Props) {
  return (
    <FlatList 
      data={categories}
      keyExtractor={( item ) => String(item.id)}
      renderItem={({ item }) => (
        <Category 
          name={item.name} 
          icon={item.icon} 
          isSelected={item.name === selected} 
          onPress={() => onChange(item.name)} 
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}