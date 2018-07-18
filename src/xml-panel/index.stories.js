/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { XmlPanel } from './index';

storiesOf('XmlPanel', module)
  .add('Wellformed xml', () => (
    <XmlPanel
      xml={
        '<location> <country><country>Россия</country><iso2>RU</iso2></country><index>119001</index><town>Москва</town><street>аэропорт Шереметьево</street><house><house>терминал D</house></house><flat>2</flat></location>'
      }
    />
  ))
  .add('Valid wellformed xml', () => (
    <XmlPanel
      xml={
        '<?xml version=\'1.0\' encoding=\'UTF-8\' ?><xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"><xsd:element name="designator" type="designatorCodeType"/><xsd:complexType name="designatorCodeType"><xsd:sequence><xsd:element name="code" type="xsd:string" /></xsd:sequence></xsd:complexType></xsd:schema>'
      }
    />
  ));
