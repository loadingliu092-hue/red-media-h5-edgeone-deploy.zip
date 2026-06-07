const img = (name) => `assets/images/${name}`;

const periods = [
  {
    id: "p1",
    years: "1921-1927",
    sub: "党的创建与大革命时期",
    name: "星火初燃",
    color: "#df9d18",
    light: false,
    summaryTitle: "从印刷到报刊，从秘密到半公开",
    summary:
      "本时期红色宣传以印刷媒介为起点，从陈望道首译《共产党宣言》中文全译本、人民出版社正式成立起步，逐步突破秘密传播的局限，推动红色读物从隐蔽传阅的小册子，向半公开发行的报刊过渡。",
  },
  {
    id: "p2",
    years: "1927-1937",
    sub: "土地革命战争时期",
    name: "暗夜潜行",
    color: "#df7625",
    light: true,
    summaryTitle: "报刊转入地下，密电筑成天路",
    summary:
      "大革命失败后，上海红色媒体转入地下，以《布尔塞维克》《红旗》等报刊坚持理论宣传，建立秘密无线电台保障通信，依托左翼文化运动壮大宣传力量。",
  },
  {
    id: "p3",
    years: "1937-1945",
    sub: "全民族抗战时期",
    name: "孤岛烽火",
    color: "#d33a31",
    light: false,
    summaryTitle: "救亡声浪穿透孤岛",
    summary:
      "抗战烽火中，上海红色媒体在公开与秘密之间坚持发声。报刊、出版、电台与群众文化互相支撑，凝聚救亡力量，也把党的主张传向更广阔的人群。",
  },
  {
    id: "p4",
    years: "1945-1949",
    sub: "解放战争时期",
    name: "黎明号角",
    color: "#9b3e3e",
    light: false,
    summaryTitle: "舆论斗争迎接黎明",
    summary:
      "抗战胜利后，进步报刊、学生刊物和地下宣传持续开展舆论斗争，围绕和平、民主和城市解放形成强有力的传播网络。",
  },
  {
    id: "p5",
    years: "1949-1978",
    sub: "社会主义革命和建设时期",
    name: "人民之声",
    color: "#9b3f8d",
    light: false,
    summaryTitle: "广播影像进入人民生活",
    summary:
      "新中国成立后，报刊、广播、电影和基层宣传网络共同发展，红色传播走入工厂、乡村、学校和家庭，成为社会建设的重要力量。",
  },
  {
    id: "p6",
    years: "1978-2012",
    sub: "改革开放和社会主义现代化建设新时期",
    name: "春潮涌动",
    color: "#765fa8",
    light: false,
    summaryTitle: "改革春潮重塑媒体生态",
    summary:
      "改革开放推动上海媒体扩容转型，党报报道、电视广告、广播电视品牌化发展相继出现，媒体与城市社会生活的连接更加密切。",
  },
  {
    id: "p7",
    years: "2012-至今",
    sub: "中国特色社会主义新时代",
    name: "融合创新",
    color: "#6688c2",
    light: false,
    summaryTitle: "媒体深度融合，技术赋能转型",
    summary:
      "进入新时代，上海红色媒体以融合创新深化改革与内容转型，报业集团成立、澎湃新闻上线、舞台艺术和融媒体项目共同书写新时代传播篇章。",
  },
];

