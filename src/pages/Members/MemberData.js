const member = { name: "홍길동", info: "디자인학부 OO학번", img: null };
const make = (count) => Array.from({ length: count }, () => ({ ...member }));

export const data14 = {
  운영진: {
    대표: make(1),
    부대표: make(1),
    PO: make(4),
    FRONTEND: make(3),
    BACKEND: make(3),
  },
  아기사자: {
    PO: make(7),
    FRONTEND: make(12),
    BACKEND: make(12),
  },
};

export const data13 = {
  운영진: { 대표: make(1), 부대표: make(1), PO: make(3), FRONTEND: make(3), BACKEND: make(3) },
  아기사자: { PO: make(6), FRONTEND: make(10), BACKEND: make(10) },
};

export const data12 = {
  운영진: { 대표: make(1), 부대표: make(1), PO: make(3), FRONTEND: make(3), BACKEND: make(3) },
  아기사자: { PO: make(6), FRONTEND: make(10), BACKEND: make(10) },
};

export const data11 = {
  운영진: { 대표: make(1), 부대표: make(1), PO: make(3), FRONTEND: make(3), BACKEND: make(3) },
  아기사자: { PO: make(5), FRONTEND: make(8), BACKEND: make(8) },
};