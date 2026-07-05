// 社交链接数据（仅用于动态渲染）
const socialLinksData = [
  { icon: "fab fa-twitter", url: "https://twitter.com/xinntao", label: "Twitter" },
  { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/xintao-wang-3a0467147/", label: "LinkedIn" },
  { icon: "fab fa-google", url: "https://scholar.google.com.hk/citations?user=FQgZpQoAAAAJ&hl=en", label: "Google Scholar" },
  { icon: "fab fa-github", url: "https://github.com/xinntao", label: "GitHub" },
  { icon: "fas fa-envelope-square", url: "email.html", label: "Email" },
  { icon: "fab fa-zhihu", url: "https://www.zhihu.com/people/xintao-28", label: "Zhihu" },
  { icon: "custom", url: "https://xinntao.notion.site/", text: "Notion", label: "Notion" },
  { icon: "custom", url: "https://www.yuque.com/xinntao/nm1yxs", text: "语雀", label: "语雀" }
];

// News 数据
const newsData = [
  {
    date: "5/2026",
    content: "Two papers (Native4DVA and <a href='https://vr-thinker.github.io/' target='_blank'>VR-Thinker</a>) are accepted to ICML 2026."
  },
  {
    date: "4/2026",
    content: "One paper (<a href='https://libaolu312.github.io/VFXMaster/' target='_blank'>VFXMaster</a>) is accepted to SIGGRAPH 2026."
  },
  {
    date: "2/2026",
    content: "Six papers (MultiShotMaster, VACoT, <a href='https://cszy98.github.io/DUO-VSR/' target='_blank'>DUO-VSR</a>, <a href='https://karine-huang.github.io/CineScene/' target='_blank'>CineScene</a>[<b>highlight</b>], <a href='https://jingw193.github.io/GRPO-Guard/' target='_blank'>GRPO-Guard</a>[<b>highlight</b>] and <a href='https://onevfall.github.io/project_page/videocanvas/' target='_blank'>VideoCanvas</a>[Findings]) are accepted to CVPR 2026."
  },
  {
    date: "1/2026",
    content: "Seven papers (<a href='https://filmaster-ai.github.io/' target='_blank'>FilmMaster</a>, <a href='https://fuxiao0719.github.io/projects/robomaster/' target='_blank'>RoboMaster</a>, <a href='https://yuli0103.github.io/AdaViewPlanner/' target='_blank'>AdaViewPlanner</a>, <a href='https://howlin-wang.github.io/svg/' target='_blank'>SVG</a>, <a href='https://simplegvr.github.io/' target='_blank'>SimpleGVR</a>, <a href='https://congwei1230.github.io/UniVideo/' target='_blank'>UniVideo</a> and <a href='https://zixuan-ye.github.io/UNIC' target='_blank'>UNIC</a>) are accepted to ICLR 2026."
  },
  {
    date: "12/2025",
    content: "🚀 We release <a href='https://arxiv.org/abs/2512.16776' target='_blank'>the tech report of Kling-Omni (Kling O1)</a>, a generalist generative framework designed to generate videos from multimodal visual language inputs. Try it <a href='https://app.klingai.com/global/omni/new' target='_blank'>here</a>."
  },
  {
    date: "10/2025",
    content: "🏆 <a href='https://jianhongbai.github.io/ReCamMaster/' target='_blank'>ReCamMaster</a> has been selected as ICCV 2025 Best Paper Award Finalist."
  },
  {
    date: "10/2025",
    content: "Three papers (<a href='https://yuwen-wangf.github.io/gamefactory/' target='_blank'>GameFactory</a>[<b>highlight</b>], <a href='https://fulldit.github.io/' target='_blank'>FullDiT</a> and <a href='https://jianhongbai.github.io/ReCamMaster/' target='_blank'>ReCamMaster</a>[<b>oral</b>]) are accepted to ICCV 2025."
  },
  {
    date: "9/2025",
    content: "🏅 Ranked among the <a href='https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/8' target='_blank'>Top 2% Scientists Worldwide (Single Year Impact)</a> by Stanford University in 2025, marking four years of consecutive inclusion since 2022."
  },
  {
    date: "9/2025",
    content: "Three papers (<a href='https://gongyeliu.github.io/Flow-GRPO/' target='_blank'>Flow-GRPO</a>, <a href='https://gongyeliu.github.io/videoalign/' target='_blank'>VideoAlign</a> and <a href='https://github.com/NJU-LINK/MVU-Eval' target='_blank'>MVU-Eval</a> [Dataset and Benchmark Track]) are accepted to NeurIPS 2025."
  },
  {
    date: "8/2025",
    content: "Two papers (<a href='https://context-as-memory.github.io/' target='_blank'>Context-as-Memory</a> and <a href='https://camclonemaster.github.io/' target='_blank'>CamCloneMaster</a>) are accepted to SIGGRAPH Asia 2025."
  },
  {
    date: "3/2025",
    content: "We release several interesting papers: <a href='https://github.com/KwaiVGI/ReCamMaster' target='_blank'>ReCamMaster</a>, <a href='https://github.com/KwaiVGI/DiffMoE' target='_blank'>DiffMoE</a> and IGV-as-GGE."
  },
  {
    date: "2/2025",
    content: "Three papers (<a href='https://zixuan-ye.github.io/stylemaster/' target='_blank'>StyleMaster</a>, PatchVSR and SketchVideo) are accepted to CVPR 2025."
  },
  {
    date: "1/2025",
    content: "Two papers (<a href='https://jianhongbai.github.io/SynCamMaster/' target='_blank'>SynCamMaster</a> and <a href='https://fuxiao0719.github.io/projects/3dtrajmaster/' target='_blank'>3DTrajMaster</a>) are accepted to ICLR 2025."
  },
  {
    date: "12/2024",
    content: "Three papers (<a href='https://liyaowei-stu.github.io/project/ImageConductor/' target='_blank'>ImageConductor</a>, <a href='https://customcrafter.github.io/' target='_blank'>CustomCrafter</a> and Anti-Diffusion[<b>oral</b>]) are accepted to AAAI 2025."
  },
  {
    date: "9/2024",
    content: "Ranked as <a href='https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/7' target='_blank'>Top 2% Scientists Worldwide 2024</a> (Single Year) by Stanford University."
  },
  {
    date: "9/2024",
    content: "Three papers (<a href='https://mira-space.github.io/' target='_blank'>MiraData</a>, <a href='https://mc-e.github.io/project/ReVideo/' target='_blank'>ReVideo</a> and <a href='https://videotetris.github.io/' target='_blank'>VideoTetris</a>) are accepted to NeurIPS 2024."
  },
  {
    date: "9/2024",
    content: "One paper (<a href='https://arxiv.org/abs/2309.01770' target='_blank'>StyleAdapter</a>) is accepted to IJCV."
  },
  {
    date: "8/2024",
    content: "Two papers (<a href='https://doubiiu.github.io/projects/ToonCrafter/' target='_blank'>ToonCrafter</a> and <a href='https://gongyeliu.github.io/StyleCrafter.github.io/' target='_blank'>StyleCrafter</a>) are accepted to SIGGRAPH Asia 2024."
  },
  {
    date: "7/2024",
    content: "One paper (<a href='https://jiangyzy.github.io/CustomNet/' target='_blank'>CustomNet</a>) is accepted to ACM MM 2024."
  },
  {
    date: "7/2024",
    content: "Five papers (<a href='https://doubiiu.github.io/projects/DynamiCrafter/' target='_blank'>DynamiCrafter</a>[<b>oral</b>], <a href='https://tencentarc.github.io/BrushNet/' target='_blank'>BrushNet</a>, <a href='https://github.com/bbaaii/DreamDiffusion' target='_blank'>DreamDiffusion</a>, <a href='https://myniuuu.github.io/MOFA_Video/' target='_blank'>MOFA-Video</a>, <a href='https://guolanqing.github.io/Self-Cascade/' target='_blank'>CheapScaling</a>) are accepted to ECCV 2024."
  },
  {
    date: "5/2024",
    content: "One paper (<a href='https://github.com/lyh-18/PromptGIP' target='_blank'>PromptGIP</a>) is accepted to ICML 2024."
  },
  {
    date: "3/2024",
    content: "One paper (<a href='https://wzhouxiff.github.io/projects/MotionCtrl' target='_blank'>MotionCtrl</a>) is accepted to SIGGRAPH 2024."
  },
  {
    date: "3/2024",
    content: "Nine papers (<a href='https://github.com/TencentARC/PhotoMaker' target='_blank'>PhotoMaker</a>, <a href='https://github.com/Fanghua-Yu/SUPIR' target='_blank'>SUPIR</a>, <a href='https://ailab-cvc.github.io/videocrafter2/' target='_blank'>VideoCrafter2</a>, <a href='https://yuzhou914.github.io/SmartEdit/' target='_blank'>SmartEdit</a>[<b>highlight</b>], <a href='https://arxiv.org/abs/2212.03185' target='_blank'>Rethink VQ Tokenizer</a>, <a href='https://evalcrafter.github.io/' target='_blank'>EvalCrafter</a>, <a href='https://showlab.github.io/X-Adapter/' target='_blank'>X-Adapter</a>, <a href='https://arxiv.org/abs/2402.02583' target='_blank'>DiffEditor</a> and <a href='https://yzxing87.github.io/Seeing-and-Hearing/' target='_blank'>Seeing&Hearing</a>) are accepted to CVPR 2024."
  },
  {
    date: "1/2024",
    content: "Four papers (<a href='https://mc-e.github.io/project/DragonDiffusion/' target='_blank'>DragonDiffusion</a>[<b>spotlight</b>], <a href='https://yingqinghe.github.io/scalecrafter/' target='_blank'>ScaleCrafter</a>[<b>spotlight</b>], <a href='http://haonanqiu.com/projects/FreeNoise.html' target='_blank'>FreeNoise</a> and <a href='https://ailab-cvc.github.io/seed/seed_llama.html' target='_blank'>SEED-LlaMa</a>) are accepted to ICLR 2024."
  },
  {
    date: "12/2023",
    content: "Three papers are accepted to AAAI 2024."
  },
  {
    date: "10/2023",
    content: "Ranked as <a href='https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/6' target='_blank'>Top 2% Scientists Worldwide 2023</a> (Single Year) by Stanford University."
  },
  {
    date: "10/2023",
    content: "Two papers are accepted to NeurIPS 2023."
  },
  {
    date: "09/2023",
    content: "Release <a href='https://github.com/TencentARC/T2I-Adapter' target='_blank'>T2I-Adapter</a> for SDXL: the most efficient control models, collaborating with <a href='https://huggingface.co/blog/t2i-sdxl-adapters' target='_blank'>HuggingFace</a>."
  },
  {
    date: "07/2023",
    content: "Three papers are accepted to ICCV 2023."
  },
  {
    date: "04/2023",
    content: "One paper is accepted to ICML 2023."
  },
  {
    date: "03/2023",
    content: "We are holding the <a href='https://github.com/360SR/360SR-Challenge' target='_blank'>360° Super-Resolution Challenge</a> as a part of the <a href='https://cvlai.net/ntire/2023/' target='_blank'>NTIRE workshop</a> in conjunction with CVPR 2023."
  },
  {
    date: "02/2023",
    content: "Three papers to appear in CVPR 2023."
  },
  {
    date: "11/2022",
    content: "Two papers to appear in AAAI 2023."
  },
  {
    date: "09/2022",
    content: "Ranked as <a href='https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/5' target='_blank'>Top 2% Scientists Worldwide 2022</a> (Single Year) by Stanford University."
  },
  {
    date: "09/2022",
    content: "Two papers to appear in NeurIPS 2022."
  },
  {
    date: "07/2022",
    content: "Two papers to appear in ECCV 2022. VQFR is accepted as <font color='orange'>oral</font> (2.7%)."
  },
  {
    date: "06/2022",
    content: "Two papers to appear in ACM MM 2022."
  },
  {
    date: "05/2022",
    content: "BasicSR joins the <a href='https://github.com/XPixelGroup' target='_blank'>XPixel Group</a>!"
  },
  {
    date: "04/2022",
    content: "We release a high-quality face video dataset (VFHQ). Please refer to the <a href='https://liangbinxie.github.io/projects/vfhq' target='_blank'>project page</a> and <a href='https://arxiv.org/abs/2205.03409' target='_blank'>our paper</a>."
  },
  {
    date: "12/2021",
    content: "One paper to appear in NeurIPS 2021 as <font color='orange'>spotlight</font> (2.85%): <a href='https://proceedings.neurips.cc/paper/2021/hash/008bd5ad93b754d500338c253d9c1770-Abstract.html' target='_blank'>FAIG: Finding Discriminative Filters for Specific Degradations in Blind Super-Resolution</a>. Codes are released in <a href='https://github.com/TencentARC/FAIG' target='_blank'>TencentARC/FAIG</a>."
  },
  {
    date: "10/2021",
    content: "<a href='https://arxiv.org/abs/2107.10833' target='_blank'>Real-ESRGAN</a> is accepted by ICCV 2021 AIM workshop with Honorary Nomination Paper Award."
  },
  {
    date: "07/2021",
    content: "One paper to appear in ICCV 2021: <a href='https://arxiv.org/abs/2108.08826' target='_blank'>Towards Vivid and Diverse Image Colorization with Generative Color Prior</a>"
  },
  {
    date: "07/2021",
    content: "The codes for practical image restoration <a href='https://arxiv.org/abs/2107.10833' target='_blank'>Real-ESRGAN</a> are released on <a href='https://github.com/xinntao/Real-ESRGAN' target='_blank'>Github</a>."
  },
  {
    date: "06/2021",
    content: "The training and testing codes of GFPGAN are released on <a href='https://github.com/TencentARC/GFPGAN' target='_blank'>TencentARC</a>."
  },
  {
    date: "03/2021",
    content: "5 papers to appear in CVPR 2021."
  },
  {
    date: "03/2021",
    content: "A brand-new <a href='https://github.com/xinntao/HandyView' target='_blank'>HandyView</a> online!"
  },
  {
    date: "08/2020",
    content: "A brand-new <a href='https://github.com/xinntao/BasicSR' target='_blank'>BasicSR</a> v1.0.0 online!"
  },
  {
    date: "06/2019",
    content: "We have released the <a href='https://github.com/xinntao/EDVR' target='_blank'>EDVR</a> training and testing codes and also updated <a href='https://github.com/xinntao/BasicSR' target='_blank'>BasicSR</a> codes!"
  },
  {
    date: "06/2019",
    content: "Got my first outstanding reviewer recognition from CVPR 2019!"
  },
  {
    date: "05/2019",
    content: "Our video restoration method, <b>EDVR</b>, won all four tracks in the <a href='http://www.vision.ee.ethz.ch/ntire19/' target='_blank'>NTIRE 2019 video restoration and enhancement challenges</a>. Check <a href='https://arxiv.org/abs/1905.02716' target='_blank'>our paper</a> for more details."
  },
  {
    date: "03/2019",
    content: "Our paper <a href='https://xinntao.github.io/projects/DNI' target='_blank'><i>Deep Network Interpolation for Continuous Imagery Effect Transition</i></a> to appear in CVPR 2019."
  },
  {
    date: "08/2018",
    content: "Our SuperSR team won the third track of the <a href='https://www.pirm2018.org/PIRM-SR.html' target='_blank'>2018 PIRM Challenge on Perceptual Super-Resolution</a>. Check the report <a href='https://arxiv.org/abs/1809.00219' target='_blank'><i>ESRGAN</i></a> for more details."
  },
  {
    date: "06/2018",
    content: "We won the <a href='http://www.vision.ee.ethz.ch/ntire17/NTIRE' target='_blank'>NTIRE 2018 Challenge on Single Image Super-Resolution</a> as first runner-up and ranked the first in the <i>Realistic Wild ×4 conditions</i> track."
  },
  {
    date: "02/2018",
    content: "Our paper <a href='http://mmlab.ie.cuhk.edu.hk/projects/SFTGAN/' target='_blank'><i>Recovering Realistic Texture in Image Super-resolution by Deep Spatial Feature Transform</i></a> to appear in CVPR 2018."
  }
];

// 开源项目数据
const openSourceProjects = [
  {
    name: "GFPGAN",
    color: "purple",
    description: "Practical face restoration",
    url: "https://github.com/TencentARC/GFPGAN",
    stars: "https://img.shields.io/github/stars/TencentARC/GFPGAN?style=social"
  },
  {
    name: "Real-ESRGAN",
    color: "blue",
    description: "Practical algorithms for image restoration",
    url: "https://github.com/xinntao/Real-ESRGAN",
    stars: "https://img.shields.io/github/stars/xinntao/Real-ESRGAN?style=social"
  },
  {
    name: "BasicSR",
    color: "primary",
    description: "Open source image and video restoration toolbox",
    url: "https://github.com/XPixelGroup/BasicSR",
    stars: "https://img.shields.io/github/stars/XPixelGroup/BasicSR?style=social"
  },
  {
    name: "T2I-Adapter",
    color: "pink",
    description: "Dig out controllable ability for text-to-image diffusion models",
    url: "https://github.com/TencentARC/T2I-Adapter",
    stars: "https://img.shields.io/github/stars/TencentARC/T2I-Adapter?style=social"
  },
  {
    name: "VideoCrafter",
    color: "green",
    description: "Open sourced large models for video generation",
    url: "https://github.com/AILab-CVC/VideoCrafter",
    stars: "https://img.shields.io/github/stars/AILab-CVC/VideoCrafter?style=social"
  },
  {
    name: "HandyView",
    color: "orange",
    description: "Handy image viewer",
    url: "https://github.com/xinntao/HandyView",
    stars: "https://img.shields.io/github/stars/xinntao/HandyView?style=social"
  }
];
