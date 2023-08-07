import { Grid, Stack } from "@mui/material";
import Feature from "./feature/feature";

export interface FeatureProp {
  title: string;
  description: string;
  imagePath?: string;
}

const test: FeatureProp = {
  title: "Transfers",
  description:
    "Easily manage who gets transferred to fellow ships, and when you expect them back.  Also manage crew members who are temporarily assigned to your ship.",
};

const test1: FeatureProp = {
  title: "Training",
  description:
    "Assign your crew standard training material or specific material based off their specialty.",
};

const test2: FeatureProp = {
  title: "Offworld Management",
  description:
    "Manage your offworld teams to ensure a wide range of skills are accounted for with each away team.",
};

function FeaturesLayout() {
  return (
    <Stack>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Feature feature={test} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature feature={test1} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feature feature={test2} />
        </Grid>
      </Grid>
    </Stack>
  );
}
export default FeaturesLayout;
