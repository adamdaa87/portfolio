import React from 'react';
import { Flex, Text, Image, Icon, Link } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const SideBar = () => {
    const emailAdress = 'adamdaa87@gmail.com';

    return (
        <Flex direction='column' w='50%' bg='white' rounded='3xl' boxShadow='2xl' p='4' justifyContent='center' h='75%'>
            <Flex direction='column' w='full' alignItems='center' gap={3}>

                <Image borderRadius='full' boxSize='150px' src='/assets/imgAvatar.png' alt='Dan Abramov' />

                <Flex gap={2}>
                    <Text fontSize={'3xl'} fontFamily={'kaushan'} color='green'>{'Adam '}</Text>
                    <Text fontSize={'3xl'} fontFamily={'kaushan'}>Daa</Text>
                </Flex>

                <Flex justifyContent='center' bg='gray.300' w='inherit' rounded='2xl' direction='column'>
                    <Text>.NET Developer</Text>
                </Flex>

                <Flex justifyContent='space-evenly' w='full'>
                    <Link href='https://github.com/adamdaa87' target={'_blank'}>
                        <Icon as={AiFillGithub} boxSize='3rem' color='green.400' />
                    </Link>

                    <Link href='https://www.linkedin.com/in/adam-daa-595704b1/' target={'_blank'}>
                        <Icon as={AiFillLinkedin} boxSize='3rem' color='green.400' />
                    </Link>
                </Flex>

                <Flex direction='column' justifyContent='center' alignItems='center' gap={2} bg='gray.300' w='inherit' p={2}>
                    <Flex gap={2}>
                        <Icon as={CiLocationOn} boxSize='1.5rem' />
                        <Text>Stockholm, Sverige</Text>
                    </Flex>

                    <Flex gap={2} as='button' aria-label={`Send email to ${emailAdress}`}
                        onClick={() => window.open(`mailto:${emailAdress}`)}>
                        <Icon as={AiOutlineMail} boxSize='1.5rem' />
                        <Text>{emailAdress}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SideBar;
