// ===================================================
// LIBRARY DATA FILE
// ===================================================
// This file contains all the data for the library website.
// Edit this file to update content across the entire site.
// ===================================================

import {
  BookOpen,
  Info,
  FileText,
  BookCopy,
  GalleryVerticalEnd,
  Search,
  BookMarked,
  ScrollText,
  Newspaper,
  Contact,
} from "lucide-react"

// Site Information
// ===================================================
// Basic information about the site and user

export const libraryData = {
  siteInfo: {
    name: "College Library",
    tagline: "Discover Knowledge, Explore Ideas",
    description: "A comprehensive library management system for college",
    logo: "/logo.svg", // Path to logo image
    userInfo: {
      name: "Guest Student",
      email: "student@college.edu",
      role: "Student",
    },
  },

  // Navigation
  // ===================================================
  // Main menu items for the sidebar
  navigation: {
    mainMenu: [
      {
        title: "Home",
        icon: BookOpen,
        href: "/",
      },
      {
        title: "About",
        icon: Info,
        href: "/about",
      },
      {
        title: "Rules & Regulations",
        icon: ScrollText,
        href: "/rules",
      },
      {
        title: "Syllabi",
        icon: FileText,
        href: "/syllabi",
      },
      {
        title: "E-Resources",
        icon: BookCopy,
        href: "/e-resources",
      },
      {
        title: "Gallery",
        icon: GalleryVerticalEnd,
        href: "/gallery",
      },
      {
        title: "OPAC",
        icon: Search,
        href: "/opac",
      },
      {
        title: "E-Books",
        icon: BookMarked,
        href: "/e-books",
      },
      {
        title: "Library Policy",
        icon: FileText,
        href: "/policy",
      },
      {
        title: "Journals",
        icon: Newspaper,
        href: "/journals",
      },
      {
        title: "Contact Us",
        icon: Contact,
        href: "/contact",
      },
    ],
  },

  // Statistics
  // ===================================================
  // Key statistics displayed on the homepage and marquee
  statistics: {
    totalBooks: 25000,
    totalJournals: 500,
    totalEBooks: 10000,
    dailyVisitors: 350,
    activeMembers: 1200,
    yearlyAcquisitions: 1500,
  },

  // Announcements
  // ===================================================
  // Latest news and announcements
  announcements: [
    {
      title: "Library Timings Extended During Exams",
      content: "The library will remain open until 10 PM during the examination period from May 15 to June 10.",
      date: "May 5, 2023",
    },
    {
      title: "New Database Subscription",
      content: "We are pleased to announce that our library has subscribed to the JSTOR Arts & Sciences Collection.",
      date: "April 20, 2023",
    },
    {
      title: "Book Donation Drive",
      content:
        "Donate your gently used books to help expand our collection. Collection boxes are available at the library entrance.",
      date: "March 15, 2023",
    },
  ],

  // Library Hours
  // ===================================================
  // Operating hours
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
    { day: "Holidays", time: "10:00 AM - 2:00 PM" },
  ],

  // About Section
  // ===================================================
  // Information about the library
  about: {
    history: 
    [
      "Established in 1985, our college library has grown from a small collection of 5,000 books to a comprehensive resource center with over 25,000 books, 500 journals, and 10,000 e-books. The library building was renovated in 2010 to include modern facilities such as computer labs, discussion rooms, and multimedia resources. Over the years, we have continuously evolved to meet the changing needs of our academic community, embracing digital technologies while maintaining our commitment to traditional library services.",
  ],
    activities:[
      "Formulate the policy, rules, and regulations for the Library.",
      "Supervise and approval for Library Budget and allocation of funds under different expenditure heads.",
      "To advise the Librarian for development proposals.",
      "To take strategic decisions regarding acquisition of Library reading material/ resources.",
      "Make necessary provision for Library building, furniture, equipment, reading material and staff, etc. in the Library.",
      "To ensure good governance of the Library.",
      "Library committee metting will be held every three month (Starting and Mid of semester).",
    ],
      
    
    staff: [
      { name: "Principal", position: "President" },
      { name: "Librarian", position: "Secretary" },
      { name: "All Hod’s of Department", position: "Members" },
      { name: "Student Representatives", position: "04 Members" },
    ],
    facilities: [
      {
        name: "Reading Rooms",
        description:
          "Spacious reading areas with seating capacity for 200 students, equipped with comfortable furniture and proper lighting.",
      },
      {
        name: "Computer Lab",
        description: "30 computer workstations with internet access and essential software for academic work.",
      },
      {
        name: "Discussion Rooms",
        description: "5 soundproof rooms for group discussions and collaborative projects.",
      },
      {
        name: "Multimedia Section",
        description: "Audio-visual resources and equipment for multimedia learning.",
      },
      {
        name: "Periodicals Section",
        description: "Dedicated area for browsing current journals and magazines.",
      },
      {
        name: "Reference Section",
        description:
          "Comprehensive collection of reference materials including encyclopedias, dictionaries, and handbooks.",
      },
    ],
  },

  // Rules and Regulations
  // ===================================================
  // Library rules
  rules: {
    general: [
      "All the Student and Staff are member of Library.",
      "Students should examine the books thoroughly on receiving them for any damage and report to Librarian if any such damage is found, otherwise they will be held responsible for the same.",
      "Silence must be Strictly observed inside the Library.",
      "Members should leave their belongiongs at the entrance before entering the library.",
      "In case of loss of a student ID Card, they have to inform immediately to the Librarian and a written request must be made to the principal for the issue of a duplicate ID Card.",
    ],

    circulationpolicy: [
      <table>
      <thead>
          <tr>
              <th>Category</th>
              <th>No. of Books Issue</th>
              <th>Duration</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Research Scholars</td>
              <td>09</td>
              <td>06 Months (Renewal after 03 Months)</td>
          </tr>
          <tr>
              <td>Teaching Staffs</td>
              <td>09</td>
              <td>06 Months (Renewal after 03 Months)</td>
          </tr>
          <tr>
              <td>Non-Teaching</td>
              <td>03</td>
              <td>03 Months (Renewal after 45 days)</td>
          </tr>
          <tr>
              <td>Lab Assistant</td>
              <td>03</td>
              <td>03 Months (Renewal after 45 days)</td>
          </tr>
          <tr>
              <td>Under Graduate Students</td>
              <td>06</td>
              <td>01 Month (Renewal after 15 days)</td>
          </tr>
          <tr>
              <td>Post Graduate Students</td>
              <td>06</td>
              <td>01 Month (Renewal after 15 days)</td>
          </tr>
      </tbody>
  </table>
    ],

    borrowing: [
      "Borrowing materials without a valid identity card is prohibited.",
      "Not permitted to use another user Identity Card.",
      "Books borrowed from the library are not transferable",
      "Reference Books are meant for Reading in Library only.",
      "Journals will not be issued to students at any circumstances.",
      "The Librarian may recall any book at any time even if the permitted period has not expired.",
      "The Librarian may refuse to issue books to those who violate these rules.",
      "Reservation for the books in demand can be done in OPAC to a maximum of (3books) at a time.",
      "Renewal of books can be done in OPAC.",
    ],
    finepolicy: [
      "Books can be retained for a maximum duration of one month with a renewal done at an interval of 15 days.",
      "Books can be retained for a maximum duration of six month for staffs with a renewal done at an interval of 3 months.",
      "The Cost of replacement with double amount along with the fine will be charged to the person for loss or damage the library books.",
      "Fine will be charged as given below if the books are not returned on orbefore the due date this is to ensure that all library Users get a fair chance to access the books.",
                     "First Week - Rs. 1/- per day.",
                     "Second Week - Rs. 2/- per day.",
                     "Third Week - Rs. 10/- per day.",
    ],
    
  bookbank:[
    "Book Bank facility is available for SC/ST Students and they can borrow six books in their library account for current semester (6 months).",
  ],

  practice:[
    "Library User Orientation (Information Literacy Programme).",
    "Maintenance of Service Areas.",
    "Access to e-Resources.",
    "Best Library User Award.",
    "User Feedback Practice through Suggestion Register.",
  ],

  generalpolicy:[
    "Students must take care of Library books and must not deface by underlining, writing or drawing or removing any part of them, or in any other way.",
    "Silence should be strictly observed in the library.",
    "Use of cell phones inside the library is prohibited.",
    "All books, files, notebooks etc. must be presented to the attendant at the checkpoint for inspection before leaving the library. There is no exception to this rule.",
    "Misbehavior in the library will lead to cancellation of membership and also lead to serious disciplinary action.",
    "Student should examine the books thoroughlyon receiving them for any damage and report to Librarian if any such damage is found, otherwise they will be held responsible for the same.",
  ],
  },

  // E-Resources
  // ===================================================
  // Electronic resources
  eResources: {
    delnet: {
      ipRange: "No IP Range Needed",
      url: "https://discovery.delnet.in",
      description:
        "DELNET provides access to a wide range of resources including books, journals, theses, and dissertations. Contact the librarian for access instructions.",
    },
    nlist: {
      ipRange: "No IP Range Needed",
      url: "https://nlist.inflibnet.ac.in",
      description: "N-LIST provides access to e-journals, e-books, and research databases. Contact the librarian for access instructions.",
    },
    consortium: {
      ipRange: "No IP Range Needed",
      url: "https://library.annauniv.edu/auerc/login.php",
      description: "AUERC provides access to e-journals, e-books, and research databases. Contact the librarian for access instructions.",
    },
    accessInstructions: [
      "Connect to the college Wi-Fi network or use computers in the library.",
      "For DELNET and N-LIST, access is restricted to the college IP range.",
      "For remote access, use the VPN service provided by the college IT department.",
      "Log in with your college credentials when prompted.",
      "For assistance, contact the Digital Resources Specialist at the library.",
      "Training sessions on using e-resources are conducted monthly. Check the library notice board for schedules.",
    ],
  },

  // Gallery
  // ===================================================
  // Images of library facilities and events
  gallery: {
    all: [
      // Facilities
      {
        title: "Main Reading Hall",
        description: "Spacious reading area with seating for 100 students",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Main%20Reading%20Hall",
        category: "Facilities"
      },
      {
        title: "Computer Lab",
        description: "Modern lab with 30 workstations",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Computer%20Lab",
        category: "Facilities"
      },
      {
        title: "Discussion Rooms",
        description: "Soundproof rooms for group study",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Discussion%20Rooms",
        category: "Facilities"
      },
      {
        title: "Periodicals Section",
        description: "Area dedicated to journals and magazines",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Periodicals%20Section",
        category: "Facilities"
      },
      {
        title: "Reference Section",
        description: "Collection of reference materials",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Reference%20Section",
        category: "Facilities"
      },
      {
        title: "Digital Resource Center",
        description: "Access to online databases and e-resources",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Digital%20Resource%20Center",
        category: "Facilities"
      },
      
      // Events
      {
        title: "Book Exhibition 2023",
        description: "Annual exhibition featuring new acquisitions",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Book%20Exhibition",
        category: "Events"
      },
      {
        title: "Author Talk Series",
        description: "Renowned authors sharing their experiences",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Author%20Talk",
        category: "Events"
      },
      {
        title: "Library Week Celebration",
        description: "Various activities promoting reading culture",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Library%20Week",
        category: "Events"
      },
      {
        title: "Research Workshop",
        description: "Training on research methodologies",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Research%20Workshop",
        category: "Events"
      },
      {
        title: "Information Literacy Program",
        description: "Sessions on effective use of library resources",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Information%20Literacy",
        category: "Events"
      },
      {
        title: "Book Club Meeting",
        description: "Monthly discussions on selected books",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Book%20Club",
        category: "Events"
      },
      
      // Collections
      {
        title: "Rare Books Collection",
        description: "Valuable and historical books preserved in special conditions",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Rare%20Books",
        category: "Collections"
      },
      {
        title: "Thesis Collection",
        description: "Research works by college alumni",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Thesis%20Collection",
        category: "Collections"
      },
      {
        title: "Local History Collection",
        description: "Materials documenting local history and culture",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Local%20History",
        category: "Collections"
      },
      {
        title: "Special Collections",
        description: "Donated collections from notable personalities",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Special%20Collections",
        category: "Collections"
      },
      {
        title: "Multimedia Collection",
        description: "Audio-visual materials for educational purposes",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Multimedia",
        category: "Collections"
      },
      {
        title: "Archive Collection",
        description: "Historical documents and records of the college",
        imageUrl: "/placeholder.svg?height=400&width=400&text=Archives",
        category: "Collections"
      }
    ]
  },

  // Books
  // ===================================================
  // Sample book catalog
  books: [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      subject: "Computer Science",
      isbn: "9780262033848",
      status: "Available",
    },
    {
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      subject: "Economics",
      isbn: "9781305585126",
      status: "Checked Out",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      subject: "Literature",
      isbn: "9780061120084",
      status: "Available",
    },
    {
      title: "The Elements of Style",
      author: "William Strunk Jr.",
      subject: "Language",
      isbn: "9780205309023",
      status: "Available",
    },
    {
      title: "Organic Chemistry",
      author: "Paula Yurkanis Bruice",
      subject: "Chemistry",
      isbn: "9780134042282",
      status: "Checked Out",
    },
    {
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      subject: "Mathematics",
      isbn: "9781285741550",
      status: "Available",
    },
    {
      title: "Psychology",
      author: "David G. Myers",
      subject: "Psychology",
      isbn: "9781464140815",
      status: "Available",
    },
    {
      title: "World History",
      author: "William J. Duiker",
      subject: "History",
      isbn: "9781305091207",
      status: "Checked Out",
    },
    {
      title: "Biology",
      author: "Neil A. Campbell",
      subject: "Biology",
      isbn: "9780321775658",
      status: "Available",
    },
    {
      title: "Physics for Scientists and Engineers",
      author: "Raymond A. Serway",
      subject: "Physics",
      isbn: "9781133947271",
      status: "Available",
    },
  ],

  // Recently Added Books
  // ===================================================
  // New acquisitions
  recentlyAdded: [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell and Peter Norvig",
      dateAdded: "May 10, 2023",
    },
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      dateAdded: "May 5, 2023",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      dateAdded: "April 28, 2023",
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      dateAdded: "April 20, 2023",
    },
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      dateAdded: "April 15, 2023",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      dateAdded: "April 10, 2023",
    },
  ],

  // E-Books
  // ===================================================
  // Electronic books
  ebooks: {
    academic: [
      {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        description: "Comprehensive guide to digital signal processing principles and applications.",
        format: "PDF",
        url: "#digital-signal-processing",
      },
      {
        title: "Fundamentals of Database Systems",
        author: "Ramez Elmasri",
        description: "Introduction to database design, implementation, and management.",
        format: "EPUB",
        url: "#database-systems",
      },
      {
        title: "Molecular Biology of the Cell",
        author: "Bruce Alberts",
        description: "Detailed exploration of cell biology at the molecular level.",
        format: "PDF",
        url: "#molecular-biology",
      },
      {
        title: "Linear Algebra and Its Applications",
        author: "Gilbert Strang",
        description: "Clear explanation of linear algebra concepts with applications.",
        format: "PDF",
        url: "#linear-algebra",
      },
    ],
    reference: [
      {
        title: "The Chicago Manual of Style",
        author: "University of Chicago Press",
        description: "Comprehensive style guide for writers and editors.",
        format: "PDF",
        url: "#chicago-manual",
      },
      {
        title: "Oxford Dictionary of English",
        author: "Oxford University Press",
        description: "Authoritative dictionary of the English language.",
        format: "EPUB",
        url: "#oxford-dictionary",
      },
      {
        title: "Encyclopedia of Mathematics",
        author: "Michiel Hazewinkel",
        description: "Comprehensive reference work covering all areas of mathematics.",
        format: "PDF",
        url: "#encyclopedia-mathematics",
      },
      {
        title: "The Cambridge History of Science",
        author: "Cambridge University Press",
        description: "Multi-volume history of science from ancient times to the present.",
        format: "PDF",
        url: "#cambridge-history",
      },
    ],
    fiction: [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "Classic novel of manners set in early 19th-century England.",
        format: "EPUB",
        url: "#pride-prejudice",
      },
      {
        title: "1984",
        author: "George Orwell",
        description: "Dystopian novel about totalitarianism and surveillance.",
        format: "EPUB",
        url: "#1984",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Novel exploring themes of decadence and idealism in the Jazz Age.",
        format: "EPUB",
        url: "#great-gatsby",
      },
      {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        description: "Modernist novel examining the complexities of human relationships.",
        format: "EPUB",
        url: "#to-lighthouse",
      },
    ],
    accessInstructions: [
      "Log in to the library portal using your college credentials.",
      "Navigate to the E-Books section.",
      "Search for the desired e-book by title, author, or subject.",
      "Click on the e-book to view details and access options.",
      "Choose to read online or download (if available).",
      "Downloaded e-books may require specific software like Adobe Digital Editions.",
      "E-books have a loan period of 14 days, after which access will expire.",
      "For technical issues, contact the Digital Resources Specialist.",
    ],
    platforms: [
      {
        name: "EBSCOhost eBooks",
        description: "Collection of academic e-books across various disciplines.",
        url: "https://ebscohost.com/ebooks",
      },
      {
        name: "ProQuest Ebook Central",
        description: "Platform offering access to scholarly e-books from leading publishers.",
        url: "https://ebookcentral.proquest.com",
      },
      {
        name: "Oxford Scholarship Online",
        description: "E-books published by Oxford University Press covering multiple subjects.",
        url: "https://oxford.universitypressscholarship.com",
      },
      {
        name: "SpringerLink",
        description: "E-books in science, technology, medicine, and humanities.",
        url: "https://link.springer.com",
      },
    ],
  },

  // Library Policy
  // ===================================================
  // Policies and strategic plans
  policy: {
    vision:[
      "To provide a student - centred learning environment that facilitats transference of information and to cater to the needs of its users to access it.",
      "To provide well-equipped and functional physical spaces where students can pursue learning independently beyond the classroom.",
      "To augment and maintain collections of the academic pursuits of the College.",
      "To explore and implement innovative technologies and services to deliver information and scholarly resources, conveniently to the Users in the campus.",
    ],
      
    mission:[
      "To develop reading habit in students.",
      "To support classroom teaching.",
      "To satisfy the information needs of the society.",
      "To use modern tools, techniques for collection, storage and dissemination of information.",
      "To access the user needs and accordingly provide necessary services.",

    ],
      
    
    objectives:
      [
      "To understand the research, teaching and learning needs of its users.",
      "To build collections and create tools to support research, teaching and learning.",
      "To provide access to and promote the discovery and use of local and external information resources.",
      "T0o ensure the preservation of long-lasting availability of library collections and resources.",
      "To bring our Library at par with the International Library Standard and to make it one of the best in the state of Tamilnadu.",
      "To conduct Orientation classes to create awareness among students.",
      "To encourage the User community to utilize E- resources, (E-journals, E-books, NPTEL videos) to its maximum to gain more knowledge of the recent developments in their respective fields.",
      ],
    },

  // Journals
  // ===================================================
  // Print and electronic journals
  journals: {
    print: [
      {
        title: "Journal of Higher Education",
        publisher: "Ohio State University Press",
        frequency: "Bimonthly",
        subject: "Education",
        availableIssues: "2010-Present",
      },
      {
        title: "American Economic Review",
        publisher: "American Economic Association",
        frequency: "Monthly",
        subject: "Economics",
        availableIssues: "2005-Present",
      },
      {
        title: "Nature",
        publisher: "Springer Nature",
        frequency: "Weekly",
        subject: "Science",
        availableIssues: "2000-Present",
      },
      {
        title: "Harvard Law Review",
        publisher: "Harvard Law Review Association",
        frequency: "Monthly",
        subject: "Law",
        availableIssues: "2008-Present",
      },
      {
        title: "Journal of Marketing Research",
        publisher: "American Marketing Association",
        frequency: "Bimonthly",
        subject: "Marketing",
        availableIssues: "2010-Present",
      },
    ],
    electronic: [
      {
        title: "Journal of Computer Science",
        publisher: "Science Publications",
        subject: "Computer Science",
        access: "Full-text",
        url: "https://thescipub.com/journals/jcs",
      },
      {
        title: "International Journal of Psychology",
        publisher: "Wiley",
        subject: "Psychology",
        access: "Full-text",
        url: "https://onlinelibrary.wiley.com/journal/1464066x",
      },
      {
        title: "Journal of Business Ethics",
        publisher: "Springer",
        subject: "Business",
        access: "Full-text",
        url: "https://www.springer.com/journal/10551",
      },
      {
        title: "Environmental Science & Technology",
        publisher: "American Chemical Society",
        subject: "Environmental Science",
        access: "Full-text",
        url: "https://pubs.acs.org/journal/esthag",
      },
      {
        title: "Journal of English Literature",
        publisher: "Oxford University Press",
        subject: "Literature",
        access: "Full-text",
        url: "https://academic.oup.com/english",
      },
      {
        title: "International Journal of Nursing Studies",
        publisher: "Elsevier",
        subject: "Nursing",
        access: "Full-text",
        url: "https://www.journals.elsevier.com/international-journal-of-nursing-studies",
      },
    ],
    databases: [
      {
        name: "JSTOR",
        description: "Digital library of academic journals, books, and primary sources.",
        coverage: "Various disciplines",
        url: "https://www.jstor.org",
      },
      {
        name: "Web of Science",
        description: "Citation indexing service that provides comprehensive citation search.",
        coverage: "Science, social sciences, arts, and humanities",
        url: "https://www.webofscience.com",
      },
      {
        name: "PubMed",
        description: "Database of references and abstracts on life sciences and biomedical topics.",
        coverage: "Medicine and life sciences",
        url: "https://pubmed.ncbi.nlm.nih.gov",
      },
      {
        name: "IEEE Xplore",
        description:
          "Research database for discovery and access to journal articles, conference proceedings, technical standards, and related materials.",
        coverage: "Engineering, computer science, and electronics",
        url: "https://ieeexplore.ieee.org",
      },
    ],
    accessGuide: [
      "For print journals, check the library catalog to find the location and availability.",
      "Current issues of print journals are displayed in the Periodicals Section.",
      "Older issues may be in the stacks or archives; ask at the circulation desk.",
      "For electronic journals, access through the library portal using your college credentials.",
      "Use the A-Z journal list to find specific journal titles.",
      "Many journals can be accessed through databases; check the database list for coverage.",
      "For articles not available in our collection, use the interlibrary loan service.",
      "Citation management tools like Zotero and Mendeley are available for organizing references.",
    ],
  },
}

