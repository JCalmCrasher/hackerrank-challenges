function timeConversion(s: string): string {
  // Write your code here
  const PM_VALUES: { [key: string]: string } = {
    "01": "13",
    "02": "14",
    "03": "15",
    "04": "16",
    "05": "17",
    "06": "18",
    "07": "19",
    "08": "20",
    "09": "21",
    "10": "22",
    "11": "23",
    "12": "12",
  };

  const timeInputs = getInputTimeParams(s);
  if (timeInputs.timePeriod === "AM" && timeInputs.hh === "12") {
    return `00:${timeInputs.mm}:${timeInputs.ss}`;
  } else if (timeInputs.timePeriod === "PM") {
    return `${PM_VALUES[timeInputs.hh]}:${timeInputs.mm}:${timeInputs.ss}`;
  }
  return `${timeInputs.hh}:${timeInputs.mm}:${timeInputs.ss}`;
}

function getInputTimeParams(t: string) {
  const timePeriod: TimePeriod =
    t.split(":")[2].slice(2) === "PM" ? "PM" : "AM";
  const inputTimeParams = t.slice(0, 8).split(":");

  return {
    hh: inputTimeParams[0],
    mm: inputTimeParams[1],
    ss: inputTimeParams[2],
    timePeriod,
  };
}

type TimePeriod = "AM" | "PM";
