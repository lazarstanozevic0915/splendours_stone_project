import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface ProjectCardProps {
  defaultImage: string; // URL for the default image
  hoverImage: string;   // URL for the hover image
  defaultTitle: string; // Title displayed in the default state
  hoverTitle: string;   // Title displayed in the hover state
  description: string;  // Description displayed in both states
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  defaultImage,
  hoverImage,
  defaultTitle,
  hoverTitle,
  description,
}) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: 300, // Adjust width as needed
        borderRadius: "15px",
        overflow: "hidden",
        "&:hover .defaultState": {
          opacity: 0,
        },
        "&:hover .hoverState": {
          opacity: 1,
        },
      }}
    >
      {/* Default State */}
      <Box
        className="defaultState"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          transition: "opacity 0.4s ease-in-out",
          opacity: 1,
        }}
      >
        <CardMedia
          component="img"
          image={defaultImage}
          alt={defaultTitle}
          sx={{ width: "100%", height: 200, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: 600 }}>
            {defaultTitle}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
            {description}
          </Typography>
        </CardContent>
      </Box>

      {/* Hover State */}
      <Box
        className="hoverState"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.4s ease-in-out",
          opacity: 0,
        }}
      >
        <CardMedia
          component="img"
          image={hoverImage}
          alt={hoverTitle}
          sx={{ width: "50%", height: "50%", objectFit: "cover", borderRadius: "10px" }}
        />
        <IconButton
          sx={{
            backgroundColor: "#F9C275",
            width: 70,
            height: 70,
            marginTop: 2,
            "&:hover": { backgroundColor: "#E8B060" },
          }}
        >
          <SearchIcon sx={{ fontSize: 36, color: "white" }} />
        </IconButton>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {hoverTitle}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProjectCard;
