import * as React from "react";
import { Text, TextInput, Button, View ,StyleSheet, Pressable, TouchableOpacity} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, Stack, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import InputField from "@/components/shared/InputField";
import { SignUp } from "@clerk/clerk-expo/web";
import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import { commonStyles } from "@/styles/common.style";
import fonts from "@/themes/app.fonts";
import AuthContainer from "@/utils/container/auth-container";
import SignInText from "@/components/shared/signin.text";
import OTPTextInput from "react-native-otp-textinput";
import { external } from "@/styles/external.style";
export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(home)");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <>
        {/* <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button title="Verify" onPress={onVerifyPress} /> */}
        <AuthContainer
          topSpace={windowHeight(240)}
          imageShow={true}
          container={
            <View>
              <SignInText
                title={"Email Verification"}
                subtitle={"Check your email address for the otp!"}
              />
              <OTPTextInput
                handleTextChange={(code) => setCode(code)}
                inputCount={6}
                textInputStyle={styles.otpTextInput}
                tintColor={color.subtitle}
                autoFocus={false}
              />
              <View style={[external.mt_30]}>
                <Button
                  title="Verify"
                  onPress={onVerifyPress}
                  // disabled={loader}
                />
              </View>
              <View style={[external.mb_15]}>
                <View
                  style={[
                    external.pt_10,
                    external.Pb_10,
                    { flexDirection: "row", gap: 5, justifyContent: "center" },
                  ]}
                >
                  <Text style={[commonStyles.regularText]}>
                    Not Received yet?
                  </Text>
                  <TouchableOpacity>
                    <Text style={[styles.signUpText, { color: "#000" }]}>
                      Resend it
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />
      </>
    );
  }

  return (
    <>
      {/* <Text>Sign up</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button title="Continue" onPress={onSignUpPress} /> */}
      <Stack.Screen
        options={{
          headerTitle: "SignUp",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="close" size={14} color={Colors.black} />
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(email) => setEmailAddress(email)}
          value={emailAddress}
        />
        <InputField
          placeholder="Password "
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        <Pressable style={styles.btn} onPress={onSignUpPress}>
          <Text style={styles.btnTxt}>Continue</Text>
        </Pressable>
        <Text style={styles.loginText}>
          Already have an account? {""}
          <Link href={"/signin"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>SignIn</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} id="clerk-captcha" />
        {/* <SocialButton emailHref={"/signin"} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  otpTextInput: {
    backgroundColor: color.lightGray,
    borderColor: color.lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    width: windowWidth(60),
    height: windowHeight(40),
    borderBottomWidth: 0.5,
    color: color.subtitle,
    textAlign: "center",
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(10),
  },
  signUpText: {
    ...commonStyles.mediumTextBlack12,
    fontFamily: fonts.bold,
    paddingHorizontal: 5,
  },
});
