import "@emotion/react";

// declarations.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "@emotion/react" {
  export interface Theme {
    colors?: {
      primary: string;
      secondary: string;
    };
  }
}
