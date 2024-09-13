// import * as React from "react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardMedia,
//   Avatar,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { Skeleton } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// function Media() {
//   const loading = true;

//   return (
//     <>
//       <Skeleton />
//       <Skeleton animation="wave" />
//       <Skeleton animation={false} />
//     </>
//   );
// }

// export default Media;

import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
  Skeleton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Media() {
  const loading = true;

  return (
    <Card>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <Avatar aria-label="recipe">R</Avatar>
          )
        }
        action={
          loading ? (
            <Skeleton variant="rectangular" width={24} height={24} />
          ) : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton width="60%" /> : "Title"}
        subheader={loading ? <Skeleton width="40%" /> : "Subheader"}
      />
      <CardMedia
        component="img"
        height="140"
        image={loading ? "" : "image-url-here"}
        alt="Paella dish"
      />
      <CardContent>
        {loading ? (
          <Skeleton />
        ) : (
          <Typography variant="body2" color="text.secondary">
            Content goes here.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Media;
