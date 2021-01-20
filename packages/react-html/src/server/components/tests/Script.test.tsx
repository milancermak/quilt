import React from 'react';
import {mount} from '@shopify/react-testing';

import {Script} from '../Script';

describe('<Script />', () => {
  it('renders attributes', () => {
    const script = mount(
      <Script
        src="foo.js"
        integrity="00000000"
        crossOrigin="anonymous"
        defer
      />,
    );

    expect(script).toContainReactComponent('script', {
      src: 'foo.js',
      integrity: '00000000',
      crossOrigin: 'anonymous',
      defer: true,
    });
  });

  it('defaults type to text/javascript', () => {
    const script = mount(<Script src="foo.js" />);

    expect(script).toContainReactComponent('script', {
      src: 'foo.js',
      type: 'text/javascript',
    });
  });

  it('accepts type overrides', () => {
    const script = mount(<Script src="foo.js" type="module" />);

    expect(script).toContainReactComponent('script', {
      src: 'foo.js',
      type: 'module',
    });
  });
});
