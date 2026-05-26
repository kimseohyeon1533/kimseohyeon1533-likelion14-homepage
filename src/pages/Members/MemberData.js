/* =========================================================
   기본 멤버 데이터
========================================================= */
const member = {
  name: "홍길동",
  info: "디자인학부 OO학번",
  img: null,
};

/* =========================================================
   여러 개의 더미 데이터 생성 함수
========================================================= */
const make = (count) =>
  Array.from({ length: count }, () => ({
    ...member,
  }));

/* =========================================================
   14기 데이터
========================================================= */
export const data14 = {
  운영진: {
    대표: [
      { name: "윤희준", info: "OO학과 24학번", img: null },
    ],

    부대표: [
      { name: "임다현", info: "OO학과 24학번", img: null },
    ],

    PO: [
      { name: "정영진", info: "OO학과 24학번", img: null },
      { name: "김정현", info: "OO학과 24학번", img: null },
      { name: "최운조", info: "OO학과 24학번", img: null },
    ],

    FRONTEND: [
      { name: "심서현", info: "OO학과 24학번", img: null },
      { name: "김현수", info: "OO학과 24학번", img: null },
      { name: "정목진", info: "OO학과 24학번", img: null },
    ],

    BACKEND: [
      { name: "금시언", info: "OO학과 24학번", img: null },
      { name: "김나경", info: "OO학과 24학번", img: null },
      { name: "신채린", info: "OO학과 24학번", img: null },
    ],
  },

  아기사자: {
    PO: [
      { name: "강서연", info: "OO학과 24학번", img: null },
      { name: "구나영", info: "OO학과 24학번", img: null },
      { name: "박세은", info: "OO학과 24학번", img: null },
      { name: "엄다영", info: "OO학과 24학번", img: null },
      { name: "이정민", info: "OO학과 24학번", img: null },
      { name: "조민서", info: "OO학과 24학번", img: null },
      { name: "조재호", info: "OO학과 24학번", img: null },
      { name: "한슬기", info: "OO학과 24학번", img: null },
    ],

    FRONTEND: [
      { name: "김민솔", info: "OO학과 24학번", img: null },
      { name: "김서현", info: "OO학과 24학번", img: null },
      { name: "김승민", info: "OO학과 24학번", img: null },
      { name: "김우현", info: "OO학과 24학번", img: null },
      { name: "김윤정", info: "OO학과 24학번", img: null },
      { name: "백윤관", info: "OO학과 24학번", img: null },
      { name: "양우석", info: "OO학과 24학번", img: null },
      { name: "양희창", info: "OO학과 24학번", img: null },
      { name: "장경무", info: "OO학과 24학번", img: null },
      { name: "장서후", info: "OO학과 24학번", img: null },
      { name: "정시훈", info: "OO학과 24학번", img: null },
      { name: "최서연", info: "OO학과 24학번", img: null },
      { name: "한주은", info: "OO학과 24학번", img: null },
      { name: "홍윤지", info: "OO학과 24학번", img: null },
    ],

    BACKEND: [
      { name: "김민호", info: "OO학과 24학번", img: null },
      { name: "김정모", info: "OO학과 24학번", img: null },
      { name: "김태현", info: "OO학과 24학번", img: null },
      { name: "나형준", info: "OO학과 24학번", img: null },
      { name: "남궁강", info: "OO학과 24학번", img: null },
      { name: "오지우", info: "OO학과 24학번", img: null },
      { name: "이정능", info: "OO학과 24학번", img: null },
      { name: "이주희", info: "OO학과 24학번", img: null },
      { name: "이충환", info: "OO학과 24학번", img: null },
      { name: "조민호", info: "OO학과 24학번", img: null },
      { name: "최아원", info: "OO학과 24학번", img: null },
      { name: "최예윤", info: "OO학과 24학번", img: null },
    ],
  },
};

/* =========================================================
   13기 데이터
========================================================= */
export const data13 = {

  운영진: {
    대표: make(1),
    부대표: make(1),
    PO: make(3),
    FRONTEND: make(3),
    BACKEND: make(3),
  },

  아기사자: {
    PO: make(6),
    FRONTEND: make(10),
    BACKEND: make(10),
  },
};

/* =========================================================
   12기 데이터
========================================================= */
export const data12 = {

  운영진: {
    대표: make(1),
    부대표: make(1),
    PO: make(3),
    FRONTEND: make(3),
    BACKEND: make(3),
  },

  아기사자: {
    PO: make(6),
    FRONTEND: make(10),
    BACKEND: make(10),
  },
};

/* =========================================================
   11기 데이터
========================================================= */
export const data11 = {

  운영진: {
    대표: make(1),
    부대표: make(1),
    PO: make(3),
    FRONTEND: make(3),
    BACKEND: make(3),
  },

  아기사자: {
    PO: make(5),
    FRONTEND: make(8),
    BACKEND: make(8),
  },
};