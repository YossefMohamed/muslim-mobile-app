import styled from "styled-components";
const defaultTextStyles = (theme: any) => `
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};  
  font-family: ${theme.fonts.body};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;
const title = (theme: any) => `
    font-size: ${theme.fontSizes.title};
    
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.caption};

`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const link = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.link};
    
`;
const header = (theme: any) => `
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
`;
const label = (theme: any) => `
    font-size: ${theme.fontSizes.body};  
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
`;
const paragraph = (theme: any) => `
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
color: ${theme.colors.text.secondary};
line-height: ${theme.lineHeights.copy};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  paragraph,
  title,
  link,
  header,
};

export const Text = styled.Text<ITextProps>`
  ${({ theme }: ITextProps) => defaultTextStyles(theme)};
  ${({ variant, theme }: ITextProps) => variants[variant](theme)};
  ${({ color }: ITextProps) => color && `color : ${color}`};
`;

interface ITextProps {
  theme: any;
  variant:
    | "body"
    | "label"
    | "caption"
    | "error"
    | "hint"
    | "title"
    | "header"
    | "link"
    | "paragraph";
  color?: string;
}
