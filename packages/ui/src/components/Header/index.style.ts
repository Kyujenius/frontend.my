"use client";
import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  background-color: rgb(0, 0, 0);

  z-index: 1000;
`;

export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
export const FancyHeaderText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
`;
export const Divider = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgb(161, 161, 161);
`;
export const HeaderNavItem = styled.div`
  position: relative;
`;

export const HeaderNavLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #000;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const HeaderNavText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const StyledHeaderIcon = styled.img`
  height: 100px;
`;
