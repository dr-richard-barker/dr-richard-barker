/* ============================================================================
   COSE — Global Master Site Registry (sites.js)
   Authoritative registry of Dr. Richard Barker's space biology, biophysics,
   BLSS, astronaut health, and educational game repositories & hubs.
   ========================================================================== */
window.BARKER_SITES = {
  brand: {
    name: "COSE",
    url: "https://cosecloud.com/",
    logo: "https://dr-richard-barker.github.io/Plant_response_to_radiation/cose/cose-logo.png"
  },
  hub: "https://dr-richard-barker.github.io/CoSE_Cloud/Hub/",
  profile: "https://github.com/dr-richard-barker",
  
  // Scoped views for the navigation panel
  scopes: {
    astrobotany: {
      label: "AstroBotany",
      sections: [
        {
          name: "3D Atlases & Omics",
          blurb: "Spaceflight transcriptomics, 3D anatomical atlases, and multi-omics systems biology.",
          ids: [
            "arabidopsis-atlas",
            "rice-atlas",
            "Photorespiration_multiomics_microgravity",
            "arabidopsis-spaceflight-omics",
            "arabidopsis-drem-osdr",
            "Plant_response_to_radiation",
            "tomato-spaceflight-VEG05-APH-SA-integration",
            "veg05-integrated-omics",
            "OSD615-glycome-cytoskeleton-systems-biology",
            "OSDR_Plant_Alternative_Splicing",
            "Circadian_decoder",
            "Tropism_autodecoder_2026",
            "B_rappa_LLGCSS",
            "APEX05_results_and_code",
            "osdr-plant-microbiome",
            "Microbiome_of_seedlings_in_space",
            "brachypodium-gwas-spaceflight",
            "arabidopsis-gwas-spaceflight"
          ]
        },
        {
          name: "Biophysics & Gas Exchange",
          blurb: "Quantum biology, leaf boundary-layer CFD, and gravity-dependent gas transport.",
          ids: [
            "quantum-biology-atlas",
            "LunarLeaf-CFD",
            "Airflow_omics",
            "Physics-simulator-for-statolith-modelling-"
          ]
        },
        {
          name: "Phenotyping & Laboratory Tools",
          blurb: "Computer vision, AI segmentation, and interactive decoders.",
          ids: [
            "cose-cell-segmenter",
            "astroroot",
            "astroroot-painter",
            "germinator-ai",
            "virtual-root",
            "cose-fiji",
            "AstroBotany_calibration_image_sharing_and_analysis",
            "Anthocyanin-Image-analysis",
            "Seed_sowing_simulator",
            "Redox_decoder",
            "SBGN-Pathway-viewer",
            "eFP-report-generator"
          ]
        },
        {
          name: "Education & Outreach",
          blurb: "Academic initiatives, student workflows, and community programs.",
          ids: ["AIRI", "madwest-astrobotany", "Space_Biology_Education.io"]
        }
      ]
    },

    deepspaceag: {
      label: "Deep Space Agriculture",
      sections: [
        {
          name: "BLSS & Closed-Loop Systems",
          blurb: "Bioregenerative life support systems (BLSS), carbon closure, and microgreen chambers.",
          ids: [
            "LunarFarm-BLSS",
            "lunar-regolith-blss-review",
            "Rothamsted_BroadBaulk",
            "SpaceMineralAtlas",
            "OSDR-Veggie-Nutrition-Dashboard",
            "microgreen-chamber-cfd",
            "spaceflight-plant-hardware-cfd",
            "fungal-bgc-atlas",
            "AstroMycology",
            "biosim-nextgen"
          ]
        },
        {
          name: "Planetary Regolith & Environment",
          blurb: "Plant cultivation in lunar/Martian regolith, magnetic anomalies, and sample curation.",
          ids: [
            "AstroRegolith",
            "ares-curation",
            "lunar-regolith-blss-review",
            "lunar-magnetic-biology",
            "mars-magnetic-biology",
            "clpds-planetary-visualization",
            "earth-magnetosphere-4d-viz",
            "nssdc-cosmic-explorer",
            "lunar-lfm-explorer"
          ]
        },
        {
          name: "Crop Stress & Seed Biology",
          blurb: "Deep space stress decoders and candidate crops for off-Earth farming.",
          ids: [
            "deepspace-seed-stress-decoder",
            "brachypodium-gwas-spaceflight",
            "rice-atlas",
            "TICTOC",
            "VEGGIE_Tom_Red_Blue_Leaves_and_adv_roots",
            "PhysioSpace_stress_decoding_VEG05"
          ]
        }
      ]
    },

    astronauthealth: {
      label: "Astronaut Health",
      sections: [
        {
          name: "Physiology & Countermeasures",
          blurb: "Muscle atrophy multi-omics, oncogenic biomarker discovery, and nutritional reversals.",
          ids: [
            "Muscle-Atrophy-Multi-Omics-OSDR",
            "astronaut-oncogene-biomarkers",
            "Astronaut_flavenoids_and_biomarkers",
            "Astronaut_brain_food",
            "astronaut-mineral-deficiency-multiomics",
            "SpaceMineralAtlas",
            "OSDR-Veggie-Nutrition-Dashboard"
          ]
        },
        {
          name: "Dashboards & Analytics",
          blurb: "Interactive crew health trend exploration and OSDR database mining.",
          ids: [
            "AstronautHealth",
            "Astronaut_trends",
            "OSDR_X-species_V2"
          ]
        }
      ]
    },

    simulations: {
      label: "Serious Games & Academy",
      sections: [
        {
          name: "CoSE Academy Modules",
          blurb: "Interactive assessment modules with embedded real-time space colony simulations.",
          ids: [
            "dr-richard-barker",
            "LunarSims",
            "lunar-arcade",
            "Settlers_of_the_Moon_or_Mars",
            "Training_LLM_game-theory_using_bloodbowl",
            "Lunar_Red_Alert",
            "cose-arcade"
          ]
        }
      ]
    }
  },

  // Full catalog organized by thematic group
  groups: [
    {
      name: "Featured Flagships",
      items: [
        {
          id: "quantum-biology-atlas",
          emoji: "⚛️",
          title: "Quantum Biology Atlas",
          desc: "Cross-species ontology and SBGN pathway maps for quantum-biological processes (radical-pair, Fe-S, flavin) linked to NASA OSDR.",
          url: "https://dr-richard-barker.github.io/quantum-biology-atlas/"
        },
        {
          id: "LunarLeaf-CFD",
          emoji: "🍃",
          title: "Lunar LEAF — Gas Exchange CFD",
          desc: "Validated in-browser CFD model of gravity-dependent gas-exchange boundary layers around Arabidopsis (leaf to canopy to flight hardware).",
          url: "https://dr-richard-barker.github.io/LunarLeaf-CFD/"
        },
        {
          id: "arabidopsis-atlas",
          emoji: "🌿",
          title: "Arabidopsis 3D Atlas",
          desc: "Interactive, organ-selectable 3D atlas of Arabidopsis thaliana grounded in cited structural literature and real NASA OSDR spaceflight transcriptomics.",
          url: "https://dr-richard-barker.github.io/arabidopsis-atlas/"
        },
        {
          id: "Photorespiration_multiomics_microgravity",
          emoji: "🍃",
          title: "Gas Transport Predicts Spaceflight Omics",
          desc: "Interactive FvCB model and cross-experiment analysis predicting the Arabidopsis spaceflight transcriptome across 6 flight studies.",
          url: "https://dr-richard-barker.github.io/Photorespiration_multiomics_microgravity/"
        },
        {
          id: "LunarFarm-BLSS",
          emoji: "🔄",
          title: "Lunar Farm BLSS Study",
          desc: "Human-in-the-loop bioregenerative life support: closed carbon loop dynamics and agricultural biodiversity economics.",
          url: "https://dr-richard-barker.github.io/LunarFarm-BLSS/"
        },
        {
          id: "Rothamsted_BroadBaulk",
          emoji: "🌾",
          title: "Rothamsted Broadbalk Explorer",
          desc: "180+ Years of continuous wheat yields, climate overlays & scientific data narratives for long-term crop resilience.",
          url: "https://dr-richard-barker.github.io/Rothamsted_BroadBaulk/"
        },
        {
          id: "dr-richard-barker",
          emoji: "🌌",
          title: "CoSE Academy Portal",
          desc: "Educational impact assessment portal featuring 7 lunar & Martian serious games with pre/post-session research evaluations.",
          url: "https://dr-richard-barker.github.io/dr-richard-barker/"
        },
        {
          id: "Plant_response_to_radiation",
          emoji: "☢️",
          title: "Plant Radiation Kinetic Landscape",
          desc: "Cross-study transcriptomic pipeline resolving plant ionizing radiation response trajectories across 10 NASA OSDR datasets.",
          url: "https://dr-richard-barker.github.io/Plant_response_to_radiation/"
        },
        {
          id: "deepspace-seed-stress-decoder",
          emoji: "🌰",
          title: "DeepSpace Seed Stress Decoder",
          desc: "Single-cell atlas and decoders identifying Arabidopsis seed cell types susceptible to deep-space gravity, radiation, and hypoxia.",
          url: "https://dr-richard-barker.github.io/deepspace-seed-stress-decoder/"
        },
        {
          id: "Muscle-Atrophy-Multi-Omics-OSDR",
          emoji: "💪",
          title: "Muscle Atrophy Multi-Omics",
          desc: "Cross-species meta-analysis of spaceflight muscle atrophy transcriptomics & translation to plant-based countermeasures.",
          url: "https://dr-richard-barker.github.io/Muscle-Atrophy-Multi-Omics-OSDR/"
        },
        {
          id: "astronaut-oncogene-biomarkers",
          emoji: "🎗️",
          title: "Astronaut Oncogene Biomarkers",
          desc: "Cross-tissue transcriptomic meta-analysis: how spaceflight and radiation converge on shared oncogenic programs across OSDR and JAXA.",
          url: "https://dr-richard-barker.github.io/astronaut-oncogene-biomarkers/"
        },
        {
          id: "veg05-integrated-omics",
          emoji: "🍅",
          title: "VEG-05 Integrated Omics",
          desc: "Integrated host transcriptome (OSD-767) x microbiome (OSD-766) multi-omics analysis of ISS VEG-05 dwarf tomato.",
          url: "https://dr-richard-barker.github.io/veg05-integrated-omics/"
        }
      ]
    },

    {
      name: "3D Atlases & Spaceflight Omics",
      items: [
        {
          id: "rice-atlas",
          emoji: "🌾",
          title: "Rice Anatomical Atlas",
          desc: "Interactive anatomical and genomic atlas for rice (Oryza sativa) targeting space agriculture cereal candidates.",
          url: "https://dr-richard-barker.github.io/rice-atlas/"
        },
        {
          id: "arabidopsis-drem-osdr",
          emoji: "🧬",
          title: "DREM Cell-Type Prior",
          desc: "Cell-type-weighted regulatory prior for DREM over NASA OSDR Arabidopsis pseudo-time-series.",
          url: "https://dr-richard-barker.github.io/arabidopsis-drem-osdr/"
        },
        {
          id: "arabidopsis-spaceflight-omics",
          emoji: "🌿",
          title: "Arabidopsis Spaceflight Omics",
          desc: "LASSO biomarker panel (NASA OSDR) + scPlantLLM single-cell atlas integration + Ca2+-dominated cell-cell communication.",
          url: "https://dr-richard-barker.github.io/arabidopsis-spaceflight-omics/"
        },
        {
          id: "tomato-spaceflight-VEG05-APH-SA-integration",
          emoji: "🍅",
          title: "Tomato Spaceflight VEG-05 x APH",
          desc: "Cross-mission integration of two ISS tomato spaceflight RNA-seq studies: salicylic acid and defense priming.",
          url: "https://dr-richard-barker.github.io/tomato-spaceflight-VEG05-APH-SA-integration/"
        },
        {
          id: "OSD615-glycome-cytoskeleton-systems-biology",
          emoji: "🕸️",
          title: "OSD-615 Glycome-Cytoskeleton",
          desc: "Dynamic systems biology linking cell-wall glycomics to actin and kinesin/myosin cytoskeletal machinery under microgravity.",
          url: "https://dr-richard-barker.github.io/OSD615-glycome-cytoskeleton-systems-biology/"
        },
        {
          id: "OSDR_Plant_Alternative_Splicing",
          emoji: "✂️",
          title: "Plant Spaceflight Alternative Splicing",
          desc: "Coordinated multi-study analysis of alternative splicing across 199 Arabidopsis and Brassica spaceflight transcriptomes.",
          url: "https://dr-richard-barker.github.io/OSDR_Plant_Alternative_Splicing/"
        },
        {
          id: "Circadian_decoder",
          emoji: "⏰",
          title: "Circadian Clock Decoder",
          desc: "ChronoGauge deep learning meta-analysis of spaceflight circadian clock phase disruption.",
          url: "https://dr-richard-barker.github.io/Circadian_decoder/"
        },
        {
          id: "Tropism_autodecoder_2026",
          emoji: "🧭",
          title: "Tropism Autodecoder 2026",
          desc: "Auto-decoder atlas of plant tropism responses: 1,337 OSDR/GEO samples deconvolved via a Salk single-cell atlas auto-decoder.",
          url: "https://dr-richard-barker.github.io/Tropism_autodecoder_2026/"
        },
        {
          id: "OSDR_X-species_V2",
          emoji: "🧬",
          title: "OSDR Cross-Species V2",
          desc: "Cross-species meta-analysis of spaceflight transcriptomics (22 NASA OSDR datasets, 6 species) revealing conserved mitochondrial suppression.",
          url: "https://dr-richard-barker.github.io/OSDR_X-species_V2/"
        },
        {
          id: "osdr-plant-microbiome",
          emoji: "🦠",
          title: "OSDR Plant Microbiome",
          desc: "FAIR relational + graph database, guild-inference ML, and interactive report for NASA OSDR plant-associated microbiome datasets.",
          url: "https://dr-richard-barker.github.io/osdr-plant-microbiome/"
        },
        {
          id: "Microbiome_of_seedlings_in_space",
          emoji: "🧫",
          title: "Space Seedling Microbiome",
          desc: "Metagenomics analysis of root-associated and phyllosphere microbial communities of seedlings in spaceflight.",
          url: "https://dr-richard-barker.github.io/Microbiome_of_seedlings_in_space/"
        },
        {
          id: "brachypodium-gwas-spaceflight",
          emoji: "🌾",
          title: "Brachypodium Spaceflight GWAS",
          desc: "Gravitropism GWAS and ISS multi-omics targeting monocot candidate crops for long-duration space agriculture.",
          url: "https://dr-richard-barker.github.io/brachypodium-gwas-spaceflight/"
        },
        {
          id: "arabidopsis-gwas-spaceflight",
          emoji: "🔬",
          title: "Arabidopsis Spaceflight GWAS",
          desc: "Genome-wide association study mapping genetic variation across Arabidopsis accessions under microgravity stressors.",
          url: "https://dr-richard-barker.github.io/arabidopsis-gwas-spaceflight/"
        }
      ]
    },

    {
      name: "Biophysics, CFD & Foundation Models",
      items: [
        {
          id: "spaceflight-plant-hardware-cfd",
          emoji: "🛸",
          title: "Flight Hardware CFD Scaling",
          desc: "OpenFOAM 3D CFD of boundary-layer scaling across five spaceflight growth chambers at four gravity regimes.",
          url: "https://dr-richard-barker.github.io/spaceflight-plant-hardware-cfd/"
        },
        {
          id: "microgreen-chamber-cfd",
          emoji: "🌬️",
          title: "Microgreen Chamber CFD",
          desc: "3D internal-flow CFD of a microgreen growth chamber (OpenFOAM v2606): baseline airflow, buoyancy, and gravity study.",
          url: "https://dr-richard-barker.github.io/microgreen-chamber-cfd/"
        },
        {
          id: "Airflow_omics",
          emoji: "💨",
          title: "Airflow Omics Model",
          desc: "CFD-guided multi-omics meta-analysis connecting microgravity boundary-layer gas exchange with transcriptional responses.",
          url: "https://dr-richard-barker.github.io/Airflow_omics/"
        },
        {
          id: "Physics-simulator-for-statolith-modelling-",
          emoji: "⚖️",
          title: "Statolith Physics Simulator",
          desc: "Interactive physical simulation of amyloplast/statolith sedimentation in plant columella cells under variable gravity vectors.",
          url: "https://dr-richard-barker.github.io/Physics-simulator-for-statolith-modelling-/"
        },
        {
          id: "lunar-lfm-explorer",
          emoji: "🌖",
          title: "NASA-IBM Lunar Foundation Model Explorer",
          desc: "Interactive multimodal explorer & remote sensing diagnostics for the NASA-IBM Lunar Foundation Model (ViT-B / TerraMind).",
          url: "https://dr-richard-barker.github.io/lunar-lfm-explorer/"
        },
        {
          id: "earth-magnetosphere-4d-viz",
          emoji: "🛡️",
          title: "4D Geospace Explorer",
          desc: "Dynamic 4D visualization of Earth's magnetosphere, solar wind interactions, and magnetic shielding for space biology.",
          url: "https://dr-richard-barker.github.io/earth-magnetosphere-4d-viz/"
        },
        {
          id: "lunar-magnetic-biology",
          emoji: "🧲",
          title: "Lunar Magnetic Biology",
          desc: "Interactive 3D globe visualizing lunar crustal magnetic anomalies and their biological implications.",
          url: "https://dr-richard-barker.github.io/lunar-magnetic-biology/"
        },
        {
          id: "mars-magnetic-biology",
          emoji: "🔴",
          title: "Mars Magnetic Biology",
          desc: "Crustal magnetic field heterogeneity & biological implications at candidate Mars landing sites.",
          url: "https://dr-richard-barker.github.io/mars-magnetic-biology/"
        },
        {
          id: "clpds-planetary-visualization",
          emoji: "🪐",
          title: "Planetary Visualization (CLPDS)",
          desc: "Interactive data visualization suite for Chinese lunar (Chang'e) and Martian (Tianwen) exploration datasets.",
          url: "https://dr-richard-barker.github.io/clpds-planetary-visualization/"
        },
        {
          id: "nssdc-cosmic-explorer",
          emoji: "🛰️",
          title: "NSSDC Cosmic Explorer",
          desc: "Multi-mission space science and planetary exploration data visualization platform.",
          url: "https://dr-richard-barker.github.io/nssdc-cosmic-explorer/"
        }
      ]
    },

    {
      name: "BLSS, Astromaterials & Regolith",
      items: [
        {
          id: "lunar-regolith-blss-review",
          emoji: "🧱",
          title: "Sintered Regolith for BLSS",
          desc: "From Dust to Bio-Infrastructure: Sintered Regolith Ceramics for Lunar Bioregenerative Life Support Systems (npj Microgravity review).",
          url: "https://dr-richard-barker.github.io/lunar-regolith-blss-review/"
        },
        {
          id: "AstroRegolith",
          emoji: "🌱",
          title: "AstroRegolith Reanalysis",
          desc: "Open database & growth-anchored reanalysis of plant growth in lunar, Martian, and asteroid regolith (joined to OSD-476).",
          url: "https://dr-richard-barker.github.io/AstroRegolith/"
        },
        {
          id: "ares-curation",
          emoji: "🗂️",
          title: "NASA ARES Astromaterials Curation",
          desc: "FAIR client for NASA's ARES/JSC astromaterials catalogues — Apollo samples, PDS photos, planetary simulants & 3D models.",
          url: "https://dr-richard-barker.github.io/ares-curation/"
        },
        {
          id: "SpaceMineralAtlas",
          emoji: "🦴",
          title: "Space Mineral Atlas",
          desc: "Mining NASA LSDA and OSDR for spaceflight mineral-ion and dietary data (Ca, Mg, K, P) & countermeasures.",
          url: "https://dr-richard-barker.github.io/SpaceMineralAtlas/"
        },
        {
          id: "OSDR-Veggie-Nutrition-Dashboard",
          emoji: "🥬",
          title: "Veggie Nutrition Dashboard",
          desc: "Multi-crop space agriculture meta-analysis (OSD-745): nutritional profiles, carotenoids, and biomass under microgravity.",
          url: "https://dr-richard-barker.github.io/OSDR-Veggie-Nutrition-Dashboard/"
        },
        {
          id: "fungal-bgc-atlas",
          emoji: "🍄",
          title: "Fungal BGC Atlas",
          desc: "Curated knowledge base of 609 MIBiG-linked fungal biosynthetic gene cluster dossiers with relational graph dashboard.",
          url: "https://dr-richard-barker.github.io/fungal-bgc-atlas/"
        },
        {
          id: "AstroMycology",
          emoji: "🍄",
          title: "AstroMycology 3D Scan Library",
          desc: "Interactive image and 3D mesh viewer with volume and surface area analysis for fungal space biology.",
          url: "https://dr-richard-barker.github.io/AstroMycology/"
        },
        {
          id: "biosim-nextgen",
          emoji: "🚀",
          title: "BioSim Next-Gen",
          desc: "4K HLS Rocket Habitat Simulation: dynamic Three.js canvas, agent mind, and environmental life support controls.",
          url: "https://dr-richard-barker.github.io/biosim-nextgen/"
        }
      ]
    },

    {
      name: "Astronaut Health & Oncology",
      items: [
        {
          id: "AstronautHealth",
          emoji: "🩺",
          title: "Astronaut Health Hub",
          desc: "Central hub for human physiology, transcriptomic biomarkers, and nutritional countermeasures for spaceflight.",
          url: "https://dr-richard-barker.github.io/AstronautHealth/"
        },
        {
          id: "Astronaut_flavenoids_and_biomarkers",
          emoji: "🧬",
          title: "Astronaut Flavonoid Reversal Screen",
          desc: "Spaceflight oncogenic biomarker discovery and opposite-forcing drug/flavonoid reversal screen (R + LINCS L1000).",
          url: "https://dr-richard-barker.github.io/Astronaut_flavenoids_and_biomarkers/"
        },
        {
          id: "Astronaut_brain_food",
          emoji: "🥗",
          title: "Astronaut Nutritional Countermeasures",
          desc: "Spaceflight transcriptomic signatures reversed via LINCS L1000, translated into dietary and plant-derived compounds.",
          url: "https://dr-richard-barker.github.io/Astronaut_brain_food/"
        },
        {
          id: "Astronaut_trends",
          emoji: "📊",
          title: "Astronaut Trends Dashboard",
          desc: "Interactive dashboard visualizing physiological trends across historic astronaut missions.",
          url: "https://dr-richard-barker.github.io/Astronaut_trends/"
        },
        {
          id: "astronaut-mineral-deficiency-multiomics",
          emoji: "💊",
          title: "Mineral Pathway Multi-Omics",
          desc: "Mineral-pathway transcriptional and molecular responses to spaceflight across astronaut and rodent datasets.",
          url: "https://dr-richard-barker.github.io/astronaut-mineral-deficiency-multiomics/"
        }
      ]
    },

    {
      name: "AI Phenotyping & Laboratory Web Tools",
      items: [
        {
          id: "cose-cell-segmenter",
          emoji: "🔬",
          title: "CoSE Cell Segmenter",
          desc: "Desktop GUI (napari + Cellpose) for automated cell, nucleus, and spore segmentation with phenotyping measurement export.",
          url: "https://dr-richard-barker.github.io/cose-cell-segmenter/"
        },
        {
          id: "astroroot",
          emoji: "🛰️",
          title: "AstroRoot",
          desc: "Install-free, in-browser root image phenotyping for students and researchers (RootNav 1 GUI + RootNav 2.0 ML).",
          url: "https://dr-richard-barker.github.io/astroroot/"
        },
        {
          id: "astroroot-painter",
          emoji: "🖌️",
          title: "AstroRoot Painter",
          desc: "Browser front end for RootPainter's corrective-annotation training loop — AstroRoot's training companion.",
          url: "https://dr-richard-barker.github.io/astroroot-painter/"
        },
        {
          id: "germinator-ai",
          emoji: "🌾",
          title: "Germinator AI",
          desc: "In-browser computer vision tool for automated seed germination scoring and growth kinetics from time-lapse photography.",
          url: "https://dr-richard-barker.github.io/germinator-ai/"
        },
        {
          id: "cose-fiji",
          emoji: "🔭",
          title: "CoSE FIJI Bench",
          desc: "ImageJ 1.54 in the browser with SmartRoot, plant-phenotyping presets, and FAIR export. No installation required.",
          url: "https://dr-richard-barker.github.io/cose-fiji/"
        },
        {
          id: "virtual-root",
          emoji: "🌱",
          title: "The Virtual Root (SimuPlant)",
          desc: "Open, web-based rebuild of SimuPlant: a cell-based auxin transport model for the Arabidopsis root tip.",
          url: "https://dr-richard-barker.github.io/virtual-root/"
        },
        {
          id: "Seed_sowing_simulator",
          emoji: "🫘",
          title: "Seed Sowing Simulator",
          desc: "In-silico seed germination and root tropism simulation calibrated against real root system architecture (RSML) data.",
          url: "https://dr-richard-barker.github.io/Seed_sowing_simulator/"
        },
        {
          id: "SBGN-Pathway-viewer",
          emoji: "🗺️",
          title: "SBGN Pathway Viewer",
          desc: "Systems Biology Graphical Notation pathway viewer for space biology omics overlays.",
          url: "https://dr-richard-barker.github.io/SBGN-Pathway-viewer/"
        },
        {
          id: "eFP-report-generator",
          emoji: "📋",
          title: "Gene eFP Report Generator",
          desc: "Illustrative GO and tissue schematics per gene with direct links to BAR ePlant and TAIR data.",
          url: "https://dr-richard-barker.github.io/eFP-report-generator/"
        },
        {
          id: "infogenius-standalone",
          emoji: "💡",
          title: "InfoGenius",
          desc: "Standalone, keyless, browser-native topic research and scientific infographic generation tool.",
          url: "https://dr-richard-barker.github.io/infogenius-standalone/"
        },
        {
          id: "genai-spacebio-roadmap",
          emoji: "🗺️",
          title: "GenAI SpaceBio Roadmap",
          desc: "Cross-references Dr. Barker's portfolio against Cell's 15 challenges for generative AI in cell biology.",
          url: "https://github.com/dr-richard-barker/genai-spacebio-roadmap"
        }
      ]
    },

    {
      name: "Serious Space Simulations & Games",
      items: [
        {
          id: "LunarSims",
          emoji: "🌕",
          title: "Lunar Sims Suite",
          desc: "Original browser simulation games (Lunar Farm, Artemis City, Lunar Metro) in the spirit of classic Maxis management sims.",
          url: "https://dr-richard-barker.github.io/LunarSims/"
        },
        {
          id: "lunar-arcade",
          emoji: "🕹️",
          title: "Lunar Arcade",
          desc: "Maxis-tribute space simulation games: Lunar Habitat, Boring Mining Game, and Lunar Farm.",
          url: "https://dr-richard-barker.github.io/lunar-arcade/"
        },
        {
          id: "Settlers_of_the_Moon_or_Mars",
          emoji: "🎲",
          title: "Settlers of Moon or Mars",
          desc: "Colony-building board game simulator combining aerospace logistics, mycoponics, and biological life support.",
          url: "https://dr-richard-barker.github.io/Settlers_of_the_Moon_or_Mars/"
        },
        {
          id: "Training_LLM_game-theory_using_bloodbowl",
          emoji: "🏈",
          title: "Brute Bowl — LLM Game Theory",
          desc: "Exploring the use of LLMs to model stochastic probability, risk mitigation, and team dynamics in constrained environments.",
          url: "https://dr-richard-barker.github.io/Training_LLM_game-theory_using_bloodbowl/game/"
        },
        {
          id: "Lunar_Red_Alert",
          emoji: "⚔️",
          title: "Lunar Red Alert",
          desc: "Space-Age total conversion of OpenRA: a lunar vacuum real-time strategy (RTS) simulation modeling supply lines without atmosphere.",
          url: "https://dr-richard-barker.github.io/Lunar_Red_Alert/"
        },
        {
          id: "cose-arcade",
          emoji: "👾",
          title: "CoSE Space Arcade",
          desc: "Central portal for retro space biology simulation games and student interactive challenges.",
          url: "https://dr-richard-barker.github.io/cose-arcade/"
        }
      ]
    },

    {
      name: "Hubs & Educational Initiatives",
      items: [
        {
          id: "CoSE_Cloud",
          emoji: "☁️",
          title: "CoSE Cloud Hub",
          desc: "The umbrella project directory and ecosystem hub for The Collaborative Science Environment.",
          url: "https://dr-richard-barker.github.io/CoSE_Cloud/Hub/"
        },
        {
          id: "AstroBotany",
          emoji: "🌱",
          title: "AstroBotany Hub",
          desc: "Focused hub of plant space-biology projects: growing and understanding plants beyond Earth.",
          url: "https://dr-richard-barker.github.io/AstroBotany/"
        },
        {
          id: "DeepSpaceAg",
          emoji: "🚀",
          title: "Deep Space Agriculture Hub",
          desc: "Sustaining plants and people on long-duration missions: gas transport, closed loops, and planetary regolith.",
          url: "https://dr-richard-barker.github.io/DeepSpaceAg/"
        },
        {
          id: "AIRI",
          emoji: "🌍",
          title: "AIRI Initiative",
          desc: "AstroBotany International Research Initiative connecting students, teachers, and space biology researchers.",
          url: "https://dr-richard-barker.github.io/AIRI/"
        },
        {
          id: "madwest-astrobotany",
          emoji: "🚀",
          title: "MadWest Astrobotany",
          desc: "High-school sounding-rocket space-biology program (Arabidopsis qPCR + mycorrhiza timelapse) packaged for NASA OSDR.",
          url: "https://dr-richard-barker.github.io/madwest-astrobotany/"
        },
        {
          id: "OSDR_jupyter_book.io",
          emoji: "📓",
          title: "OSDR Jupyter Book (TOAST10)",
          desc: "FAIR interactive training notebooks and documentation for analyzing NASA OSDR space biology data.",
          url: "https://dr-richard-barker.github.io/OSDR_jupyter_book.io/"
        }
      ]
    }
  ]
};

// Derive flat IDs for each scope from sections
(function(reg){
  if(!reg || !reg.scopes) return;
  Object.keys(reg.scopes).forEach(function(k){
    var sc = reg.scopes[k];
    if(sc && sc.sections && !sc.ids){
      sc.ids = sc.sections.reduce(function(acc, s){ return acc.concat(s.ids || []); }, []);
    }
  });
})(window.BARKER_SITES);
