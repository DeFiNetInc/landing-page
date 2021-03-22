/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsConfig)