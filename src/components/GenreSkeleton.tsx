import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card paddingY="5px">
      <HStack>
        <Skeleton height="20px" />
        <SkeletonText />
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
