import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['BusinessOwner'];
  const roles = ['BusinessOwner', 'BusinessOwner', 'Manager', 'Customer'];
  const applicationName = 'Open Cap v54';
  const tenantName = 'Restaurant';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `1. As a BusinessOwner, I want to create a Restaurant profile with basic information (name, address, phone number, email, cuisine type) so that my restaurant can be found by potential customers.

2. As a BusinessOwner, I want to invite Managers to join the platform and manage my Restaurant so that I can delegate tasks and responsibilities.

3. As a Manager, I want to accept the invitation from the BusinessOwner and create my account so that I can manage the Restaurant.

4. As a Manager, I want to update the Restaurant's information (name, address, phone number, email, cuisine type) so that it remains accurate and up-to-date.

5. As a Manager, I want to create, update, and delete table reservations for customers so that I can manage the restaurant's bookings efficiently.

6. As a Manager, I want to view a list of all table reservations for a specific date and time so that I can plan and organize the restaurant's operations.

7. As a Customer, I want to search for a Restaurant by name, location, or cuisine type so that I can find a suitable place to dine.

8. As a Customer, I want to view a Restaurant's profile with basic information (name, address, phone number, email, cuisine type) so that I can decide if I want to make a reservation.

9. As a Customer, I want to create an account with my personal information (name, email, phone number) so that I can make table reservations.

10. As a Customer, I want to make a table reservation at a Restaurant by selecting a date, time, and number of guests so that I can secure a table for my desired dining experience.

11. As a Customer, I want to view, update, or cancel my table reservations so that I can manage my bookings according to my needs.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="20px" bottom="20px" zIndex={3}>
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="400px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
