export const getFormattedDateParts = (date) => {
  if (!date) return { month: "Select", day: "", weekday: "" };

  const options = { month: "long", day: "numeric", weekday: "long" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).formatToParts(
    date
  );

  let month = "";
  let day = "";
  let weekday = "";

  formattedDate.forEach(({ type, value }) => {
    if (type === "month") month = value;
    if (type === "day") day = value;
    if (type === "weekday") weekday = value;
  });

  return { month, day, weekday };
};