const eventRows = [
  ["p1", "1920.8", "《共产党宣言》首译", "《共产党宣言》首个中文全译本在上海出版，为早期马克思主义传播提供了清晰文本，也成为红色出版的重要起点。", "01.m4a", "新建画布1 1.png"],
  ["p1", "1920.11", "《共产党》月刊创办", "上海共产主义小组创办党内刊物，集中宣传马克思主义理论和建党主张，形成早期革命传播阵地。", "02.m4a", "《共产党》  月刊创办.png"],
  ["p1", "1921.9", "人民出版社成立", "人民出版社在上海成立，出版发行革命理论读物，推动党的思想传播从秘密文本走向更系统的出版实践。", "03.m4a", "Group 15.png"],
  ["p1", "1923.10", "《中国青年》创刊", "面向青年群体的进步刊物在上海发声，以通俗而有力的文字召唤新一代投身时代变革。", "04.m4a", "3fea6bf40be7598375e1b8ec2fbc31b 2.png"],
  ["p2", "1927.10", "《布尔塞维克》创刊", "1927 年“四一二”政变后，中共中央机关刊物《向导》被迫停刊。八七会议后党中央迁沪，于 1927 年 10 月在上海秘密创刊《布尔塞维克》。", "05.m4a", "界面2-板块2.png"],
  ["p2", "1929.4", "《上海报》通信报纸创办", "地下通信报纸以灵活形式传递党的声音，在严密封锁中连接组织与群众。", "06.m4a", "Frame 4-1.png"],
  ["p2", "1929-1930", "左翼文化运动开展", "左翼文化力量在上海集结，文学、戏剧、出版和新闻共同构成面向大众的进步传播网络。", "07.m4a", "Frame 4-2.png"],
  ["p3", "1937.8", "《救亡日报》", "抗战爆发后，《救亡日报》以新闻和评论凝聚民众，成为上海救亡宣传的重要媒体。", "08.m4a", "Frame 8.png"],
  ["p3", "1937-1949", "秦鸿钧与李白秘密电台", "地下电台工作者以生命守护通信线路，在隐秘空间中把党的声音送向更远处。", "09.m4a", "Group 44.png"],
  ["p3", "1938", "复社与《西行漫记》", "进步出版力量推动《西行漫记》传播，让更多读者认识中国共产党和延安革命实践。", "10.m4a", "Rectangle 12.png"],
  ["p3", "1937", "《群众》周刊", "面向群众的政治刊物持续发声，在复杂环境中传播抗战主张和统一战线声音。", "11.m4a", "Group 4.png"],
  ["p4", "1945", "《民主》周刊", "抗战胜利后，民主进步报刊积极参与舆论斗争，呼吁和平、民主与社会进步。", "12.m4a", "Frame 4-3.png"],
  ["p4", "1946", "《周报》", "《周报》等刊物以短平快的方式回应现实议题，成为城市公共舆论中的进步力量。", "13.m4a", "image 36.png"],
  ["p4", "1945-1949", "沪上进步学生报刊群", "学生报刊在校园和街头流通，以青年视角记录时代，推动爱国民主运动扩散。", "14.m4a", "Rectangle 34.png"],
  ["p4", "1949.5", "上海全市学生“护校解放”总行动", "解放前夕，学生以宣传、组织和行动守护学校，为城市迎接新生贡献力量。", "15.m4a", "Group 19.png"],
  ["p5", "1948", "上海地下党街头秘密传单运动", "秘密传单穿梭于街巷之间，用最直接的纸面传播突破封锁，动员群众。", "16.m4a", "Group 41.png"],
  ["p5", "1948", "上海地下党“街头诗画”宣传运动", "诗歌与图像进入街头空间，把政治表达转化为易读、易记、易传播的公共视觉。", "17.m4a", "Group 49.png"],
  ["p5", "1949", "《支部生活》创刊", "面向基层党组织的刊物创办，服务组织建设和党员教育，见证新上海的政治传播实践。", "18.m4a", "Rectangle 34-1.png"],
  ["p5", "1949", "《上海青年报》创刊", "青年媒体以新中国建设为背景，记录青年生活与社会变迁，延续面向青年的传播传统。", "19.m4a", "Group 7.png"],
  ["p5", "1950s", "上海农村有线广播网建成", "有线广播把政策、新闻和知识送入乡村基层，拓展了新中国成立后的公共传播覆盖面。", "20.m4a", "Group 46.png"],
  ["p5", "1950s", "上海人民广播电台工业", "人民广播关注工业建设现场，用声音记录劳动、生产和城市发展的时代节奏。", "21.m4a", "Rectangle 11.png"],
  ["p5", "1953", "上海科教电影制片厂成立", "科教电影让知识传播具备影像语言，服务生产、教育和公众科学启蒙。", "22.m4a", "Frame 7.png"],
  ["p5", "1957", "上海美术电影制片厂成立", "美术电影以独特的中国动画风格进入大众文化，丰富了社会主义文化传播形式。", "23.m4a", "Frame 7-1.png"],
  ["p6", "1979", "《解放日报》突破党报禁区", "改革开放初期，党报报道理念发生变化，社会新闻进入头版，媒体与社会生活的连接更加紧密。", "24.m4a", "Frame 3-1.png"],
  ["p6", "1979.1", "中国大陆第一条电视广告", "上海电视台播出中国大陆第一条电视广告，成为媒介生态变化的标志，也折射出改革开放后的市场与传播新气象。", "25.m4a", "BG-1.png"],
  ["p6", "1992", "东方广播电台", "类型化、都市化广播兴起，广播媒体在城市生活中形成更鲜明的频道定位和服务意识。", "26.m4a", "Frame 4.png"],
  ["p6", "1993", "东方电视台", "电视媒体进入多频道竞争与品牌化发展阶段，城市影像传播的表达方式更加丰富。", "27.m4a", "Group 14.png"],
  ["p7", "2013.10", "上海报业集团成立", "报业资源整合推动传统媒体转型，为移动互联网时代的内容生产和融合发展奠定基础。", "28.m4a", "Frame 3.png"],
  ["p7", "2014.7", "澎湃新闻上线", "移动新闻平台上线，标志着上海主流媒体在互联网语境中探索原创内容与新型传播。", "29.m4a", "Group 44-1.png"],
  ["p7", "2019-至今", "舞剧《永不消逝的电波》", "红色经典以舞台艺术再传播，让电波中的信仰记忆进入当代审美和青年视野。", "30.m4a", "Group 50.png"],
  ["p7", "2020.9-2021.7", "建党百年“信仰之路”大型融媒体报道", "大型融媒体报道将历史现场、移动传播和互动叙事结合，呈现新时代红色传播的融合创新。", "31.m4a", "Frame 3.png"],
];

