// 可复用的组件渲染函数

// 渲染社交链接
function renderSocialLinks(links) {
  return links.map(link => {
    if (link.icon === 'custom') {
      return `
        <li class="list-inline-item last-item">
          <a href="${link.url}" target="_blank">
            <div class="icon-with-text">
              <i class="fa fa-fw"></i>
              <span class="text">${link.text}</span>
            </div>
          </a>
        </li>
      `;
    }
    return `
      <li class="list-inline-item">
        <a href="${link.url}" target="_blank"><i class="${link.icon}"></i></a>
      </li>
    `;
  }).join('');
}

// 渲染新闻项
function renderNewsItem(news) {
  return `
    <li>
      <b>[${news.date}]</b>
      ${news.content}
    </li>
  `;
}

// 渲染开源项目卡片
function renderProjectCard(project) {
  return `
    <div class="item item-${project.color} col-lg-4 col-6">
      <div class="item-inner">
        <div class="icon-holder"></div>
        <h3 class="title">
          ${project.name}
          <img alt="GitHub stars" src="${project.stars}" />
        </h3>
        <p class="intro">${project.description}</p>
        <a class="link" href="${project.url}" target="_blank"><span></span></a>
      </div>
    </div>
  `;
}

// 渲染论文项（通用模板）
function renderPublication(pub) {
  let imageHtml = '';

  // 1. 优先判断是否为 YouTube 链接
  if (pub.image.src && pub.image.src.includes('www.youtube.com/embed/')) {
    imageHtml = `
    <div class="video-container" style="position:relative; padding-top: 56.25%; width: 100%; overflow: hidden; border-radius: 0.25rem;">
      <iframe
        src="${pub.image.src}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        style="position:absolute; top:0; left:0; width:100%; height:100%;">
      </iframe>
    </div>`;
  }
  // 2. 其次判断原有的 video 类型
  else if (pub.image.type === 'video') {
    imageHtml = `
      <video autoplay controls="" muted loop playsinline="" class="img-fluid project-image rounded shadow-sm" style="max-width: 260px; width: 100%;">
        <source src="${pub.image.src}" type="video/mp4" />
      </video>`;
  }
  // 3. 最后默认为图片
  else {
    imageHtml = `<img class="img-fluid project-image rounded shadow-sm" src="${pub.image.src}" alt="teaser" />`;
  }

  const titleTag = pub.venue ? 'h4' : 'h3';  // 已发表用 h4，预印本用 h3
  const titleColor = pub.highlight ? ' color="orange"' : '';
  const noteHtml = pub.note ? ` <span class="pub-note"><b><font color="#d0021b">(${pub.note})</font></b></span>` : '';

  return `
    <div class="item row">
      <a class="col-md-4 col-12" href="${pub.projectPage || `https://arxiv.org/abs/${pub.arxiv}`}" target="_blank">
        ${imageHtml}
      </a>
      <div class="desc col-md-8 col-12">
        <${titleTag} class="title">
          <a href="https://arxiv.org/abs/${pub.arxiv}" target="_blank">
            ${pub.highlight ? `<font${titleColor}>${pub.title}</font>` : pub.title}
          </a>
        </${titleTag}>
        <p class="mb-2">${pub.authors}</p>
        <p>
          ${pub.venue ? `${pub.venue}${noteHtml}.<br/>` : ''}
          arXiv preprint: ${pub.arxiv}.<br/>
          ${pub.projectPage ? `
            <a class="more-link" href="${pub.projectPage}" target="_blank">
              <i class="fas fa-external-link-alt"></i>Project Page
            </a>&nbsp;
          ` : ''}
          ${pub.dataset ? `
            <a class="more-link" href="${pub.dataset}" target="_blank">
              <i class="fas fa-database"></i>Dataset
            </a>&nbsp;
          ` : ''}
          <a class="more-link" href="https://arxiv.org/abs/${pub.arxiv}" target="_blank">
            <i class="fas fa-external-link-alt"></i>Paper (arXiv)
          </a>&nbsp;
          ${pub.github ? `
            <a class="more-link" href="${pub.github}" target="_blank">
              <i class="fab fa-github"></i>Codes
            </a>&nbsp;
            <a class="more-link" href="${pub.github}" target="_blank">
              <img alt="GitHub stars" align="right"
                   src="https://img.shields.io/github/stars/${pub.github.replace('https://github.com/', '')}?style=social" />
            </a>
          ` : ''}
        </p>
      </div>
    </div>
  `;
}

// 初始化页面内容
function initializePage() {
  // 渲染社交链接
  const socialLinksContainer = document.querySelector('.profile-content .social');
  if (socialLinksContainer) {
    socialLinksContainer.innerHTML = renderSocialLinks(socialLinksData);
  }

  // 渲染新闻列表（只显示前6条，其余折叠）
  const newsList = document.querySelector('.projects .resume-list');
  if (newsList) {
    const visibleNews = newsData.slice(0, 6);
    const hiddenNews = newsData.slice(6);

    let newsHtml = visibleNews.map(renderNewsItem).join('');

    if (hiddenNews.length > 0) {
      newsHtml += `
        <details>
          <summary><b>Click for More</b></summary>
          ${hiddenNews.map(renderNewsItem).join('')}
        </details>
      `;
    }

    newsList.innerHTML = newsHtml;
  }

  // 渲染开源项目
  const projectsContainer = document.querySelector('#cards-wrapper');
  if (projectsContainer) {
    projectsContainer.innerHTML = openSourceProjects.map(renderProjectCard).join('');
  }

  // 渲染论文
  const publicationsContainer = document.querySelector('.latest .content');
  if (publicationsContainer && publicationsData) {
    let pubHtml = '<div class="pub-meta-note"><small>(* equal contribution, <sup>#</sup> corresponding author)</small></div>';

    // 按年份渲染论文（从最新到最旧）
    const years = Object.keys(publicationsData)
      .filter(k => !Number.isNaN(Number(k)))
      .map(k => Number(k))
      .sort((a, b) => b - a);

    years.forEach(year => {
      if (publicationsData[year] && publicationsData[year].length > 0) {
        pubHtml += `<h4 class="title"><font color="#49ac43">${year}</font></h4>`;
        pubHtml += publicationsData[year].map(renderPublication).join('');
      }
    });

    publicationsContainer.innerHTML = pubHtml;
  }

}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializePage);
