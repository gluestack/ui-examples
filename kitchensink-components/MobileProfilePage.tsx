import React from "react";

import {
  HStack,
  Text,
  Heading,
  Avatar,
  VStack,
  Link,
  Icon,
  Pressable,
  Divider,
  Button,
} from "../gluestack-ui-components";
import {
  Blinds,
  ChevronRight,
  Headphones,
  HeartHandshake,
  Settings,
  Tablets,
  User,
} from "lucide-react-native";
import { ScrollView } from "react-native";

const MobileProfilePage = () => {
  return (
    <ScrollView>
      <VStack px="$5" py="$4" space="lg" flex={1}>
        <Heading>Profile</Heading>
        <ProfileCard />
        <Divider />
        <PersonalInfoSection />
        <Divider />
        <HostingSection />
        <Divider />
        <SupportSection />
        <Divider />
        <LogoutButton />
      </VStack>
    </ScrollView>
  );
};

const ProfileCard = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack space="md">
        <Avatar bg="$blue600">
          <Avatar.FallbackText>Amit Trivedi</Avatar.FallbackText>
          <Avatar.Image
            source={
              {
                // uri: "https://images.unsplash.com/photo-1494790108377-be9c29b2933",
              }
            }
          />
        </Avatar>
        <VStack>
          <Text>Amit Trivedi</Text>
          <Link>
            <Text color="$textLight500" size="sm">
              Show Profile
            </Text>
          </Link>
        </VStack>
      </HStack>
      <Pressable>
        <Icon as={ChevronRight} />
      </Pressable>
    </HStack>
  );
};

const PersonalInfoSection = () => {
  return (
    <VStack space="md">
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={User} />
          <Text>Personal Info</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Settings} />
          <Text>Account</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const HostingSection = () => {
  return (
    <VStack space="md">
      <Heading>Hosting</Heading>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Blinds} />
          <Text>Host a home</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Tablets} />
          <Text>Host an experience</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const SupportSection = () => {
  return (
    <VStack space="md">
      <Heading>Support</Heading>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={HeartHandshake} />
          <Text>Get Help</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Icon as={Headphones} />
          <Text>Contact Support</Text>
        </HStack>
        <Pressable>
          <Icon as={ChevronRight} />
        </Pressable>
      </HStack>
    </VStack>
  );
};

const LogoutButton = () => {
  return (
    <Button action="secondary" variant="outline">
      <Button.Text>Logout</Button.Text>
    </Button>
  );
};

export default MobileProfilePage;
