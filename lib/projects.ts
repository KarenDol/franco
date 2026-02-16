// lib/projects.ts

export type ProjectGalleryImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  completedLabel: string
  locationLabel: string
  serviceLabel: string
  yearLabel: string
  heroImage: {
    src: string
    alt: string
  }
  challengeTitle: string
  challengeBody: string
  noteworthyTitle: string
  noteworthyBullets: string[]
  galleryTitle: string
  galleryImages: ProjectGalleryImage[]
  cardImage: { src: string; alt: string }
  cardTitle: string
}

export const projects: Project[] = [
  {
    slug: "yale-amistad",
    title: "Yale University – Amistad Parking Garage Repairs",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "New Haven, Connecticut",
    serviceLabel: "A/Z Corporation Project No. X81849",
    yearLabel: "",
    heroImage: {
      src: "/projects/project1.jpg",
      alt: "Yale University Amistad Parking Garage",
    },

    challengeTitle: "Our Challenge",
    // ✅ HTML so you get the same formatting as your screenshot
    challengeBody: `
      <p style="margin: 0; font-weight: 700; color: rgba(0,0,0,0.55);">
        Project Overview
      </p>

      <p style="margin-top: 10px;">
        The Yale University Amistad Parking Garage Repairs project is a comprehensive structural, architectural, and
        waterproofing restoration program designed to extend the service life, performance, and safety of a multi-level
        parking structure. The scope includes targeted structural concrete repairs, masonry restoration, waterproofing
        upgrades, sealant replacement, stucco repairs, miscellaneous metals improvements, and multiple building envelope
        enhancements.
      </p>

      <h3 style="margin-top: 30px; font-weight: 800;">
        Scope of Work Summary
      </h3>

      <ol style="margin-top: 14px; padding-left: 22px;">
        <li style="margin-top: 12px;">
          <strong>Masonry &amp; Concrete Restoration (Bid Package 04A – Masonry)</strong>
          <ul style="margin-top: 10px; padding-left: 18px; list-style-type: circle;">
            <li>Dust control and daily debris removal.</li>
            <li>Selective demolition of deteriorated masonry and concrete elements.</li>
            <li>Surface cleaning and power washing.</li>
            <li>Full-depth and partial-depth concrete repairs at double tees.</li>
            <li>Crack routing and sealing.</li>
            <li>Expansion joint replacement.</li>
            <li>Closure topping slab installation.</li>
            <li>Brick masonry crack repairs and repointing.</li>
            <li>CMU wall crack repairs and unit replacement as required.</li>
            <li>Sidewalk and curb repairs.</li>
            <li>Concrete patching at drain locations and electrical conduit paths.</li>
          </ul>
        </li>

        <li style="margin-top: 18px;">
          <strong>Miscellaneous Metals (Bid Package 05A – Misc. Metals)</strong>
          <ol style="margin-top: 10px; padding-left: 18px;">
            <li>Installation of DTFC clips (3,650 units).</li>
            <li>Replacement of metal access hatches at elevator locations.</li>
          </ol>
        </li>

        <li style="margin-top: 18px;">
          <strong>Stucco Repairs (Bid Package 07A – Stucco)</strong>
          <ul style="margin-top: 10px; padding-left: 18px; list-style-type: circle;">
            <li>Removal and replacement of spalled stucco at the top level.</li>
          </ul>
        </li>

        <li style="margin-top: 18px;">
          <strong>Sealants &amp; Waterproofing (Bid Package 07D – Sealants)</strong>
          <ul style="margin-top: 10px; padding-left: 18px; list-style-type: circle;">
            <li>Installation of a new traffic-bearing waterproof membrane.</li>
            <li>Re-coating of the existing 1st-level traffic membrane (~20,000 SF).</li>
            <li>Localized membrane system repairs (~200 SF).</li>
            <li>Installation of a full traffic coating system at the top deck (~41,000 SF).</li>
            <li>Replacement of all sealants between double tees and at penetrations.</li>
            <li>Installation of new self-leveling slab-to-wall sealants.</li>
            <li>Replacement of EMSEAL joints at precast/stair tower connections (~430 LF).</li>
            <li>Sealant replacement at lifting lugs and biscuit locations.</li>
            <li>Penetrating sealer application on floors not receiving coatings.</li>
          </ul>
        </li>
      </ol>
    `.trim(),

    noteworthyTitle: "Noteworthy Stats",
    // ✅ match your screenshot bullets
    noteworthyBullets: [
      "Restore structural integrity.",
      "Enhance waterproofing and reduce infiltration.",
      "Improve pedestrian and vehicle safety.",
      "Extend long-term facility durability.",
      "Minimize operational disruptions for Yale University.",
      "A/Z Corporation Project No. X81849",
    ],

    galleryTitle: "Project Gallery",
    // You can swap these paths to your real gallery photos later
    galleryImages: [
      { src: "/projects/project1/img1.jpg", alt: "Amistad Garage aerial view" },
      { src: "/projects/project1/img2.jpg", alt: "Top deck / roof area" },
      { src: "/projects/project1/img3.jpg", alt: "Membrane / waterproofing detail" },
      { src: "/projects/project1/img4.jpeg", alt: "Field work in progress" },
    ],

    cardImage: {
      src: "/projects/project1.jpg",
      alt: "Yale University – Amistad Parking Garage Repairs",
    },
    cardTitle: "Yale University – Amistad\nParking Garage Repairs",
  },
  {
    slug: "naugatuck-hillside",
    title: "Naugatuck Hillside Intermediate School",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Naugatuck, Ct",
    serviceLabel: "Copper Cornice Repair",
    yearLabel: "2025",
    heroImage: {
      src: "/projects/project2.jpg",
      alt: "Aerial view of Naugatuck Hillside Intermediate School",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Frank Capasso & Sons was proud to complete specialized restoration work at the historic Hillside Intermediate School in Naugatuck, CT. Originally built around 1900 and partially renovated in 1963 following an interior fire. During a recent roof replacement project, structural cracks were identified along the Southeast copper cornice. We were contracted under a formal RFP to carry out precision repairs to this section. Our work involved the careful removal and restoration of damaged copper elements, structural reinforcement where required, and reinstallation using historically sensitive techniques and materials. All restoration efforts were completed with a focus on preserving the school’s architectural integrity while ensuring long-term durability. This project highlights our team’s expertise in historic preservation and complex architectural metalwork.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: ["Historic Preservation", "Metalwork", "Copper Cornice Repair"],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project2/img1.jpg", alt: "Copper cornice detail close-up" },
      { src: "/projects/project2/img2.jpg", alt: "Aerial view of the school" },
      { src: "/projects/project2/img3.jpg", alt: "Restored copper detail" },
      { src: "/projects/project2/img4.jpg", alt: "Roofline corner view" },
    ],

    cardImage: { src: "/projects/project2.jpg", alt: "Naugatuck Hillside Intermediate School" },
    cardTitle: "Naugatuck Hillside\nIntermediate School",
  },
  {
    slug: "yale-hill-house",
    title: "Yale President’s House: Hill House",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "New Haven, CT",
    serviceLabel: "Historical Restoration of Exterior and Interior",
    yearLabel: "2024",
    heroImage: {
      src: "/projects/project3.jpg",
      alt: "Yale President’s House - Hill House exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Frank Capasso & Sons were entrusted with the restoration of Hill House, the Yale University President’s residence. The scope of work involved meticulous exterior and interior renovations aimed at preserving the historic character of the building while enhancing its structural integrity. Key tasks included masonry restoration, repairing and repointing the brick façade, and restoring decorative stonework. The project also encompassed comprehensive window restoration and selective replacement to improve energy efficiency while maintaining the home’s historic aesthetic. In addition, roof repairs and waterproofing measures were undertaken to protect the structure from the elements, ensuring long-term preservation. This careful and detailed restoration enhances the beauty and durability of Hill House, preserving its legacy as an iconic residence for the Yale University President.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Skilled Masonry Work & Design",
      "Window Restoration",
      "Roof Repairs",
      "Historical Restoration of Exterior and Interior"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project3.jpg", alt: "Yale President’s House Hill House" },
    cardTitle: "Yale President’s House\nHill House",
  },
  {
    slug: "st-mary-church-stamford",
    title: "St. Mary Church of Stamford",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "566 Elm St. Stamford, CT 06902",
    serviceLabel: "Renovation of Historical Architectural Integrity",
    yearLabel: "2024",
    heroImage: {
      src: "/projects/project4.png",
      alt: "St. Mary Church of Stamford exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "At St. Mary Church in Stamford, a historic structure built in the 1920s, Frank Capasso & Sons performed a comprehensive exterior renovation to restore and preserve the integrity of this architecturally significant building. The church features intricate pre-cast unreinforced concrete decorative elements, including niches, bands, cornices, and friezes, as well as precast window jambs, arches, mullions, and tracery. The scope of work included full mobilization and demolition of the aging slate roof, copper gutters, and leaders. Facade cleaning and meticulous repointing restored the masonry while maintaining its original character. Damaged precast stone elements were carefully removed and replicated to match historic details. A new slate roof was installed, and window sealing was completed to ensure long-term protection against the elements. These renovations ensure the continued preservation and functionality of St. Mary Church while honoring the craftsmanship and historical significance of its original design.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Slate Roof & Copper Gutter Repairs",
      "Facade Cleaning",
      "Full Repointing of Historic Masonry",
      "Removal & Replication of Precast Concrete",
      "Restoration & Sealing of Original Window Assemblies",
      "Renovation of Historical Architectural Integrity"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project4.png", alt: "St. Mary Church of Stamford" },
    cardTitle: "St. Mary Church\nof Stamford",
  },
  {
    slug: "bradley-international-parking-garage",
    title: "Bradley International Parking Garage",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "1 Bradley International Airport, Windsor Locks, CT 06096",
    serviceLabel: "Restoration and Waterproofing",
    yearLabel: "2022",
    heroImage: {
      src: "/projects/project5.png",
      alt: "Bradley International Airport Parking Garage exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "At the Bradley International Airport Parking Garage, Frank Capasso & Sons completed a comprehensive concrete restoration and waterproofing project to enhance the structure’s durability and long-term performance. Work included surface and pour strip concrete repairs using epoxy and polymer-modified materials across all levels, as well as shear connector repairs on Levels 2 and 5. Vertical, overhead, and curb repairs were performed throughout the garage with finishes carefully matched to the existing structure. Waterproofing efforts included crack repairs, joint restoration, traffic membrane recoating, and pressure epoxy injection. Additional upgrades involved new expansion joints, supplemental shear connectors, and drainage system improvements. These targeted repairs ensure the continued safety, functionality, and reliability of this high-traffic parking facility.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Extensive Concrete Repairs",
      "Shear Connector Restoration",
      "Pressure Epoxy Injections",
      "Restoration and Waterproofing"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project5.png", alt: "Bradley International Parking Garage" },
    cardTitle: "Bradley International\nParking Garage",
  },
  {
    slug: "lafayette-street-parking-garage",
    title: "Lafayette Street Parking Garage",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "101 Lafayette Street, Hartford, CT 06106",
    serviceLabel: "Structural and Waterproofing Restoration",
    yearLabel: "2025",
    heroImage: {
      src: "/projects/project6.png",
      alt: "Lafayette Street Parking Garage exterior view",
    },
    challengeTitle: "Our Challenge",
    challengeBody: `
      At 101 Lafayette Street Parking Garage in Hartford, CT, Frank Capasso and Sons completed a comprehensive structural and waterproofing restoration to extend the life and functionality of the facility. The scope of work began with mobilization and included horizontal deck sealant application and the routing and sealing of existing cracks to prevent water infiltration. Extensive concrete repairs were performed throughout the structure, including the removal and replacement of deteriorated cove joints, repair of deck spalls, and full-depth replacement of a 3” topping slab.

      Additional work involved removal and replacement of the pedestrian bridge connecting the parking garage to the adjacent courthouse, repairing concrete curbs and islands, installing a new extra heavy-duty waterproofing membrane system, and addressing damage to inverted tee beams through crack and spall repair. Epoxy injection was used to treat structural cracks, while vertical cracks were sealed with hydrophobic grout to prevent moisture intrusion. Repairs also included overhead concrete spalls, replacement of double tee bearing pads, and restoration of double tee flange connectors to reinforce structural integrity. These critical repairs and system upgrades improved the long-term performance and durability of the structure.
      `.trim(),
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Full-depth slab and structural concrete repairs",
      "Replacement of pedestrian bridge",
      "Heavy-duty membrane system installation",
      "Epoxy injection and hydrophobic grout crack treatment",
      "Double tee flange connector and bearing pad replacement",
      "Structural and waterproofing restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project6.png", alt: "Lafayette Street Parking Garage" },
    cardTitle: "Lafayette Street\nParking Garage",
  },
  {
    slug: "providence-federal-courthouse",
    title: "Providence Federal Courthouse",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "1 Exchange Terrace, Providence, RI 02903",
    serviceLabel: "Masonry and Historic Restoration",
    yearLabel: "2024",
    heroImage: {
      src: "/projects/project7.jpg",
      alt: "Providence Federal Courthouse exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "At the Providence Federal Courthouse, Frank Capasso and Sons carried out a meticulous restoration project focused on preserving the integrity of the building’s fifth-floor parapet level and inner courtyard. The scope of work included extensive masonry and window restoration. Window restoration efforts involved the removal and replacement of perimeter sealants, stripping of exterior lead-based paint from wood and metal window and trim components, as well the repair/replacement of deteriorated window elements. Weatherstripping and finish painting were also completed to ensure energy efficiency and long-term protection. Masonry restoration included both primary and secondary cleaning of the existing granite and brick surfaces, repointing of all masonry joints, crack repairs, installation of granite dutchmen, and replacement of damaged or cracked bricks to match the original fabric. The project also included the removal/replacement of roof flashings in the courtyard to improve water management and prevent future infiltration. These detailed restorations enhance both the appearance and performance of this historic federal facility, ensuring its continued service and preservation.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Historic Masonry Restoration & Stone Replacement",
      "Precision Repointing of Mortar Joints",
      "Facade Cleaning & Protective Water Repellents",
      "Restoration of Ornate Architectural Details",
      "Masonry and Historic Restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project7.jpg", alt: "Providence Federal Courthouse" },
    cardTitle: "Providence Federal\nCourthouse",
  },
  {
    slug: "church-street-garage",
    title: "Church Street Garage",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hartford, CT",
    serviceLabel: "Parking Garage Restoration",
    yearLabel: "2024",
    heroImage: {
      src: "/projects/project8.png",
      alt: "Church Street Garage exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Frank Capasso & Sons were selected as the low bidder on a $20M restoration project for Capital Regional Development Authority (CRDA) at the Church Street parking Garage in Hartford, CT. The restoration challenge was to maintain the daily functionality of the garage, while performing major tasks, which involved full depth concrete replacement of the parking floor slabs. In addition to replacement of the floor slabs, some of the additional work items we were tasked were repair/replacement of the embedded post tension system, structural concrete beam repairs, concrete curb replacement, replacement of the concrete stairs, replacement of the drainage system, concrete deck traffic coating membrane along with railing modifications at all stair towers and throughout the garage perimeter for code compliance. These upgrades ensure the long-term durability and reliability of the parking garage, providing a safe, well-maintained facility for the community and visitors alike.",

    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Repairs",
      "Membrane Installation",
      "Joint Repair/Installation",
      "Stair/ Metal Replacement",
      "Parking Garage Restoration",
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project8.png", alt: "Concrete repair work" },
    ],

    cardImage: { src: "/projects/project8.png", alt: "Church Street Garage" },
    cardTitle: "Church Street\nGarage",
  },
  {
    slug: "hartford-hospital-employee-garage",
    title: "Hartford Hospital Employee Garage",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hartford, CT",
    serviceLabel: "Parking Garage Restoration",
    yearLabel: "2024",
    heroImage: {
      src: "/projects/project9.png",
      alt: "Hartford Hospital Employee Garage exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "At the Employee Garage at Hartford Hospital Frank Capasso and Sons had performed extensive restoration and upgrades to the parking garage. The scope of work included the installation of an epoxy overlay system to protect the garage floors and enhance durability. A heat sealer was applied for added protection against environmental exposure. Vertical and overhead concrete repairs were conducted to restore structural integrity, while supplemental connections were installed to reinforce the existing framework. Cove joint installation and detailing were completed to improve joint performance, and a protective membrane was installed to prevent water infiltration. The project also involved the replacement of multiple staircases to ensure safety and accessibility. Plumbing work and drainage improvements were executed to enhance water management within the garage, preventing future issues caused by water accumulation. These comprehensive repairs and upgrades ensure the long-term functionality and safety of the Hartford Hospital Employee Garage, providing a reliable and well-maintained facility for hospital staff.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Repairs",
      "Joint Installation",
      "Parking Garage Restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project9.png", alt: "Concrete deck repair detail" },
    ],

    cardImage: { src: "/projects/project9.png", alt: "Hartford Hospital Employee Garage" },
    cardTitle: "Hartford Hospital\nEmployee Garage",
  },
  {
    slug: "hartford-hospital-retreat-garage",
    title: "Hartford Hospital Retreat Parking Garage",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hatford, CT",
    serviceLabel: "Concrete Restoration",
    yearLabel: "",
    heroImage: {
      src: "/projects/project10.jpg",
      alt: "Hartford Hospital Retreat Parking Garage exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Frank Capasso & Sons was contracted to perform a comprehensive restoration of the Retreat Garage at Hartford Hospital. The scope of work involved the removal and replacement of existing topping slabs to address surface damage and improve overall durability. Full-depth tee flange repairs were executed to reinforce the garage’s structural support system. Additionally, new curbs were installed, and significant concrete repairs were performed on the inverted T beams to restore stability. Joint sealant was applied to the newly installed concrete slabs to ensure proper water resistance, and new floor drains were installed to enhance drainage and prevent future water-related issues. This extensive restoration ensures a safer, more resilient parking facility for hospital staff and visitors, while enhancing the long-term structural performance of the garage.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Repairs",
      "Joint Installation/Sealing",
      "Full-depth Tee Repairs",
      "Concrete Restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project10.jpg", alt: "Concrete restoration work" },
    ],

    cardImage: { src: "/projects/project10.jpg", alt: "Hartford Hospital Retreat Parking Garage" },
    cardTitle: "Hartford Hospital Retreat\nParking Garage",
  },
  {
    slug: "colt-gateway-building",
    title: "Colt Gateway Building",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hartford, CT",
    serviceLabel: "Concrete Restoration",
    yearLabel: "2015",
    heroImage: {
      src: "/projects/project11.jpg",
      alt: "Colt Gateway Building historic brick facade",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The rehabilitation of the Colt Gateway Building in Hartford, CT was a transformative project aimed at preserving its historical significance while modernizing its facilities. Originally home to the Colt Armory, this iconic structure underwent renovations to revitalize its use for contemporary purposes. The rehabilitation efforts include restoring its distinctive architecture, such as its red brick façade and iconic blue onion dome, while upgrading interior spaces to accommodate modern amenities and functionalities. Additionally, the project involved improving accessibility features, updating mechanical systems for energy efficiency, and ensuring compliance with building codes and regulations. Through this rehabilitation, the Colt Gateway Building will continue to serve as a prominent landmark in Hartford, honoring its past while embracing its future as a vibrant hub for commerce and culture.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project11/img1.png", alt: "Original industrial windows prior to restoration, showing deterioration and weathering." },
      { src: "/projects/project11/img2.png", alt: "Industrial windows during restoration with scaffolding and active repair work in progress." },
      { src: "/projects/project11/img3.png", alt: "Restored industrial windows following completion of masonry and façade repairs." },
    ],

    cardImage: { src: "/projects/project11.jpg", alt: "Colt Gateway Building" },
    cardTitle: "Colt Gateway\nBuilding",
  },
  {
    slug: "mohegan-sun-casino-resort-garages",
    title: "Mohegan Sun Casino & Resort Garages",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Uncasville, CT",
    serviceLabel:
      "Concrete Restoration, Thermal-Moisture & Sealant Installation, Expansion Joint Installation, Traffic Coating",
    yearLabel: "2023 – Current",
    heroImage: {
      src: "/projects/project12.png",
      alt: "Aerial view of Mohegan Sun Casino & Resort complex",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The Mohegan Sun Casino & Resort Garage project is a comprehensive endeavor aimed at enhancing the safety, durability, and functionality of the parking facility. This extensive initiative involves a detailed assessment of the garage’s structural integrity to identify and address any deficiencies, such as cracks, spalling, or corrosion. Our skilled professionals executed concrete repairs, including patching, reinforcement installation, and crack sealing, to restore the strength and stability of the structure. Additionally, waterproofing measures were implemented to protect against water infiltration and damage, ensuring a secure environment for vehicles and patrons. Furthermore, the installation of expansion joints will help accommodate natural structural movement, mitigating potential damage and prolonging the lifespan of the garage. Through these combined efforts, the Mohegan Sun Casino & Resort Garage will be revitalized, providing reliable and safe parking facilities for visitors and staff.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Restoration",
      "Thermal-Moisture & Sealant Installation",
      "Expansion Joint Installation",
      "Traffic Coating"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { 
      src: "/projects/project12.png", 
      alt: "Mohegan Sun Casino & Resort Garages" 
    },

    cardTitle: "Mohegan Sun Casino\n& Resort Garages",
  },
  {
    slug: "sloane-laboratories-yale",
    title: "Sloane Laboratories at Yale University",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "New Haven, CT",
    serviceLabel: "Brownstone Repointing, Brownstone Repair & Replacement , Stone Dutchman Repair, Waterproofing & Flashing Repairs, Scaffolding Erection (access)",
    yearLabel: "2022",
    heroImage: {
      src: "/projects/project13.jpg",
      alt: "Sloane Physics Laboratory at Yale University exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The Sloane Laboratories at Yale University is a multifaceted initiative focused on preserving and enhancing the historic integrity of the building. This comprehensive undertaking includes repairing and restoring the masonry elements of the structure, addressing any deterioration or damage to ensure structural integrity and aesthetic appeal. Through these efforts, the Sloane Laboratories will be revitalized, maintaining its historic charm while ensuring a safe and functional environment for Yale University’s academic pursuits.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Brownstone Repointing",
      "Brownstone Repair & Replacement",
      "Stone Dutchman Repair",
      "Waterproofing & Flashing Repairs",
      "Scaffolding Erection (access)"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project13.jpg", alt: "Sloane Laboratories at Yale University" },
    cardTitle: "Sloane Laboratories\nat Yale University",
  },
  {
    slug: "hartford-healthcare-pearl-street",
    title: "Hartford HealthCare",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hartford, CT",
    serviceLabel: "Concrete Restoration , Waterproofing Installation, Thermal-Moisture & Sealant Installation",
    yearLabel: "2023 - Present",
    heroImage: {
      src: "/projects/project14.jpg",
      alt: "Hartford HealthCare building exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The Hartford Healthcare Parking Garage project is a comprehensive initiative aimed at enhancing the safety, durability, and longevity of the parking facility. This undertaking involves a thorough assessment of the structure to identify and address any structural deficiencies, such as cracks, spalling, or corrosion. Our skilled professionals executed the concrete repairs, including patching, reinforcement installation, and crack sealing, to restore the integrity of the garage. Additionally, waterproofing measures were implemented to protect the structure from water infiltration and damage, ensuring a secure environment for vehicles and pedestrians alike. Through these combined efforts, the parking garage will be revitalized, providing reliable and safe parking facilities for Hartford Healthcare patients, visitors, and staff.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Restoration",
      "Waterproofing Installation",
      "Thermal-Moisture & Sealant Installation"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project14.jpg", alt: "Hartford HealthCare" },
    cardTitle: "Hartford\nHealthCare",
  },
  {
    slug: "ymca-greenwich",
    title: "YMCA Greenwich, CT",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Greenwich, CT",
    serviceLabel: "Masonry Repointing, Brick & Block Replacement , Cast-Stone Replacement, Roof Replacement , Painting",
    yearLabel: "2015",
    heroImage: {
      src: "/projects/project15.jpg",
      alt: "YMCA Greenwich exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The YMCA Greenwich exterior facelift construction project was a comprehensive effort to revitalize and enhance the appearance of the facility’s outer structure. This project involved various improvements aimed at preserving its exterior architectural integrity. Plans included refurbishing the exterior façade, repairing and replacing cast stone masonry, and replacing the roof with slate. Overall, the goal of this construction project was to create a refreshed and appealing exterior that reflects the Greenwich YMCA’s rich culture and commitment to serving the community and promoting health and wellness.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Masonry Repointing",
      "Brick & Block Replacement",
      "Cast-Stone Replacement",
      "Roof Replacement",
      "Painting"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project15.jpg", alt: "YMCA Greenwich, CT" },
    cardTitle: "YMCA\nGreenwich, CT",
  },
  {
    slug: "foxwoods-resort-casino",
    title: "Foxwoods Resort Casino",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Mashantucket, CT",
    serviceLabel: "Joint Sealant Replacement (precast double-tee), Concrete Restoration, Traffic Coating, Drain Installation, Pressure Wash & Sealer",
    yearLabel: "2022-2023",
    heroImage: {
      src: "/projects/project16.jpg",
      alt: "Foxwoods Resort Casino exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "The Foxwoods Casino repair project includes a comprehensive list of tasks aimed at enhancing structural integrity and aesthetics. This includes removing and replacing sealant joints at precast double-tee beams, preparing existing connections for inspection, and repairing concrete and connections where needed. Additionally, undermounted precast double-tee flange connection brackets will be installed, and the deck surface will be meticulously prepared and treated with migrating corrosion inhibitors and epoxy healer/sealers. Traffic-bearing membranes will be applied to deck crossovers, along with pavement markings for safety. Drain installation, fireproofing repairs at steel beams, and concrete repairs are also part of the restoration efforts. Lastly, water stains will be thoroughly cleaned from surfaces, ensuring the casino maintains its pristine appearance.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Joint Sealant Replacement (precast double-tee)",
      "Concrete Restoration",
      "Traffic Coating",
      "Drain Installation",
      "Pressure Wash & Sealer"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [ ],

    cardImage: { src: "/projects/project16.jpg", alt: "Foxwoods Resort Casino" },
    cardTitle: "Foxwoods Resort\nCasino",
  },
  {
    slug: "bridgeport-hospital",
    title: "Bridgeport Hospital Pedestrian Bridge Rehabilitation",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Hartford, CT",
    serviceLabel: "Waterproofing",
    yearLabel: "2016",
    heroImage: {
      src: "/projects/project17.jpg",
      alt: "Bridgeport Hospital parking structure exterior",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Pedestrian bridge rehabilitation involves a meticulous process of restoring and enhancing the structural integrity and safety of a footbridge. Beginning with a comprehensive inspection, engineers identify areas of deterioration, such as rust, corrosion, or structural weaknesses. Our skilled workers then execute repairs, which may include replacing damaged components, reinforcing support structures, and applying protective coatings to prevent future degradation. Additionally, aesthetic improvements may be made to enhance the bridge’s appearance and ensure compliance with modern design standards. Through this rehabilitation process, pedestrian bridges are revitalized, providing safe and reliable passage for pedestrians while contributing to the overall beauty and functionality of the urban landscape.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Waterproofing",
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project17.jpg", alt: "Bridgeport Hospital" },
    cardTitle: "Bridgeport\nHospital",
  },
  {
    slug: "middlesex-hospital-parking-garage",
    title: "Middlesex Hospital Parking Garage Rehabilitation",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Middletown, CT",
    serviceLabel: "Concrete Restoration, Reinforcement Replacement, Epoxy Surface Coating, Concrete Sealer, Line Striping",
    yearLabel: "2012 - Ongoing",
    heroImage: {
      src: "/projects/project18.jpg",
      alt: "Middlesex Hospital Parking Garage exterior",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Restoring a hospital parking garage involves a comprehensive approach encompassing structural repairs, concrete restoration, and epoxy surface coating application. The process begins with a thorough assessment to identify and address structural weaknesses, such as cracks, spalling, or corrosion, ensuring the safety and integrity of the garage. Skilled professionals execute concrete restoration work, including patching, reinforcement installation, and crack sealing, to reinforce compromised areas and prevent further deterioration. Finally, a durable epoxy surface coating is applied to the garage top deck, enhancing durability, resistance to wear and tear, and facilitating easy maintenance. Through these measures, the parking garage is restored to optimal condition, providing a safe and reliable space for hospital staff, patients, and visitors.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Concrete Restoration",
      "Reinforcement Replacement",
      "Epoxy Surface Coating",
      "Concrete Sealer",
      "Line Striping"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [],

    cardImage: { src: "/projects/project18.jpg", alt: "Middlesex Hospital Parking Garage" },
    cardTitle: "Middlesex Hospital\nParking Garage",
  },
  {
    slug: "yale-paul-rudolph-hall",
    title: "Yale University – Paul Rudolph Hall",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "New Haven, CT",
    serviceLabel: "Vertical & Horizontal Concrete Restoration, Restoring/Cleaning Exterior Surfaces, Waterproof Installation, Sealer Application , Thermal-Moisture/Sealant Installation",
    yearLabel: "2009",
    heroImage: {
      src: "/projects/project19.jpg",
      alt: "Paul Rudolph Hall exterior showing bush-hammered concrete facade",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Collaborating with specialists in architecture and design, the concrete restoration project focuses on revitalizing a significant landmark. Erected in 1963, this Brutalist masterpiece stands as a cornerstone of the Yale campus, commanding attention from a gateway corner. Spanning 114,000 square feet, the cast-in-place concrete structure boasts a formidable exterior that contrasts with its intricately designed interior. With 37 terraced levels spread across nine stories, including two below ground, the building offers a surprisingly expansive and multifaceted space within its fortress-like facade",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Vertical & Horizontal Concrete Restoration",
      "Restoring/Cleaning Exterior Surfaces",
      "Waterproof Installation",
      "Sealer Application",
      "Thermal-Moisture/Sealant Installation"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project19/img1.png", alt: "Rooftop terrace with planters and seating." },
      { src: "/projects/project19/img2.jpg", alt: "Exterior building façade after restoration." },
      { src: "/projects/project19/img3.png", alt: "Concrete courtyard with planters." },
      { src: "/projects/project19/img4.jpg", alt: "Glass corner façade detail."},
    ],

    cardImage: { src: "/projects/project19.jpg", alt: "Yale University Paul Rudolph Hall" },
    cardTitle: "Yale University\nPaul Rudolph Hall",
  },
  {
    slug: "crown-temple-street-garages",
    title: "Crown & Temple Street Garages",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "New Haven, CT",
    serviceLabel: "Waterproofing, Parking Structure Restoration, Concrete Restoration, Masonry Restoration",
    yearLabel: "2023",
    heroImage: {
      src: "/projects/project20.jpg",
      alt: "Crown and Temple Street Garages exterior view",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Restoring a parking garage involves comprehensive structural and concrete repairs to ensure safety and longevity. Initially, a thorough assessment is conducted to identify areas of deterioration, such as cracks, spalling, or corrosion. Skilled professionals then undertake repair work, which included concrete patching, reinforcement installation, and crack sealing to address structural weaknesses ensuring the parking garage remains a safe and functional asset for years to come.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Waterproofing",
      "Parking Structure Restoration",
      "Concrete Restoration",
      "Masonry Restoration"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project20/img1.jpg", alt: "Concrete façade with scaffolding." },
      { src: "/projects/project20/img2.jpg", alt: "Rooftop" },
      { src: "/projects/project20/img3.jpg", alt: "Details." },
      { src: "/projects/project20/img4.jpg", alt: "Parking garage deck surface." },
    ],

    cardImage: { src: "/projects/project20.jpg", alt: "Crown & Temple Street Garages" },
    cardTitle: "Crown & Temple Street\nGarages",
  },
  {
    slug: "st-roch-church-rehabilitation",
    title: "St. Roch Church Rehabilitation",
    completedLabel: "COMPLETED PROJECT",
    locationLabel: "Greenwich, CT",
    serviceLabel: "Granite Stone Replacement & Reinstallation , Granite Facade Repointing, Terra-Cotta Cap-Stone Replacement , Bell Tower Roof Replacement , Concrete Sidewalk Replacement, Stucco Installation",
    yearLabel: "2022",
    heroImage: {
      src: "/projects/project21.jpg",
      alt: "St. Roch Church exterior stone facade",
    },

    challengeTitle: "Our Challenge",
    challengeBody:
      "Restoring the exterior masonry of a historic church involves meticulous craftsmanship and attention to detail. The process begins with a thorough assessment of the existing masonry, identifying areas of damage such as cracks, erosion, or dislodged stones. Skilled masons then carefully remove damaged sections and clean the surface to reveal the original beauty of the stone or brickwork. Using traditional techniques and materials, such as lime mortar, they skillfully repair and replace damaged elements, ensuring structural integrity while preserving the architectural integrity of the building. Finally, the restored masonry is protected with appropriate sealants or coatings to safeguard against future deterioration, ensuring the church remains a beacon of history and heritage for generations to come.",
    noteworthyTitle: "Noteworthy Stats",
    noteworthyBullets: [
      "Granite Stone Replacement & Reinstallation",
      "Granite Facade Repointing",
      "Terra-Cotta Cap-Stone Replacement",
      "Bell Tower Roof Replacement",
      "Concrete Sidewalk Replacement",
      "Stucco Installation"
    ],

    galleryTitle: "Project Gallery",
    galleryImages: [
      { src: "/projects/project21/img1.jpg", alt: "Building façade wrapped for restoration." },
      { src: "/projects/project21/img2.jpg", alt: "Scaffolded façade during repair work." },
    ],

    cardImage: { src: "/projects/project21.jpg", alt: "St. Roch Church Rehabilitation" },
    cardTitle: "St. Roch Church\nRehabilitation",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getRecentProjects(currentSlug?: string, count = 3) {
  const list = currentSlug ? projects.filter((p) => p.slug !== currentSlug) : projects
  return list.slice(0, count)
}