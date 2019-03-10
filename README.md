# shared-api-gateway

Sharing an AWS API Gateway across multiple Serverless stacks

## Stacks
- Core: Creates an API Gateway that will be shared across multiple stacks
- ServiceA: Creates ServiceA and connects it to the API Gateway created by Core
- ServiceB: Creates ServiceB and connects it to the API Gateway created by Core

The Core stack exports the `restApiId` and `restApiRootResourceId` using CloudFormation cross-stack references. These are referenced by ServiceA and ServiceB.


## Steps
1. Execute: `npm i`
2. Execute: `npm run deploy`
3. In the AWS console review the following:
   - API Gatway: `dev-shared-api-gateway-core-SharedApiGateway`
     - Verify that there are endpoints for both ServiceA and ServiceB
4. Make a GET request to ServiceA and ServiceB
5. Execute: `npm run remove`