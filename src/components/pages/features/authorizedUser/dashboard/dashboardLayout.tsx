import { useDispatch, useSelector } from "react-redux";
import NeedsReview from "./needsReview";

function DashboardLayout() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Dashboard</h1>
      <NeedsReview />
    </div>
  );
}

export default DashboardLayout;
