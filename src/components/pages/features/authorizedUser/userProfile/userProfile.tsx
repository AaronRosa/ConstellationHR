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

export function UserProfile(props: any) {
  const loggedInUser = useSelector(selectCurrentUser);

  if (loggedInUser) {
    return (
      <div>
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
        <div style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          Here's where I would put some content based on each of the menus
        </div>
      </div>
    );
  } else return null;
}

export default UserProfile;
