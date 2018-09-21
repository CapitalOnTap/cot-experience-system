// import { Heading1, Heading2, Title } from 'cot-experience';
import { Heading1, Heading2, Title } from 'cot-experience';
import React from 'react';
import Document from '../md/brand/personality.md';

export default () => <Document components={{ h1: Heading1, h2: Heading2, h3: Title }} />;
