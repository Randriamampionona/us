import { formatDistanceToNowStrict } from "date-fns";

export const formatTimeAgo = (
  timestamp: { seconds: number; nanoseconds: number } | null | undefined
) => {
  if (!timestamp || !timestamp.seconds) return "Just now"; // fallback
  const date = new Date(timestamp.seconds * 1000);
  return formatDistanceToNowStrict(date, { addSuffix: true });
};
