import { StyleSheet, TouchableOpacity, Text } from "react-native";

const buttonVariants = {
  default: {
    backgroundColor: "#1d4ed8", // bg-primary
    color: "#ffffff", // text-primary-foreground
    padding: 15,
    borderRadius: 50,
  },
  light: {
    backgroundColor: "rgba(128, 128, 128, 0.226)",
    color: "#ffffff",
    padding: 0,
    borderRadius: 10,
  },

  destructive: {
    backgroundColor: "#ef4444", // bg-destructive
    color: "#ffffff",
    padding: 15,
    borderRadius: 50,
  },
};
const buttonSize = {
  lg: {
    height: 50,
    paddingHorizontal: 20,
  },
  sm: {
    height: 30,
    paddingHorizontal: 10,
  },
};
const Button = ({
  children,
  variant = "default",
  size = "lg",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonVariants[variant], buttonSize[size]]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
});

export { Button };
