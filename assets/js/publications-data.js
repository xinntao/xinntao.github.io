// 论文数据结构
const publicationsData = {
  2025: [
    {
      title: "Kling-Omni Technical Report",
      authors: "Kling Team",
      arxiv: "2512.16776",
      projectPage: "https://app.klingai.com/global/omni/new",
      image: {"type": "img", "src": "./images/klingomini.jpg"},
      highlight: true
    },
    {
      title: "ReCamMaster: Camera-Controlled Generative Rendering from A Single Video",
      authors: "Jianhong Bai, Menghan Xia, Xiao Fu, <b>Xintao Wang</b>, Lianrui Mu, Jinwen Cao, Zuozhu Liu, Haoji Hu, Xiang Bai, Pengfei Wan, Di Zhang",
      arxiv: "2503.11647",
      venue: "ICCV 2025",
      note: "Finalist, Oral",
      projectPage: "https://jianhongbai.github.io/ReCamMaster/",
      dataset: "https://huggingface.co/datasets/KlingTeam/MultiCamVideo-Dataset",
      github: "https://github.com/KlingTeam/ReCamMaster",
      image: {"type": "video", "src": "https://jianhongbai.github.io/ReCamMaster/videos/ReCamMaster/TEASER_compressed.mp4"},
      highlight: true
    },
    {
      title: "Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval",
      authors: "Jiwen Yu, Jianhong Bai, Yiran Qin, Quande Liu, <b>Xintao Wang</b>, Pengfei Wan, Di Zhang, Xihui Liu",
      arxiv: "2506.03141",
      venue: "SIGGRAPH Asia 2025",
      projectPage: "https://context-as-memory.github.io/",
      image: {"type": "img", "src": "https://www.youtube.com/embed/6Ye6wWupWD4"},
      highlight: true
    },
    {
      title: "CamCloneMaster: Enabling Reference-based Camera Control for Video Generation",
      authors: "Yawen Luo, Jianhong Bai, Xiaoyu Shi, Menghan Xia, <b>Xintao Wang</b>, Pengfei Wan, Di Zhang, Kun Gai, Tianfan Xue",
      arxiv: "2506.03140",
      venue: "SIGGRAPH Asia 2025",
      projectPage: "https://github.com/KlingTeam/CamCloneMaster",
      dataset: "https://huggingface.co/datasets/KlingTeam/CameraClone-Dataset",
      github: "https://github.com/KlingTeam/CamCloneMaster",
      image: {"type": "img", "src": "https://www.youtube.com/embed/eVPI2oTTd98"},
      highlight: false
    },
    {
      title: "SVG-T2I: Scaling Up Text-to-Image Latent Diffusion Model Without Variational Autoencoder",
      authors: "<b>Xintao Wang</b>3, Pengfei Wan3, Di Zhang3, Xihui Liu1<sup>#</sup>",
      arxiv: "2512.11749",
      github: "https://github.com/KlingTeam/SVG-T2I",
      image: {"type": "img", "src": "images/svg-t2i.jpg"},
      highlight: true
    },
    {
      title: "DiffMoE: Dynamic Token Selection for Scalable Diffusion Transformers",
      authors: "Minglei Shi, Ziyang Yuan, Haotian Yang, <b>Xintao Wang</b><sup>#</sup>, Mingwu Zheng, Xin Tao, Wenliang Zhao, Wenzhao Zheng, Jie Zhou, Jiwen Lu<sup>#</sup>, Pengfei Wan, Di Zhang, Kun Gai",
      arxiv: "2503.14487",
      projectPage: "https://shiml20.github.io/DiffMoE/",
      github: "https://github.com/KlingTeam/DiffMoE",
      image: {"type": "img", "src": "https://shiml20.github.io/DiffMoE/static/images/teaser.png"},
      highlight: false
    },
    {
      title: "Improving Video Generation with Human Feedback",
      authors: "Jie Liu, Gongye Liu, Jiajun Liang, Ziyang Yuan, Xiaokun Liu, Mingwu Zheng, Xiele Wu, Qiulin Wang, Wenyu Qin, Menghan Xia, <b>Xintao Wang</b>, Xiaohong Liu, Fei Yang, Pengfei Wan, Di Zhang, Kun Gai, Yujiu Yang, Wanli Ouyang",
      arxiv: "2501.13918",
      venue: "NeurIPS 2025",
      projectPage: "https://gongyeliu.github.io/videoalign/",
      dataset: "https://huggingface.co/datasets/KlingTeam/VideoGen-RewardBench",
      github: "https://github.com/KlingTeam/VideoAlign",
      image: {"type": "img", "src": "./images/videoalign.jpg"},
      highlight: true
    },
    {
      title: "GameFactory: Creating New Games with Generative Interactive Videos",
      authors: "Jiwen Yu, Yiran Qin, <b>Xintao Wang</b><sup>#</sup>, Pengfei Wan, Di Zhang, Xihui Liu<sup>#</sup>",
      arxiv: "2501.08325",
      venue: "ICCV 2025",
      note: "Highlight",
      projectPage: "https://yujiwen.github.io/gamefactory/",
      dataset: "https://huggingface.co/datasets/KlingTeam/GameFactory-Dataset",
      github: "https://github.com/KlingTeam/GameFactory",
      image: {"type": "img", "src": "./images/gamefactory.jpg"},
      highlight: true
    }
  ],
  2024: [
    {
      title: "SynCamMaster: Synchronizing Multi-Camera Video Generation from Diverse Viewpoints",
      authors: "Jianhong Bai, Menghan Xia, <b>Xintao Wang</b>, Ziyang Yuan, Xiao Fu, Zuozhu Liu, Haoji Hu, Pengfei Wan, Di Zhang",
      arxiv: "2412.07760",
      venue: "ICLR 2025",
      projectPage: "https://jianhongbai.github.io/SynCamMaster/",
      dataset: "https://huggingface.co/datasets/KlingTeam/SynCamVideo-Dataset",
      github: "https://github.com/KlingTeam/SynCamMaster",
      image: {"type": "img", "src": "./images/syncammaster.jpg"},
      highlight: false
    },
    {
      title: "StyleMaster: Stylize Your Video with Artistic Generation and Translation",
      authors: "Zixuan Ye, Huijuan Huang, <b>Xintao Wang</b>, Pengfei Wan, Di Zhang, Wenhan Luo",
      arxiv: "2412.07744",
      venue: "CVPR 2025",
      projectPage: "https://zixuan-ye.github.io/stylemaster/",
      github: "https://github.com/KlingTeam/StyleMaster",
      image: {"type": "img", "src": "./images/stylemaster.jpg"},
      highlight: false
    },
    {
      title: "3DTrajMaster: Mastering 3D Trajectory for Multi-Entity Motion in Video Generation",
      authors: "Xiao Fu, Xian Liu, <b>Xintao Wang</b><sup>#</sup>, Sida Peng, Menghan Xia, Xiaoyu Shi, Ziyang Yuan, Pengfei Wan, Di Zhang, Dahua Lin<sup>#</sup>",
      arxiv: "2412.07759",
      venue: "ICLR, 2025",
      projectPage: "https://fuxiao0719.github.io/projects/3dtrajmaster/",
      github: "https://github.com/KlingTeam/3DTrajMaster",
      image: {"type": "video", "src": "./images/3dtrajmaster.mp4"},
      highlight: true
    },
    {
      title: "MiraData: A Large-Scale Video Dataset with Long Durations and Structured Captions",
      authors: "Xuan Ju, Yiming Gao, Zhaoyang Zhang, Ziyang Yuan, <b>Xintao Wang</b>, Ailing Zeng, Yu Xiong, Qiang Xu, Ying Shan",
      arxiv: "2407.06358",
      venue: "NeurIPS (Datasets & Benchmarks Track), 2024",
      projectPage: "https://mira-space.github.io/",
      github: "https://github.com/mira-space/MiraData",
      image: {"type": "img", "src": "./images/miradata.jpg"},
      highlight: false
    },
    {
      title: "MOFA-Video: Controllable Image Animation via Generative Motion Field Adaptions in Frozen Image-to-Video Diffusion Model",
      authors: "Muyao Niu, Xiaodong Cun, <b>Xintao Wang</b>, Yong Zhang, Ying Shan, Yinqiang Zheng",
      arxiv: "2405.20222",
      venue: "ECCV, 2024",
      projectPage: "https://myniuuu.github.io/MOFA_Video/",
      github: "https://github.com/MyNiuuu/MOFA-Video",
      image: {"type": "img", "src": "./images/mofa.jpg"},
      highlight: false
    },
    {
      title: "ToonCrafter: Generative Cartoon Interpolation",
      authors: "Jinbo Xing, Hanyuan Liu, Menghan Xia, Yong Zhang, <b>Xintao Wang</b>, Ying Shan, Tien-Tsin Wong",
      arxiv: "2405.17933",
      venue: "SIGGRAPH Asia, 2024",
      projectPage: "https://doubiiu.github.io/projects/ToonCrafter/",
      github: "https://github.com/Doubiiu/ToonCrafter",
      image: {"type": "img", "src": "./images/tooncrafter.jpg"},
      highlight: true
    },
    {
      title: "ReVideo: Remake a Video with Motion and Content Control",
      authors: "Chong Mou, Mingdeng Cao, <b>Xintao Wang</b><sup>#</sup>, Zhaoyang Zhang, Ying Shan, Jian Zhang<sup>#</sup>",
      arxiv: "2405.13865",
      venue: "NeurIPS, 2024",
      projectPage: "https://mc-e.github.io/project/ReVideo/",
      github: "https://github.com/MC-E/ReVideo",
      image: {"type": "img", "src": "./images/miradata.jpg"},
      highlight: false
    },
    {
      title: "BrushNet: A Plug-and-Play Image Inpainting Model with Decomposed Dual-Branch Diffusion",
      authors: "Xuan Ju, Xian Liu, <b>Xintao Wang</b><sup>#</sup>, Yuxuan Bian, Ying Shan, Qiang Xu<sup>#</sup>",
      arxiv: "2403.06976",
      venue: "ECCV, 2024",
      projectPage: "https://tencentarc.github.io/BrushNet/",
      github: "https://github.com/TencentARC/BrushNet",
      image: {"type": "img", "src": "./images/brushnet.jpg"},
      highlight: false
    },
    {
      title: "Scaling Up to Excellence: Practicing Model Scaling for Photo-Realistic Image Restoration In the Wild",
      authors: "Fanghua Yu, Jinjin Gu, Zheyuan Li, Jinfan Hu, Xiangtao Kong, <b>Xintao Wang</b>, Jingwen He, Yu Qiao, Chao Dong",
      arxiv: "2401.13627",
      venue: "CVPR, 2024",
      projectPage: "https://github.com/Fanghua-Yu/SUPIR",
      github: "https://github.com/Fanghua-Yu/SUPIR",
      image: {"type": "img", "src": "./images/supir.jpg"},
      highlight: true
    },
    {
      title: "VideoCrafter2: Overcoming Data Limitations for High-Quality Video Diffusion Models",
      authors: "Haoxin Chen, Yong Zhang, Xiaodong Cun, Menghan Xia, <b>Xintao Wang</b>, Chao Wen, Ying Shan",
      arxiv: "2401.09047",
      venue: "CVPR, 2024",
      projectPage: "https://ailab-cvc.github.io/videocrafter2/",
      github: "https://github.com/AILab-CVC/VideoCrafter",
      image: {"type": "video", "src": "./images/videocrafter2.mp4"},
      highlight: true
    }
  ],
  2023: [
    {
      title: "SmartEdit: Exploring Complex Instruction-based Image Editing with Multimodal Large Language Models",
      authors: "Yuzhou Huang, Liangbin Xie, <b>Xintao Wang</b><sup>#</sup>, Ziyang Yuan, Xiaodong Cun, Yixiao Ge, Jiantao Zhou, Chao Dong, Rui Huang, Ruimao Zhang<sup>#</sup>, Ying Shan",
      arxiv: "2312.06739",
      venue: "CVPR, 2024",
      note: "Highligh",
      projectPage: "https://yuzhou914.github.io/SmartEdit/",
      github: "https://github.com/TencentARC/SmartEdit",
      image: {"type": "img", "src": "./images/smartedit.jpg"},
      highlight: false
    },
    {
      title: "PhotoMaker: Customizing Realistic Human Photos via Stacked ID Embedding",
      authors: "Zhen Li, Mingdeng Cao, <b>Xintao Wang</b><sup>#</sup>, Zhongang Qi, Ming-Ming Cheng<sup>#</sup>, Ying Shan",
      arxiv: "2312.04461",
      venue: "CVPR, 2024",
      projectPage: "https://photo-maker.github.io/",
      github: "https://github.com/TencentARC/PhotoMaker",
      image: {"type": "img", "src": "./images/photomaker.jpg"},
      highlight: true
    },
    {
      title: "MotionCtrl: A Unified and Flexible Motion Controller for Video Generation",
      authors: "Zhouxia Wang, Ziyang Yuan, <b>Xintao Wang</b><sup>#</sup>, Tianshui Chen, Menghan Xia, Ping Luo<sup>#</sup>, Ying Shan",
      arxiv: "2312.03641",
      venue: "SIGGRAPH, 2024",
      projectPage: "https://wzhouxiff.github.io/projects/MotionCtrl",
      github: "https://github.com/TencentARC/MotionCtrl",
      image: {"type": "img", "src": "./images/motionctrl.gif"},
      highlight: true
    },
    {
      title: "StyleCrafter: Enhancing Stylized Text-to-Video Generation with Style Adapter",
      authors: "Gongye Liu, Menghan Xia, Yong Zhang, Haoxin Chen, Jinbo Xing, Yibo Wang, <b>Xintao Wang</b>, Yujiu Yang, Ying Shan",
      arxiv: "2312.00330",
      venue: "SIGGRAPH Asia, 2024",
      projectPage: "https://gongyeliu.github.io/StyleCrafter.github.io/",
      github: "https://github.com/GongyeLiu/StyleCrafter",
      image: {"type": "img", "src": "./images/stylecrafter.jpg"},
      highlight: false
    },
    {
      title: "T2I-Adapter: Learning Adapters to Dig out More Controllable Ability for Text-to-Image Diffusion Models",
      authors: "Chong Mou, <b>Xintao Wang</b><sup>#</sup>, Liangbin Xie, Yanze Wu, Jian Zhang<sup>#</sup>, Zhongang Qi, Ying Shan, Xiaohu Qie",
      arxiv: "2302.08453",
      venue: "AAAI, 2023",
      github: "https://github.com/TencentARC/T2I-Adapter",
      image: {"type": "img", "src": "./images/t2i-adapter.jpg"},
      highlight: true
    }
  ],
  2022: [
    {
      title: "Tune-A-Video: One-Shot Tuning of Image Diffusion Models for Text-to-Video Generation",
      authors: "Jay Zhangjie Wu, Yixiao Ge, <b>Xintao Wang</b>, Weixian Lei, Yuchao Gu, Yufei Shi, Wynne Hsu, Ying Shan, Xiaohu Qie, Mike Zheng Shou",
      arxiv: "2212.11565",
      venue: "ICCV, 2023",
      projectPage: "https://tuneavideo.github.io/",
      github: "https://github.com/showlab/Tune-A-Video",
      image: {"type": "img", "src": "./images/tuneavideo.gif"},
      highlight: true
    },
    {
      title: "VQFR: Blind Face Restoration with Vector-Quantized Dictionary and Parallel Decoder",
      authors: "Yuchao Gu, <b>Xintao Wang</b>, Liangbie Xie, Chao Dong, Gen Li, Ying Shan, Ming-Ming Cheng",
      arxiv: "2205.06803",
      venue: "ECCV, 2022",
      note: "Oral, 2.7%",
      github: "https://github.com/TencentARC/VQFR",
      image: {"type": "img", "src": "./images/VQFR.png"},
      highlight: false
    }
  ],
  2021: [
    {
      title: "Real-ESRGAN: Training Real-World Blind Super-Resolution with Pure Synthetic Data",
      authors: "<b>Xintao Wang</b>, Liangbie Xie, Chao Dong, Ying Shan",
      arxiv: "2107.10833",
      venue: "ICCVW, 2021",
      github: "https://github.com/xinntao/Real-ESRGAN",
      image: {"type": "img", "src": "./images/realesrgan_rlt.jpg"},
      highlight: false
    },
    {
      title: "GFPGAN: Towards Real-World Blind Face Restoration with Generative Facial Prior",
      authors: "<b>Xintao Wang</b>, Yu Li, Honglun Zhang, Ying Shan",
      arxiv: "2101.04061",
      venue: "CVPR, 2021",
      projectPage: "./projects/gfpgan.html",
      github: "https://github.com/TencentARC/GFPGAN",
      image: {"type": "img", "src": "images/gfpgan_lr.jpg"},
      highlight: false
    }
  ]
};
