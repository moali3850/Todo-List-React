
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#191b1f",
        color: "white",
        textAlign: "center",
        padding: "25px 20px",
        marginTop: "30px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Mohamed Ali
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/moali3850/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              color: "#0A66C2",
            },
          }}
        >
          <LinkedInIcon />
          LinkedIn
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/moali3850"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              color: "#aaa",
            },
          }}
        >
          <GitHubIcon />
          GitHub
        </Link>

        {/* Portfolio */}
        <Link
          href="https://moali3850.github.io/My_Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              color: "#c62828",
            },
          }}
        >
          <LanguageIcon />
          Portfolio
        </Link>
      </Box>

      <Typography
        variant="body2"
        sx={{
          marginTop: "20px",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} Mohamed Ali. All rights reserved.
      </Typography>
    </Box>
  );
}
