import React from 'react/addons';
import Formwizard from '../lib/formwizard.jsx';

describe('Formwizard', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Formwizard/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('formwizard');
  });
});
