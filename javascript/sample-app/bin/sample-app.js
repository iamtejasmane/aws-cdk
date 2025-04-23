#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { SampleAppStack } = require('../lib/sample-app-stack');

const app = new cdk.App();
new SampleAppStack(app, 'SampleAppStack');
