// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-joining",
          title: "Joining",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/joining/";
          },
        },{id: "post-posterior-sampling-via-autoregressive-generation",
        
          title: "Posterior Sampling via Autoregressive Generation",
        
        description: "Bridging Generative Sequence Modeling and Online Decision-Making",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ps-ar/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-organized-an-invited-session-at-the-2022-institute-of-mathematical-statistics-annual-meeting-on-inference-methods-for-adaptively-collected-data-the-speakers-will-be-nathan-kallus-koulik-khamaru-evan-munro-and-myself-joseph-jay-williams-and-nina-deliu-will-chair-the-session",
          title: 'I organized an invited session at the 2022 Institute of Mathematical Statistics Annual...',
          description: "",
          section: "News",},{id: "news-i-defended-my-thesis-on-statistical-inference-for-adaptive-experimentation-my-slides-are-here-my-thesis-committee-members-were-susan-murphy-lucas-janson-milind-tambe-and-jonas-oddur-jonasson",
          title: 'I defended my thesis on Statistical Inference for Adaptive Experimentation. My slides are...',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-as-a-part-of-the-harvard-women-in-statistics-and-data-science-series",
          title: 'I was interviewed as a part of the Harvard Women in Statistics and...',
          description: "",
          section: "News",},{id: "news-speaking-at-the-session-on-integrating-algorithms-and-analysis-for-adaptively-randomized-experiments-at-jsm-in-toronto-the-session-is-organized-by-john-langford-sofia-villar-aaditya-ramdas-joseph-jay-williams-and-tong-li",
          title: 'Speaking at the session on Integrating Algorithms and Analysis for Adaptively Randomized Experiments...',
          description: "",
          section: "News",},{id: "news-i-will-be-speaking-at-jsm-in-the-session-on-statistical-challenges-and-new-directions-for-adaptive-experimentation-organized-by-aaditya-ramdas-i-will-also-chair-the-session-on-new-methods-in-causal-inference-and-reinforcement-learning-for-personalized-decision-making",
          title: 'I will be speaking at JSM in the session on Statistical Challenges and...',
          description: "",
          section: "News",},{id: "news-co-organizing-workshop-on-deployable-rl-from-research-to-practice-at-rlc-please-come-by",
          title: 'Co-organizing workshop on Deployable RL: From Research to Practice at RLC! Please come...',
          description: "",
          section: "News",},{id: "news-i-am-co-organizing-a-session-at-ims-bernoulli-on-the-frontiers-of-adaptive-experimentation-the-speakers-will-be-dean-foster-maria-dimakopolou-koulik-khamaru-and-myself",
          title: 'I am co-organizing a session at IMS-Bernoulli on the Frontiers of Adaptive Experimentation....',
          description: "",
          section: "News",},{id: "news-i-will-speak-at-amazon-berlin-as-a-part-of-a-workshop-with-the-statml-cdt",
          title: 'I will speak at Amazon Berlin as a part of a workshop with...',
          description: "",
          section: "News",},{id: "news-i-will-attend-rldm-and-have-an-oral-presentation-on-our-work-on-exploration-via-generation-of-missing-data-see-here-and-here",
          title: 'I will attend RLDM and have an oral presentation on our work on...',
          description: "",
          section: "News",},{id: "news-i-will-attend-the-apple-health-research-summit",
          title: 'I will attend the Apple Health Research Summit!',
          description: "",
          section: "News",},{id: "news-i-will-be-in-atlanta-for-ieee-embs-2025-conference-on-biomedial-and-health-informatics-i-will-be-speaking-in-a-session-on-timely-health-support-outside-the-clinic-organized-by-asim-gazi",
          title: 'I will be in Atlanta for IEEE-EMBS 2025 Conference on Biomedial and Health...',
          description: "",
          section: "News",},{id: "news-i-will-be-in-atlanta-for-informs-2025-yongyi-guo-and-i-will-organize-a-session-at-informs-on-applications-of-statistical-reinforcement-learning",
          title: 'I will be in Atlanta for INFORMS 2025. Yongyi Guo and I will...',
          description: "",
          section: "News",},{id: "news-i-will-attend-the-dagstuhl-seminar-on-ai-for-social-good",
          title: 'I will attend the Dagstuhl Seminar on AI for Social Good.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
