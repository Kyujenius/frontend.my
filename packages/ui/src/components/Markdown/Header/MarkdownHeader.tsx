import styled from "@emotion/styled";

export const MarkdownH1 = () => {
  return <H1>MarkdownH1</H1>;
};
export const MarkdownH2 = () => {
  return <H2>MarkdownH2</H2>;
};

export const MarkdownH3 = () => {
  return <H3>MarkdownH3</H3>;
};

export const MarkdownH4 = () => {
  return <H4>MarkdownH4</H4>;
};

export const MarkdownH5 = () => {
  return <H5>MarkdownH5</H5>;
};

export const MarkdownH6 = () => {
  return <H6>MarkdownH6</H6>;
};

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;

const H4 = styled.h4`
  font-size: 1rem;
  font-weight: 400;
`;

const H5 = styled.h5`
  font-size: 0.875rem;
  font-weight: 300;
`;

const H6 = styled.h6`
  font-size: 0.75rem;
  font-weight: 200;
`;