const detailPageRows = {
  1: ["event-01-1.jpg"],
  2: ["event-02-1.jpg"],
  3: ["event-03-1.jpg"],
  4: ["event-04-1.jpg"],
  5: ["event-05-1.jpg"],
  6: ["event-06-1.jpg", "event-06-2.jpg"],
  7: ["event-07-1.jpg"],
  8: ["event-08-1.jpg", "event-08-2.jpg"],
  9: ["event-09-1.jpg"],
  10: ["event-10-1.jpg"],
  11: ["event-11-1.jpg"],
  12: ["event-12-1.jpg"],
  13: ["event-13-1.jpg"],
  14: ["event-14-1.jpg"],
  15: ["event-15-1.jpg"],
  16: ["event-16-1.jpg"],
  17: ["event-17-1.jpg"],
  18: ["event-18-1.jpg"],
  19: ["event-19-1.jpg"],
  20: ["event-20-1.jpg"],
  21: ["event-21-1.jpg"],
  22: ["event-22-1.jpg"],
  23: ["event-23-1.jpg"],
  24: ["event-24-1.jpg"],
  25: ["event-25-1.jpg"],
  26: ["event-26-1.jpg"],
  27: ["event-27-1.jpg"],
  28: ["event-28-1.jpg", "event-28-2.jpg"],
  29: ["event-29-1.jpg", "event-29-2.jpg", "event-29-3.jpg"],
  30: ["event-30-1.jpg"],
  31: ["event-31-1.jpg", "event-31-2.jpg"],
};

const events = eventRows.map((row, index) => ({
  id: index + 1,
  period: row[0],
  date: row[1],
  title: row[2],
  body: row[3],
  audio: `assets/audio/${row[4]}`,
  image: `assets/event-thumbs/event-${String(index + 1).padStart(2, "0")}.jpg`,
  sourceImage: img(row[5]),
  detailPages: (detailPageRows[index + 1] || []).map((name) => `assets/detail-pages/${name}`),
}));

const home = document.querySelector("#home");
const periodScreen = document.querySelector("#period");
const periodList = document.querySelector(".period-list");
const periodHero = document.querySelector(".period-hero");
const timeline = document.querySelector(".timeline");
const backButton = document.querySelector(".back-button");
const soundMini = document.querySelector(".sound-mini");
const detail = document.querySelector(".detail-sheet");
const sheetPanel = document.querySelector(".sheet-panel");
const sheetClose = document.querySelector(".sheet-close");
const sheetMedia = document.querySelector(".sheet-media");
const sheetDate = document.querySelector(".sheet-date");
const sheetTitle = document.querySelector("#sheet-title");
const sheetBody = document.querySelector(".sheet-body");
const sheetPlay = document.querySelector(".sheet-play");
const sheetAudio = document.querySelector("audio");
const sheetDetailPages = document.querySelector(".sheet-detail-pages");
const homeSound = document.querySelector(".sound-pill");

let currentPeriod = periods[0];
let currentEvent = events[0];

periods.forEach((period) => {
  const button = document.createElement("button");
  button.className = "period-card";
  button.type = "button";
  button.style.setProperty("--period-color", period.color);
  button.innerHTML = `<strong>${period.years}</strong><small>${period.sub}</small><span>${period.name}</span>`;
  button.addEventListener("click", () => showPeriod(period.id, true));
  periodList.appendChild(button);
});

