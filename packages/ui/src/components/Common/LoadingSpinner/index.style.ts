import { motion, useAnimation } from "framer-motion";

import styled from "@emotion/styled";

export const CircularContainer = styled(motion.div)`
  margin: 0 auto;
  border-radius: 50%;
  width: 200px;
  position: relative;
  height: 200px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
`;

export const Letter = styled(motion.span)<{ transform: string }>`
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 24px;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1);
  transform: ${({ transform }) => transform};
`;
