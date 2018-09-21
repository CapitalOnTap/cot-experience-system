import { Heading1, Paper } from 'cot-experience';
import { Box, Flex } from 'grid-styled';
import Link from 'next/link';
import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import Category from '../components/Category';

const StyledBox = styled(Box)`
  display: flex;
  > div {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: initial;
  }
`;

class Index extends PureComponent {
  state = {};

  render() {
    return (
      <Fragment>
        <Flex justify="center" mb={3}>
          <Heading1>Design, develop, and deliver</Heading1>
        </Flex>
        <Flex justify="center" mb={4}>
          <Box>
            <p>
              {
                "Use Capital On Tap's end-to-end design language to create straightforward and beautiful experiences."
              }
            </p>
          </Box>
        </Flex>
        <Flex wrap>
          <StyledBox w={[1, 1 / 3]} pr={[0, 3]} mb={[3, 0]}>
            <Link href="/brand">
              <a>
                <Paper>
                  <Flex mb={2}>
                    <Category name="Brand" />
                  </Flex>
                  <Flex>
                    <p>Foundations, including personality, writing style, color, and type.</p>
                  </Flex>
                </Paper>
              </a>
            </Link>
          </StyledBox>
          <StyledBox w={[1, 1 / 3]} pr={[0, 3]} mb={[3, 0]}>
            <Link href="/marketing">
              <a>
                <Paper>
                  <Flex mb={2}>
                    <Category name="Marketing" color="#FF7183" />
                  </Flex>
                  <Flex>
                    <p>How color, type, tone and illustration are used in marketing.</p>
                  </Flex>
                </Paper>
              </a>
            </Link>
          </StyledBox>
          <StyledBox w={[1, 1 / 3]}>
            <Link href="/components">
              <a>
                <Paper>
                  <Flex mb={2}>
                    <Category name="Components" color="#f5a623" />
                  </Flex>
                  <Flex>
                    <p>Foundations, components, and patterns for building applications</p>
                  </Flex>
                </Paper>
              </a>
            </Link>
          </StyledBox>
        </Flex>
      </Fragment>
    );
  }
}

Index.propTypes = {};

export default Index;
