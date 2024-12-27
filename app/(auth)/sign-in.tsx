import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import AuthContainer from "@/utils/container/auth-container";
import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import fonts from "@/themes/app.fonts";
import { StyleSheet } from "react-native";
import Images from "@/utils/images";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/shared/InputField";
export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <AuthContainer
      topSpace={windowHeight(150)}
      imageShow={false}
      container={
        <View style={styles.container}>
          <Text style={styles.title}>Create an Account</Text>
          <InputField
            placeholder="Email Address"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(email) => setEmailAddress(email)}
          />
          <InputField
            placeholder="Password "
            placeholderTextColor={Colors.gray}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

          <Pressable style={styles.btn} onPress={onSignInPress}>
            <Text style={styles.btnTxt}>Sign In</Text>
          </Pressable>
          <Text style={styles.loginText}>
            Donot have an account? {""}
            <Link href={"/(auth)/sign-up"} asChild>
              <TouchableOpacity >
                <Text style={styles.loginTxtSpan}>SignUp</Text>
              </TouchableOpacity>
            </Link>
          </Text>
          <View style={styles.divider} />
          {/* <SocialButton emailHref={"/signup"} /> */}
        </View>
      }
    />
    // <View>
    //   <TextInput
    //     autoCapitalize="none"
    //     value={emailAddress}
    //     placeholder="Enter email"
    //     onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
    //   />
    //   <TextInput
    //     value={password}
    //     placeholder="Enter password"
    //     secureTextEntry={true}
    //     onChangeText={(password) => setPassword(password)}
    //   />
    //   <Button title="Sign in" onPress={onSignInPress} />
    //   <View>
    //     <Text>Don't have an account?</Text>
    //     <Link href="/sign-up">
    //       <Text>Sign up</Text>
    //     </Link>
    //   </View>
    // </View>
  );
}
export const styles = StyleSheet.create({
  transformLine: {
    transform: [{ rotate: "-90deg" }],
    height: windowHeight(50),
    width: windowWidth(120),
    position: "absolute",
    left: windowWidth(-50),
    top: windowHeight(-20),
  },
  countryCodeContainer: {
    width: windowWidth(69),
  },
  phoneNumberInput: {
    width: windowWidth(326),
    height: windowHeight(39),
    backgroundColor: color.lightGray,
    borderRadius: 4,
    marginHorizontal: windowHeight(9),
    justifyContent: "center",
    paddingHorizontal: windowHeight(9),
    borderWidth: 1,
    borderColor: color.border,
  },
  rememberMeText: {
    fontWeight: "400",
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT16,
    color: color.primaryText,
  },
  forgotPasswordText: {
    fontWeight: "400",
    fontFamily: fonts.medium,
    color: color.buttonBg,
    fontSize: fontSizes.FONT16,
  },
  newUserContainer: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.mt_12,
    ...external.as_center,
  },
  newUserText: {
    ...commonStyles.regularText,
  },
  signUpText: {
    ...commonStyles.mediumTextBlack12,
    fontFamily: fonts.bold,
    paddingHorizontal: windowHeight(4),
  },
  rememberTextView: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.mt_5,
    ...external.js_space,
  },
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      backgroundColor: Colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "600",
      letterSpacing: 1.2,
      color: Colors.black,
      marginBottom: 50,
    },
    inputField: {
      backgroundColor: Colors.white,
      paddingVertical: 12,
      paddingHorizontal: 18,
      alignSelf: "stretch",
      borderRadius: 5,
      fontSize: 16,
      color: Colors.black,
    },
    btn: {
      backgroundColor: Colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 18,
      alignSelf: "stretch",
      alignItems: "center",
      borderRadius: 5,
      marginBottom: 20,
      marginTop: 20,
    },
    btnTxt: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: "600",
    },
    loginText: {
      marginTop: 30,
      marginBottom: 30,
      fontSize: 14,
      color: Colors.black,
      lineHeight: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    loginTxtSpan: {
      color: Colors.primary,
      fontWeight: "600",
    },
    divider: {
      borderTopColor: Colors.gray,
      borderTopWidth: StyleSheet.hairlineWidth,
      width: "30%",
      marginBottom: 30,
    },
});