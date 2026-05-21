// 14기 구성원 더미데이터
export const data14 = {
  운영진: {
    대표: [
      { name: "이준혁", info: "컴퓨터공학과 21학번", img: "/images/members/14/lee_junhyuk.jpg" },
    ],
    부대표: [
      { name: "박수민", info: "소프트웨어학과 21학번", img: "/images/members/14/park_sumin.jpg" },
    ],
    PO: [
      { name: "김태양", info: "경영학과 22학번", img: "/images/members/14/kim_taeyang.jpg" },
      { name: "최유나", info: "디자인학부 22학번", img: "/images/members/14/choi_yuna.jpg" },
      { name: "정민재", info: "컴퓨터공학과 22학번", img: "/images/members/14/jung_minjae.jpg" },
      { name: "한소희", info: "전자공학과 23학번", img: "/images/members/14/han_sohee.jpg" },
    ],
    FRONTEND: [
      { name: "오지훈", info: "소프트웨어학과 22학번", img: "/images/members/14/oh_jihun.jpg" },
      { name: "임채원", info: "컴퓨터공학과 23학번", img: "/images/members/14/lim_chaewon.jpg" },
      { name: "신예린", info: "정보통신학과 22학번", img: "/images/members/14/shin_yerin.jpg" },
    ],
    BACKEND: [
      { name: "강동현", info: "소프트웨어학과 21학번", img: "/images/members/14/kang_donghyun.jpg" },
      { name: "윤서준", info: "컴퓨터공학과 22학번", img: "/images/members/14/yoon_seojun.jpg" },
      { name: "배지우", info: "전자공학과 22학번", img: "/images/members/14/bae_jiwoo.jpg" },
    ],
  },
  아기사자: {
    PO: [
      { name: "조아름", info: "경영학과 24학번", img: "/images/members/14/cho_areum.jpg" },
      { name: "류현석", info: "디자인학부 24학번", img: "/images/members/14/ryu_hyunseok.jpg" },
      { name: "문지아", info: "미디어학과 24학번", img: "/images/members/14/moon_jia.jpg" },
      { name: "이동건", info: "경영학과 23학번", img: "/images/members/14/lee_donggeon.jpg" },
      { name: "서은채", info: "디자인학부 24학번", img: "/images/members/14/seo_eunchae.jpg" },
      { name: "황민준", info: "경영학과 24학번", img: "/images/members/14/hwang_minjun.jpg" },
      { name: "전지원", info: "미디어학과 23학번", img: "/images/members/14/jun_jiwon.jpg" },
    ],
    FRONTEND: [
      { name: "김도연", info: "소프트웨어학과 24학번", img: "/images/members/14/kim_doyeon.jpg" },
      { name: "박민성", info: "컴퓨터공학과 24학번", img: "/images/members/14/park_minsung.jpg" },
      { name: "최은서", info: "정보통신학과 24학번", img: "/images/members/14/choi_eunseo.jpg" },
      { name: "정하늘", info: "소프트웨어학과 23학번", img: "/images/members/14/jung_haneul.jpg" },
      { name: "노지호", info: "컴퓨터공학과 24학번", img: "/images/members/14/no_jiho.jpg" },
      { name: "안수현", info: "전자공학과 24학번", img: "/images/members/14/ahn_suhyun.jpg" },
      { name: "홍예진", info: "소프트웨어학과 24학번", img: "/images/members/14/hong_yejin.jpg" },
      { name: "유승우", info: "컴퓨터공학과 23학번", img: "/images/members/14/yoo_seungwoo.jpg" },
      { name: "남지현", info: "정보통신학과 24학번", img: "/images/members/14/nam_jihyun.jpg" },
      { name: "장현우", info: "소프트웨어학과 24학번", img: "/images/members/14/jang_hyunwoo.jpg" },
      { name: "권민아", info: "컴퓨터공학과 24학번", img: "/images/members/14/kwon_mina.jpg" },
      { name: "손태민", info: "전자공학과 24학번", img: "/images/members/14/son_taemin.jpg" },
    ],
    BACKEND: [
      { name: "김재원", info: "소프트웨어학과 24학번", img: "/images/members/14/kim_jaewon.jpg" },
      { name: "이서윤", info: "컴퓨터공학과 24학번", img: "/images/members/14/lee_seoyun.jpg" },
      { name: "박준호", info: "정보통신학과 24학번", img: "/images/members/14/park_junho.jpg" },
      { name: "최성민", info: "소프트웨어학과 23학번", img: "/images/members/14/choi_sungmin.jpg" },
      { name: "정유진", info: "컴퓨터공학과 24학번", img: "/images/members/14/jung_yujin.jpg" },
      { name: "강세아", info: "전자공학과 24학번", img: "/images/members/14/kang_sea.jpg" },
      { name: "윤민호", info: "소프트웨어학과 24학번", img: "/images/members/14/yoon_minho.jpg" },
      { name: "배하연", info: "컴퓨터공학과 24학번", img: "/images/members/14/bae_hayeon.jpg" },
      { name: "오다은", info: "정보통신학과 24학번", img: "/images/members/14/oh_daeun.jpg" },
      { name: "임성준", info: "소프트웨어학과 24학번", img: "/images/members/14/lim_sungjun.jpg" },
      { name: "신지환", info: "컴퓨터공학과 23학번", img: "/images/members/14/shin_jihwan.jpg" },
      { name: "한다율", info: "전자공학과 24학번", img: "/images/members/14/han_dayul.jpg" },
    ],
  },
};

// 13, 12, 11기 통일 데이터 생성 함수
const createUnifiedMembers = (count) =>
  Array.from({ length: count }, (_, i) => ({
    name: "김멋사",
    info: "소프트웨어학과 23학번",
    img: `/images/members/placeholder.jpg`,
  }));

export const data13 = {
  운영진: {
    대표: createUnifiedMembers(1),
    부대표: createUnifiedMembers(1),
    PO: createUnifiedMembers(3),
    FRONTEND: createUnifiedMembers(3),
    BACKEND: createUnifiedMembers(3),
  },
  아기사자: {
    PO: createUnifiedMembers(6),
    FRONTEND: createUnifiedMembers(10),
    BACKEND: createUnifiedMembers(10),
  },
};

export const data12 = {
  운영진: {
    대표: createUnifiedMembers(1),
    부대표: createUnifiedMembers(1),
    PO: createUnifiedMembers(3),
    FRONTEND: createUnifiedMembers(3),
    BACKEND: createUnifiedMembers(3),
  },
  아기사자: {
    PO: createUnifiedMembers(6),
    FRONTEND: createUnifiedMembers(10),
    BACKEND: createUnifiedMembers(10),
  },
};

export const data11 = {
  운영진: {
    대표: createUnifiedMembers(1),
    부대표: createUnifiedMembers(1),
    PO: createUnifiedMembers(3),
    FRONTEND: createUnifiedMembers(3),
    BACKEND: createUnifiedMembers(3),
  },
  아기사자: {
    PO: createUnifiedMembers(5),
    FRONTEND: createUnifiedMembers(8),
    BACKEND: createUnifiedMembers(8),
  },
};