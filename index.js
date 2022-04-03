const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
];

const data = {
  labels: labels,
  datasets: [
    {
      type: "line",
      label: "Waste",
      data: [12, 22, 35, 20, 28, 38, 02, 12, 11, 8, 7, 4, 29, 8],
      backgroundColor: "#fdb901",
      borderColor: "#766A55",
      tension: "1",
      borderDash: [5, 5],
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 0.3,
          to: 0,
          loop: true,
        },
      },
    },
    {
      type: "line",
      label: "Energy",
      data: [10, 20, 15, 40, 18, 28, 22, 32, 21, 7, 9, 14, 19, 38],
      backgroundColor: "#ff5755",
      color: "#ff5755",
      borderColor: "#ff5755",
      pointStyle: "rectRot",
      tension: "0.5",
      animations: {
        borderWidth: {
          duration: 1000,
          easing: "linear",
          from: 3,
          to: 1,
          loop: true,
        },
      },
    },

    {
      type: "line",
      label: "Water",
      data: [8, 15, 25, 38, 8, 18, 32, 32, 31, 5, 4, 1, 2, 8],
      backgroundColor: "#87bfff",
      color: "#87bfff",
      borderColor: "#87bfff",
      pointStyle: "rectRot",
      tension: "0.5",
      animations: {
        borderWidth: {
          duration: 1000,
          easing: "linear",
          from: 3,
          to: 1,
          loop: true,
        },
      },
    },
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 15, 40, 18, 28, 22, 32, 21, 7, 9, 14, 19, 38],
      backgroundColor: "black",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    layout: {
      padding: 10,
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 45,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
