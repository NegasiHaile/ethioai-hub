export const projects = [
  {
    id: 1,
    title: "HornMT",
    languages_used: ["Python", "Pytorch"], // Languages and libraries used
    creator: ["Lesan AI", "Asmelash Teka", "Gebrekirstos G. Gebremeskel"], // Who created the project
    description: `The HornMT repository contains data and the associated metadata for the project Machine Translation Benchmark Dataset for Languages in the Horn of Africa. It is a multi-way parallel corpus that will serve as a benchmark to accelerate progress in machine translation research and production systems for languages in the Horn of Africa.`,
    featured: true, // true/false
    domain: [
      "Health",
      "Politics",
      "Education",
      "Agriculture",
      "Bussiness",
      "Art and Culture",
      "Disaster and Accidents",
    ],
    category: ["Dataset"], // Dataset, Model, Paper
    field: "NLP", // Computer Vision, NLP ...
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/asmelashteka/HornMT",
      },
      {
        id: 2,
        name: "NIH",
        link: "https://data.niaid.nih.gov/resources?id=zenodo_6369441",
      },
    ],
    year: "2024", // The year that the project published
    content: "Dataset",
  },

  {
    id: 2,
    title: "Afro Chest X-ray",
    languages_used: ["Python", "pydicom", "dicom2jpg"], // Languages and libraries used
    creator: ["Negasi Haile", "Asmelash Teka", "Lesan AI"], // Who created the project
    description: `The Chest X-ray Imaging Dataset for Multiple Cardio-respiratory Diseases in Ethiopia (Afro Chest X-ray for short) is a project funded by the LacunaFund whose aim is to close the gap in health disparities by fostering interdisciplinary collaborations that create, expand, or aggregate labeled training and evaluation datasets.`,
    featured: true, // true/false
    domain: ["Health"], // Health, Language, Sport, Bussines, Agriculture
    category: ["Dataset"], // Dataset, Model, Paper
    field: "Computer Vision", // Computer Vision, NLP ...
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/asmelashteka/Afro-Chest-X-ray",
      },
      {
        id: 2,
        name: "Hugging Face",
        link: "https://github.com/asmelashteka/Afro-Chest-X-ray",
      },
    ],
    year: "2024", // The year that the project published
    content: "Dataset",
  },
  {
    id: 3,
    title: "AGE: Amharic, Ge'ez, English Dataset",
    languages_used: ["Python", "pydicom", "dicom2jpg"], // Languages and libraries used
    creator: ["Henok Biadglign Ademtew", "Mikiyas Girma Birbo"], // Who created the project
    description: `AGE, an open-source tripartite alignment of Amharic, Ge’ez, and English parallel dataset. Additionally, we introduced a novel, 1,000 Ge’ez-centered sentences sourced from areas such as news and novels.`,
    featured: true, // true/false
    domain: [
      "Religion",
      "Health",
      "Politics",
      "Education",
      "Agriculture",
      "Bussiness",
      "Art and Culture",
    ],
    category: ["Dataset"], // Dataset, Model, Paper
    field: "NLP", // Computer Vision, NLP ...
    links: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/HenokB/AGE-Dataset/",
      },
      {
        id: 2,
        name: "Hugging Face",
        link: "https://huggingface.co/datasets/Henok/age_dataset",
      },
    ],
    year: "2024", // The year that the project published
    content: "Dataset",
  },
];
