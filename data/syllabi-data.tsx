// data/library-data.tsx

// Define the type for syllabi data
export interface AcademicYear {
    year: string;
    pdfLink: string;
  }
  
  export interface Department {
    department: string;
    academicYears: AcademicYear[];
  }
  //TODO: INTEGRATE THE ACTUAL DATA
  export const undergraduateSyllabi: Department[] = [
    {
      department: "CSE",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/cse-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/cse-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "IT",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/it-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/it-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "AIDS",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/aids-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/aids-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "Civil",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/civil-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/civil-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "Mechanical",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/mechanical-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/mechanical-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "ECE",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/ece-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/ece-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "EEE",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/eee-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/eee-syllabus-2022-2023.pdf"
        }
      ]
    }
  ];
  
  export const postgraduateSyllabi: Department[] = [
    {
      department: "MCA",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/mca-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/mca-syllabus-2022-2023.pdf"
        }
      ]
    },
    {
      department: "MBA",
      academicYears: [
        {
          year: "2023-2024",
          pdfLink: "https://example.com/mba-syllabus-2023-2024.pdf"
        },
        {
          year: "2022-2023",
          pdfLink: "https://example.com/mba-syllabus-2022-2023.pdf"
        }
      ]
    }
  ];