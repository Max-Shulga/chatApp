import InfoBlockKeys from "@/common/enums/upwork-feed/upwork-type-info-block.enum";

function processValue(value: string, key: keyof typeof InfoBlockKeys): string {
  if (key === "Published" && value) {
    const startDate = new Date(value);
    const currentDate = new Date();
    const startDateString = `${
      startDate.getMonth() + 1
    }/${startDate.getFullYear()}`;
    const currentDateString = `${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    return `${startDateString} - ${currentDateString}`;
  }

  return value;
}
export default processValue;
