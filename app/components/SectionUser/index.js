import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import WidgetUser from '../WidgetUser';
import WidgetActiveUser from '../WidgetActiveUser';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto 350px;
`;

const ContentColumn = styled.div`
  max-width: 100%;
`;

const SectionUser = () => (
  <Section>
    <Wrapper>
      <ContentColumn width="70%">
        <WidgetUser />
      </ContentColumn>
      <ContentColumn width="30%">
        <WidgetActiveUser />
      </ContentColumn>
    </Wrapper>
  </Section>
);

export default SectionUser;
