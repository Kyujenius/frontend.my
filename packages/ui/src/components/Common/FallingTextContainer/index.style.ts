"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500vh;
  overflow: hidden;
  overscroll-behavior: auto;
  touch-action: pan-y;
`;

export const TextContainer = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  line-height: 1.4;
`;

export const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Word = styled.span<{
  isHighlighted: boolean;
  highlightColor: string;
}>`
  ${(props) =>
    props.isHighlighted &&
    css`
      background-color: ${props.highlightColor};
    `}
`;
