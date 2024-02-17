type Company = {
  id: number;
  name: string;
};

export const companies = [
  {
    id: 1,
    name: "Bell Labs",
  },
  {
    id: 2,
    name: "Sun Microsystems",
  },
] satisfies Company[];
