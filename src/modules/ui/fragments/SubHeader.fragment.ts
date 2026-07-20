import { graphql } from "../../../graphql/client";

const SubHeaderFragment = graphql(`
  fragment SubHeaderFragment on Category {
    id
    name
  }
`);

export default SubHeaderFragment;
