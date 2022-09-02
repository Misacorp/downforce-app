export const formatFloatToUIStr = (float: number) => Math.round(float);

export const formatISODateToUIDateStr = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("fi-FI");

export const formatISODateToUITimeStr = (isoDate: string) =>
  new Date(isoDate).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

export const formatIndexToUIStr = (index: number) => {
  const lastDigit = Number.parseInt(String(index).slice(-1), 10);

  switch (lastDigit) {
    case 1:
      return `${index}st`;
    case 2:
      return `${index}nd`;
    case 3:
      return `${index}rd`;
    default:
      return `${index}th`;
  }
};
