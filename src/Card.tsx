import * as React from 'react'

import { Text, Box } from "@chakra-ui/react";

function Card(props: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div>
      <Box border="2px" w="sm" rounded="lg">
        <Box textAlign="center">
          <Text><b>{props.name}</b></Text>
          <Text>{props.description}</Text>
          <Text>{props.status}</Text>

        </Box>
      </Box>
    </div>
  );
}
export default Card;
