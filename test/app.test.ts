import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

import { MyStack } from '../lib/stack';

test('Lambda function created', () => {
  const app = new cdk.App();
  const stack = new MyStack(app, 'MyTestStack');

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.handler',
  });
});
