import React, {useState, useEffect} from "react";
import players from "../players.json";

import Picker from "../components/Picker";
import {Box, Button, Input, Text, VStack, HStack, Center} from "@chakra-ui/react";


function Builder() {

    return (
        <Box>
            <Text>hey</Text>
            <Center>
                <VStack>
                    <Text fontSize="6xl" color={'black'}>Team Builder</Text>
                    <Box display={'flex'}>
                        <Picker role={'top'}/>
                        <Picker role={'jungle'}/>
                        <Picker role={'mid'}/>
                        <Picker role={'adc'}/>
                        <Picker role={'support'}/>
                    </Box>


                </VStack>

            </Center>
        </Box>
    );
}

export default Builder;
