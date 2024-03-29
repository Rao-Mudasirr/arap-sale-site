import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import FormationBookHeroImg from "@root/assets/services/images/formation-book/FormationBookHero.png";

const FormationBookHero = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        margin={"auto"}
        paddingX={{ xs: 1, md: 5 }}
        color={"primary.main"}
      >
        <Typography variant="h1">Formation Book</Typography>
        <Typography variant="h5">
          Your Gateway to Seamless Business Establishment
        </Typography>
        <Typography
          variant="body1"
          mt={1}
          width={"90%"}
          color={"primary.lighter"}
        >
          Welcome to Formation Book, your all-in-one solution for starting and
          managing your business journey. We understand that starting a company
          can be daunting, and that's why we've crafted a service that
          simplifies the process, saving you time and effort.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"end"}>
        <Image
          src={FormationBookHeroImg}
          alt={"Formation Book"}
          width={0}
          height={0}
          style={{ width: "90%", height: "90%" }}
        />
      </Grid>
    </Grid>
  );
};

export default FormationBookHero;
