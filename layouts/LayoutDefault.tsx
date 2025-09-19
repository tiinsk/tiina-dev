import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div``;

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledLayout>{children}</StyledLayout>;
}
