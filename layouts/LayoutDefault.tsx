import React from 'react';
import styled from 'styled-components';

import './style.css';

import logoUrl from '../assets/logo.svg';
import { Link } from '../components/Link.js';

const StyledLayout = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
`;

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledLayout>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
      </Sidebar>
      <Content>{children}</Content>
    </StyledLayout>
  );
}

const StyledSidebar = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;
`;

function Sidebar({ children }: { children: React.ReactNode }) {
  return <StyledSidebar id="sidebar">{children}</StyledSidebar>;
}

const StyledContent = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
`;

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <StyledContent id="page-content">{children}</StyledContent>
    </div>
  );
}

const StyledLogo = styled.div`
  margin: 20px auto 10px;
`;

function Logo() {
  return (
    <StyledLogo>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </StyledLogo>
  );
}
