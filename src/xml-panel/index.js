import React from 'react';
import PropTypes from 'prop-types';
import { formatXml } from './helpers';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import foundation from 'react-syntax-highlighter/styles/hljs/foundation';
import lang from 'react-syntax-highlighter/languages/hljs/xml';
import './_xml-panel.scss';
registerLanguage('xml', lang);

export const XmlPanel = ({ xml }) => {
  return (
    <SyntaxHighlighter language="xml" style={foundation}>
      {formatXml(xml)}
    </SyntaxHighlighter>
  );
};

XmlPanel.propTypes = {
  xml: PropTypes.string
};
