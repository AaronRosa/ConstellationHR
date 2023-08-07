import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Divider, Paper, Typography as Typ } from "@mui/material";
import { RegisterLayout, FeaturesLayout, FAQLayout } from "./superLayouts";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
export default function WelcomeLayout() {
  return (
    <Paper style={{ padding: "20px" }}>
      <Typ variant="h1">Constellation HR</Typ>
      <Typ variant="h5">
        <RocketLaunchIcon /> Manage your stars from the stars.
      </Typ>
      <Divider style={{ margin: "10px 0px" }} />

      <RegisterLayout
        message={"Welcome to your crew's human resources manager."}
        showLogin={true}
      />
      <Divider style={{ margin: "10px 0px" }} />
      <FeaturesLayout />
      <Divider style={{ margin: "10px 0px" }} />
      <FAQLayout />
      <RegisterLayout
        message={
          "Are you ready to start commanding with success? Start now!"
        }
        showLogin={false}
      />
    </Paper>
  );
}
