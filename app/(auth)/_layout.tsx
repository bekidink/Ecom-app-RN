import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(home)"} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(auth)/sign-in.tsx"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/sign-up.tsx"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
