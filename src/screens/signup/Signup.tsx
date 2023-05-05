import React from "react";

import images from "../../../assets/images";
import { Formik } from "formik";

import { SignupValidationSchema } from "./SignupValidationSchema";
import { Text } from "../../components/typography";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import {
  CaptionContainer,
  Center,
  ForgetPasswordContainer,
  ImageContainer,
  ImageContainerView,
  LinkContainer,
  LoginContainer,
  TextInputContainer,
} from "./Signup.styles";
import { ScrollView } from "react-native-gesture-handler";
function SignupScreen({ navigation }: any) {
  return (
    <ScrollView>
      <LoginContainer>
        <ImageContainerView>
          <ImageContainer source={images.signup_avatar} resizeMode="contain" />
        </ImageContainerView>
        <CaptionContainer>
          <Text variant="header">Let's Start ! 😄</Text>
          <Text variant="caption">Sign up to start your journey</Text>
        </CaptionContainer>

        <Formik
          validationSchema={SignupValidationSchema}
          initialValues={{ email: "", password: "", fullName: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }: any) => (
            <>
              <TextInputContainer>
                <Text variant="caption">Full name</Text>

                <CustomTextInput
                  name="fullName"
                  placeholder="Your name"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  error={!!errors.fullName}
                />
                {errors.fullName && (
                  <Text variant="error">{errors.fullName}</Text>
                )}
              </TextInputContainer>
              <TextInputContainer>
                <Text variant="caption">Email</Text>

                <CustomTextInput
                  name="email"
                  placeholder="Email Address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={!!errors.email}
                  keyboardType="email-address"
                />
                {errors.email && <Text variant="error">{errors.email}</Text>}
              </TextInputContainer>
              <TextInputContainer>
                <Text variant="caption">Password</Text>
                <CustomTextInput
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  error={!!errors.password}
                />
                {errors.password && (
                  <Text variant="error">{errors.password}</Text>
                )}
              </TextInputContainer>

              <TextInputContainer>
                <Text variant="caption">Confirm password</Text>
                <CustomTextInput
                  placeholder="Password confirm"
                  onChangeText={handleChange("passwordConfirmation")}
                  onBlur={handleBlur("passwordConfirmation")}
                  value={values.passwordConfirmation}
                  secureTextEntry
                  error={!!errors.passwordConfirmation}
                />
                {errors.passwordConfirmation && (
                  <Text variant="error">{errors.passwordConfirmation}</Text>
                )}
              </TextInputContainer>
              <ForgetPasswordContainer></ForgetPasswordContainer>
              <TextInputContainer>
                <CustomButton text="Sign Up" onPress={handleSubmit} />
              </TextInputContainer>
            </>
          )}
        </Formik>
        <Center>
          <Text variant="label">OR</Text>
        </Center>
        <LinkContainer>
          <CustomButton
            text="sign In"
            link={true}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </LinkContainer>
      </LoginContainer>
    </ScrollView>
  );
}

export default SignupScreen;
