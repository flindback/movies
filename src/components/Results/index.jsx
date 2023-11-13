import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const Results = ({ results }) => {
  const {
    data: { results: movies },
  } = results;
  return (
    <div>
      {results.data ? (
        <div>
          <h1>Results</h1>
          {movies.map((movie) => {
            return (
              <Card
                size="md"
                direction={{ base: "column", sm: "row", md: "row" }}
                overflow="hidden"
                variant="outline"
                m="6"
              >
                {movie.poster_path ? (
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} poster image`}
                    borderRadius="lg"
                  />
                ) : (
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={`https://via.placeholder.com/200x300?text=${movie.title}`}
                    alt={`${movie.title} placeholder image`}
                    borderRadius="lg"
                  />
                )}
                <Stack>
                  <CardBody>
                    <Heading size="md">{movie.title}</Heading>

                    <Text py="2">{movie.overview}</Text>
                  </CardBody>

                  <CardFooter justify={"center"}>
                    <Button variant="solid" colorScheme="blue">
                      Visit Movie Page
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Results;
