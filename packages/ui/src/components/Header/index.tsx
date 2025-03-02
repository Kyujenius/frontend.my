import React from "react";

import "./index.style.ts";
import {
  HeaderContainer,
  HeaderNavContainer,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavText,
  FancyHeaderText,
} from "./index.style";

export const Header = ({ logo }: { logo: string }) => (
  <HeaderContainer>
    <HeaderNavItem>
      <HeaderNavLink href="/">
        <FancyHeaderText>kyujin.dev</FancyHeaderText>
      </HeaderNavLink>
    </HeaderNavItem>

    <HeaderNavContainer>
      <HeaderNavItem>
        <HeaderNavLink href="/blog">
          <HeaderNavText>Blog</HeaderNavText>
        </HeaderNavLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderNavLink href="/about">
          <HeaderNavText>About Me</HeaderNavText>
        </HeaderNavLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderNavLink href="/contact">
          <HeaderNavText>Contact Me</HeaderNavText>
        </HeaderNavLink>
      </HeaderNavItem>
    </HeaderNavContainer>
  </HeaderContainer>
);
