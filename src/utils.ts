export const formatFloatToUIStr = (float: number) => Math.round(float);

export const formatISODateToUIDateStr = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("fi-FI");

export const formatISODateToUITimeStr = (isoDate: string) =>
  new Date(isoDate).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
