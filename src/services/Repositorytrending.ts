  type Repo = {
  name: string;
  language: string;
  stars: number | string;
  description: string;
};
  export const repos:Repo[] = [
    {
      name: "math-inc/OpenGauss",
      language: "Python",
      stars: 478,
      description: "",
    },
    {
      name: "FujiwaraChoki/MoneyPrinterV2",
      language: "Python",
      stars: "16.8k",
      description: "Automate the process of making money online.",
    },
  ];