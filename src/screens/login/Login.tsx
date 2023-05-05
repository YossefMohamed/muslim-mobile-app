import React from "react";

import images from "../../../assets/images";
import { Formik } from "formik";

import { loginValidationSchema } from "./loginValidationSchema";
import { Text } from "../../components/typography";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import {
  CaptionContainer,
  Center,
  ForgetPasswordContainer,
  ImageContainer,
  LinkContainer,
  LoginContainer,
  TextInputContainer,
} from "./Login.styles";
function LoginScreen({ navigation }: any) {
  return (
    <>
      <LoginContainer>
        <ImageContainer source={images.login_avatar} resizeMode="contain" />

        <CaptionContainer>
          <Text variant="header">Welcome back ! 😄</Text>
          <Text variant="caption">Sign in to start your journey</Text>
        </CaptionContainer>

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
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
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  error={!!errors.email}
                />
                {errors.password && (
                  <Text variant="error">{errors.password}</Text>
                )}
              </TextInputContainer>

              <ForgetPasswordContainer>
                <Text variant="caption">Forget Password ?</Text>
              </ForgetPasswordContainer>
              <TextInputContainer>
                <CustomButton text="Sign in" onPress={handleSubmit} />
              </TextInputContainer>
            </>
          )}
        </Formik>
        <Center>
          <Text variant="label">OR</Text>
        </Center>
        <LinkContainer>
          <CustomButton
            text="sign up"
            link={true}
            onPress={() => navigation.navigate("SignupScreen")}
          />
        </LinkContainer>
      </LoginContainer>
    </>
  );
}

export default LoginScreen;
