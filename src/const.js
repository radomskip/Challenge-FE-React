const transportOptions = {
  data: {
    car: { amount: 100, description: "Car" },
    bus: { amount: 50, description: "Bus" },
    bike: { amount: 10, description: "Bicycle" },
    airplane: { amount: 500, description: "Airplane" },
    helicopter: { amount: 200, description: "Helicopter" },
    boat: { amount: 200, description: "Boat" },
    ship: { amount: 400, description: "Ship" },
    yacht: { amount: 1000, description: "Yacht" },
  },
  transportType: {
    car: "land",
    bus: "land",
    bike: "land",
    airplane: "air",
    helicopter: "air",
    boat: "maritime",
    ship: "maritime",
    yacht: "maritime",
  },
};

const transOptEntries = Object.entries(transportOptions.data);

const transWithType = transOptEntries.map(([key, values]) => {
  const type = transportOptions.transportType[key];
  return { key, values: { ...values, type } };
});

const newData = transWithType.reduce(
  (ant, { key, values }) => ({ ...ant, [key]: values }),
  {}
);

const keys = Object.keys(transportOptions.data);

const transtTypeValuesSet = new Set(
  Object.values(transportOptions.transportType)
);

const transportType = `Listado de ${Array.from(transtTypeValuesSet)
  .map((c) => c.toUpperCase())
  .join(" - ")}`;

export const transportOptionsFormatted = {
  data: newData,
  keys,
  transportType,
};
