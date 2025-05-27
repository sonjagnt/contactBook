import { CircularProgress } from "@mui/material";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.container}>
      <CircularProgress />
    </div>
  );
};