function showPeriod(id, push = false) {
  const period = periods.find((item) => item.id === id) || periods[0];
  currentPeriod = period;
  const periodEvents = events.filter((event) => event.period === period.id);
  currentEvent = periodEvents[0] || events[0];

  home.hidden = true;
  periodScreen.hidden = false;
  periodScreen.classList.toggle("light", period.light);
  periodScreen.style.setProperty("--period-color", period.color);
  sheetPanel.style.setProperty("--sheet-color", period.color);

  periodHero.innerHTML = `
    <div class="period-banner">
      <div>
        <strong>${period.years}</strong>
        <small>${period.sub}</small>
        <span>${period.name}</span>
      </div>
    </div>
    <section class="period-summary">
      <h2>${period.summaryTitle}</h2>
      <p>${period.summary}</p>
    </section>
  `;

  timeline.innerHTML = "";
  periodEvents.forEach((event) => {
    const article = document.createElement("article");
    article.className = "event";
    article.id = `event-${event.id}`;
    article.innerHTML = `
      <button class="event-card" type="button" aria-label="查看详情：${event.title}">
        <img class="event-image" src="${event.image}" alt="">
        <span class="event-date">${event.date}</span>
        <span class="event-title">${event.title}</span>
        <span class="event-caption">${event.body.slice(0, 34)}...</span>
        <span class="more-pill">查看详情</span>
      </button>
    `;
    article.querySelector("button").addEventListener("click", () => openDetail(event, true));
    timeline.appendChild(article);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  if (push) history.pushState({ period: period.id }, "", `#${period.id}`);
}

function showHome(push = false) {
  pauseAudio();
  detail.hidden = true;
  periodScreen.hidden = true;
  home.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
  if (push) history.pushState({}, "", "#home");
}

function openDetail(event, push = false) {
  currentEvent = event;
  const period = periods.find((item) => item.id === event.period) || currentPeriod;
  sheetPanel.style.setProperty("--sheet-color", period.color);
  sheetMedia.innerHTML = `<img src="${event.image}" alt="">`;
  sheetDate.textContent = event.date;
  sheetTitle.textContent = event.title;
  sheetBody.textContent = event.body;
  sheetDetailPages.innerHTML = event.detailPages
    .map((src, index) => `<img src="${src}" alt="${event.title}详情图 ${index + 1}" loading="lazy">`)
    .join("");
  sheetDetailPages.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.remove(), { once: true });
  });
  sheetAudio.src = event.audio;
  sheetAudio.currentTime = 0;
  sheetAudio.load();
  detail.hidden = false;
  sheetClose.focus();
  if (push) history.pushState({ period: event.period, event: event.id }, "", `#event-${event.id}`);
}

function closeDetail() {
  pauseAudio();
  detail.hidden = true;
  if (location.hash.startsWith("#event-")) history.pushState({ period: currentPeriod.id }, "", `#${currentPeriod.id}`);
}

async function playAudio(src) {
  pauseAudio();
  if (src && sheetAudio.getAttribute("src") !== src) {
    sheetAudio.src = src;
    sheetAudio.load();
  }
  try {
    await sheetAudio.play();
  } catch (error) {
    sheetAudio.controls = true;
  }
}

function pauseAudio() {
  sheetAudio.pause();
}

backButton.addEventListener("click", () => showHome(true));
soundMini.addEventListener("click", () => playAudio(currentEvent.audio));
homeSound.addEventListener("click", () => playAudio(homeSound.dataset.audio));
sheetPlay.addEventListener("click", () => playAudio(currentEvent.audio));
sheetClose.addEventListener("click", closeDetail);
detail.addEventListener("click", (event) => {
  if (event.target === detail) closeDetail();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detail.hidden) closeDetail();
});
window.addEventListener("popstate", openFromHash);

function openFromHash() {
  const hash = location.hash.replace("#", "");
  if (!hash || hash === "home") {
    showHome(false);
    return;
  }
  if (hash.startsWith("event-")) {
    const event = events.find((item) => `event-${item.id}` === hash);
    if (event) {
      showPeriod(event.period, false);
      setTimeout(() => openDetail(event, false), 0);
      return;
    }
  }
  if (periods.some((period) => period.id === hash)) {
    showPeriod(hash, false);
    return;
  }
  showHome(false);
}

openFromHash();
