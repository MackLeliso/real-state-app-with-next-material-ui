import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Box
    display={"flex"}
    flexWrap={"wrap"}
    justifyContent="center"
    alignItems={"center"}
    m ={10}
  >
    <Image src={imageUrl} width = {500} height ={500} alt = {'banner'}/>
    <Box p={5}>
      <Typography color={"gray.500"} fontSize={"sm"} fontWeight={"medium"}>
        {purpose}
      </Typography>
      <Typography fontSize={"lg"} fontWeight={"bold"}>
        {title1}
        <br />
        {title2}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        paddingTop={2}
        paddingBottom={3}
        color="gray.700"
      >
        {desc1} <br /> {desc2}
      </Typography>
      <Button fontSize = {1} variant="contained">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Box>
);

export default function Home() {
  return (
    <Box className={styles.container}>
      <Banner
        purpose={"RENT A HOME"}
        title1="Rental Home for"
        title2="Everyone"
        desc1="Explore Apartment, villas, homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Box flexWrap={'wrap'}>
        {/* fetch the properties */}
      </Box>
      <Banner
        purpose={"BUY A HOME"}
        title1="Find, Buy Home for"
        title2="Everyone"
        desc1="Explore Apartment, villas, homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
              {/* fetch the properties */}
    </Box>
  );
}
