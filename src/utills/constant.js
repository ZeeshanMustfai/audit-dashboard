import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";

export const sidebarTabsList = [
  {
    text: "Dashboard",
    key: "dashboard",
    sub: false,
    icon: DashboardIcon,
  },
  {
    text: "Requests",
    key: "requests",
    sub: false,
    icon: RequestPageOutlinedIcon,
  },
  {
    text: "Documents",
    key: "documents",
    sub: false,
    icon: DocumentScannerOutlinedIcon,
  },
  {
    text: "Reports",
    key: "reports",
    sub: false,
    icon: ReportIcon,
  },
  {
    text: "Project Setting",
    key: "setting",
    sub: false,
    icon: SettingsOutlinedIcon,
  },
];
