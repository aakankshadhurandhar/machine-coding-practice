import React from 'react'
import { SimpleGrid } from "@chakra-ui/react"
import Card from "../Card/Card"
function Main({ data }) {
    console.log(data)
    return (
        
        <div>
            <SimpleGrid columns={4} spacingX={16} spacingY={12} mt={20}>
      {data.map((a) => (
        <Card
          key={a.id}
          brand={a.brand}
          name={a.name}
          price={a.price}
          image={a.link}
        />
      ))}
    </SimpleGrid>
        </div>
    )
}

export default Main
