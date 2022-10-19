import * as React from "react";
import {
  Avatar,
  Center,
  Fab,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base";
import profilePicture from "./components/pb.jpg";
import { AntDesign } from "@expo/vector-icons";
import Tabs from "./tabs";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function HomeScreen({ navigation }) {
  return (
    <Stack direction="row" space={5} mt={5} justifyContent="center">
      <Center
        bg="primary.50"
        rounded="md"
        h="572"
        w="300"
        _text={{
          color: "warmGray.50",
          fontWeight: "medium",
        }}
        shadow={"3"}
      >
        <VStack
          space={2}
          alignItems={{
            base: "center",
            md: "flex-start",
          }}
        >
          <Avatar
            alignSelf="center"
            size="2xl"
            h="180"
            w="180"
            source={{
              uri: profilePicture,
            }}
          >
            Aleksander
            <Avatar.Badge bg="primary.50" borderWidth="0">
              {/* TODO: Implement functionality to change profile picture */}
              {/* TODO: Use Native Base Modal for file upload */}
              <Fab
                renderInPortal={false}
                shadow={2}
                right={0}
                bottom={0}
                size="sm"
                icon={
                  <Icon
                    color="secondary.50"
                    as={AntDesign}
                    name="plus"
                    size="sm"
                  />
                }
              />
            </Avatar.Badge>
          </Avatar>
          <Text fontSize="2xl" alignSelf="center" color="secondary.50">
            Aleksander
          </Text>
          <Text fontSize="sm" alignSelf="center" color="secondary.50">
            Ny treningsuke starter på mandag
          </Text>
          {/* TODO: Endre lenke til en beskrivende side */}
          <Link
            _text={{
              color: "secondary.50",
            }}
            href="https://vg.no"
            isUnderlined
            alignSelf="center"
          >
            Slik fungerer evaluering
          </Link>
        </VStack>
      </Center>
      <Center
        bg="primary.50"
        rounded="md"
        h="572"
        w="800"
        _text={{
          color: "warmGray.50",
          fontWeight: "medium",
        }}
        shadow={"3"}
      >
        <LineChart
          data={data}
          width={800}
          height={256}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          bezier
        />
      </Center>
      <Center
        bg="primary.50"
        rounded="md"
        flex={1}
        px="3"
        h="572"
        w="580"
        _text={{
          color: "warmGray.50",
          fontWeight: "medium",
        }}
        shadow={"3"}
      >
        Box 3
      </Center>
    </Stack>
  );
}
