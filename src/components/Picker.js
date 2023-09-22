import React, {useState, useEffect} from "react";
import players from "../players.json";

import {Box, Button, Input, Heading, Text, VStack, HStack, Center} from "@chakra-ui/react";

function Picker({role}) {
    const [query, setQuery] = useState('');
    const [player, setPlayer] = useState('');
    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        let list = [];
        for (let i = 0; i < players.length; i++) {
            let player = players[i].toLowerCase();
            if (player.includes(query.toLowerCase())) {
                console.log(player)
                if (list.length < 26) list.push(players[i]);
            }
        }
        setPlayerList(list);
        console.log(playerList);
    }, [query]);
    return (
        <Box justifyContent={'flex-start'}>
            <VStack marginLeft={20}>
                <Text>{role}</Text>
                <Box h={'200px'}>
                    <Heading>{player}</Heading>
                </Box>
                <HStack>
                    <Center>
                        <Button onClick={() => setPlayer('')}>X</Button>
                        <Input placeholder="Search" width={'75%'} value={query}
                               onChange={(e) => setQuery(e.target.value)}/>
                    </Center>
                </HStack>
                <VStack>
                    {query !== "" && playerList.map((player) => (
                        <Center>
                            <Button onClick={() => setPlayer(player)}>{player}</Button>
                        </Center>
                    ))}
                </VStack>
            </VStack>
        </Box>
    );
}

export default Picker;