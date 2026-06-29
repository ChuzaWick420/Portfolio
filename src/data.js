export const data = {
    Assets: {
        "pfp": "assets/pfp.png",
        "real_name": "Muhammad Zaid",
        "user_name": "ChuzaWick420",
    },

    Socials: {
        "Github": {
            placeholder: "github.com/ChuzaWick420",
            url: "https://github.com/ChuzaWick420"
        },
        "LinkedIn": {
            placeholder: "linkedin.com/in/chuzawick420/",
            url: "https://www.linkedin.com/in/chuzawick420/"
        },
        //"Itch.io": {
        //    placeholder: "itch.io/profile/chuzawick420",
        //    url: "https://itch.io/profile/chuzawick420"
        //},
        //"ShaderToy": {
        //    placeholder: "shadertoy.com/profile/ChuzaWick420",
        //    url: "https://www.shadertoy.com/profile/ChuzaWick420"
        //},
        //"NexusMode": {
        //    placeholder: "next.nexusmods.com/profile/ChuzaWick420",
        //    url: "https://next.nexusmods.com/profile/ChuzaWick420"
        //},
        //"ArtStation": {
        //    placeholder: "artstation.com/chuzawick420",
        //    url: "https://www.artstation.com/chuzawick420"
        //},
        //"CurseForge": {
        //    placeholder: "curseforge.com/members/chuzawick420/projects",
        //    url: "https://www.curseforge.com/members/chuzawick420/"
        //},
        //"Modrinth": {
        //    placeholder: "modrinth.com/user/ChuzaWick420",
        //    url: "https://modrinth.com/user/ChuzaWick420"
        //},
        //"ShaderLabs": {
        //    placeholder: "shaderlabs.org/wiki/User:492543441826349066",
        //    url: "https://shaderlabs.org/wiki/User:492543441826349066"
        //},
        //"Gitlab": {
        //    placeholder: "gitlab.com/ChuzaWick420",
        //    url: "https://gitlab.com/ChuzaWick420"
        //},
    },

    Summary: "Computer Science student experienced in building software projects in Python and C++, including web publishing automation, game development, and multithreaded graphics programming. Strong foundation in software processes, architecture, design patterns, documentation, algorithms, data structures, version control and mathematics.",

    Skills: {
        "Technical": {
            comments: [
                "C, C++, Python, JavaScript",
                "Git, LaTeX, SFML, Pygame, SQLite",
                "Object Orientation, Design Patterns (Observer, Strategy), Version Control, CI/CD, Algorithms & Data structures, Unit Testing"
            ]
        },
        "Soft": {
            comments: [
                "Abstract thinking",
                "Critical thinking",
                "Analytical problem-solving",
                "Technical writing"
            ]
        },
    },

    Projects: {
        "Notes Publisher": {
            comments: [
                "Architected an automated personal knowledge-base pipeline that converts Markdown notes written in Obsidian into a published website using MkDocs, Python, and LaTeX. ",
                "Configured a GitHub Actions workflow to automatically build and deploy the site to GitHub Pages on every push, eliminating manual deployment steps.",
                "Designed an automated backup workflow using Google Drive, GitHub, and GitLab to provide redundant storage and reduce risk of data loss from hardware or power failures."
            ],
            code: {
                placeholder: "github.com/ChuzaWick420/notes_publisher",
                url: "https://github.com/ChuzaWick420/notes_publisher"
            },
            source: "https://chuzawick420.github.io/notes_publisher/"
        },
        "FYP AI Based Puzzle Game": {
            comments: [
                "Designed and built a puzzle game engine in Python using a layered architecture, applying the Observer and Strategy design patterns to decouple game logic from the UI (made with Pygame) and persistent data. ",
                "Built a JSON and SQLite-backed persistence layer to store game state and user data.",
                "Implemented time-slicing for input handling and event handling to keep the UI responsive during gameplay. "
            ],
            code: {
                placeholder: "github.com/ChuzaWick420/FYP_AI_Based_Puzzle_Game",
                url: "https://github.com/ChuzaWick420/FYP_AI_Based_Puzzle_Game"
            }
        },
        "Ray Tracing": {
            comments: [
                "Developed a multi-threaded ray tracing renderer in C++ that distributes pixel computation across a configurable number of threads, boosting image generation by approximately 400% and shows the result on a SFML window.",
                "Built a JSON-driven configuration system covering four parameter groups — scene objects (size, color, material, position), camera (position, orientation, focal length), image output (dimensions, samples per pixel), and thread count — so scenes can be re-rendered without touching code. "
            ],
            code: {
                placeholder: "github.com/ChuzaWick420/rayTracing",
                url: "https://github.com/ChuzaWick420/rayTracing"
            },
            source: "https://chuzawick420.github.io/notes_publisher/Projects/rayTracing/proj_raytracing_main/"
        },
        "Tex Documents Template": {
            comments: [
                "Created a LaTeX template with control parameters (used to change the color schemes) to generate PDFs according to user preference."
            ],
            code: {
                placeholder: "github.com/ChuzaWick420/tex_documents_template",
                url: "https://github.com/ChuzaWick420/tex_documents_template"
            },
        },
    },

    Experience: {
        "Inbound Agency LTD": {
            comments: [
                "Front End Intern — Jan 2024 — Feb 2024 — Multan, Pakistan",
                "Developed UI components using HTML, CSS, JavaScript, and React under senior developer guidance.",
                "Performed database queries and content updates through a Strapi headless CMS."
            ],
        },
    },


    Education: {
        "Virtual University of Pakistan": {
            comments: [
                "Enrolled in BS - Computer Science",
                "Study year: 2022 - Expected 2026"
            ],
        },
    },

    Benchmarks: {
        "National Skill Competency Test": {
            comments: [
                "Percentile: 90%",
                "Conducted by Virtual University of Pakistan",
                "Dated: April 2026",
            ],
        }
    }

    //Contributions: {},
    //Interests: {}
}
