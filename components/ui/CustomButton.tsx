import { ActivityIndicator, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

interface Props {
  onPress?: () => void;
  loading?: boolean;
  className?: string;
  text?: string;
}

export const CustomButton = (props: Props) => {
  const { onPress, loading, className, text } = props;
  return (
    <TouchableOpacity
      className={
        "bg-custom-1 px-2 py-2 rounded-lg flex items-center justify-center h-10 space-x-2 " +
        className
      }
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <ThemedText className="text-sm text-white text-center">
          {text}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};
