import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../../redux/slices/userSlice";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Settings, Mail, Notifications } from "@mui/icons-material";

import AccountSettings from "./tabs/accountSettings";

const userMenu = <Grid sm={12} md={3}>
  <List style={{ float: "left" }}>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        Account Settings
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Mail />
        </ListItemIcon>
        Mail
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Notifications />
        </ListItemIcon>
        Notifications
      </ListItemButton>
    </ListItem>
  </List>
</Grid>;
export function UserProfile(props: any) {
  const loggedInUser = useSelector(selectCurrentUser);

  if (loggedInUser) {
    return (
      <Grid container spacing={1}>
        {userMenu}
        <Grid sm={12} md={9}  >
          <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <AccountSettings />
          </div>
        </Grid>
      </Grid>
    );
  } else return null;
}

export default UserProfile;
