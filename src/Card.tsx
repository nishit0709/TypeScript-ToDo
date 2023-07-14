import * as React from 'react'

import { Text, Box } from "@chakra-ui/react";

function Card(Props: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div>
      <Box border="2px" w="sm" rounded="lg">
        <Box textAlign="center" key={Props.id}>
          <Text><b>{Props.name}</b></Text>
          <Text>{Props.description}</Text>
          <Text>{Props.status}</Text>

        </Box>
      </Box>
    </div>
  );
}
export default Card;
