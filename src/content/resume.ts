import type { Locale, ResumeData, UIStrings } from "./types";

export const ui: Record<Locale, UIStrings> = {
  en: {
    toggle: "한국어",
    toggleHref: "/ko/",
    pdfHref: "/print/",
    pdfLabel: "PDF",
    backHref: "/",
    backLabel: "← Portfolio",
    credit: {
      beforeLink: "Layout inspired by ",
      linkText: "HyunSeob's résumé",
      href: "https://hyunseob.github.io/resume/",
      afterLink: ".",
    },
    sections: {
      experience: "Experience",
      projects: "Personal Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    labels: {
      overview: "Overview",
      contributions: "What I did",
      problemSolving: "Problem solving",
      stack: "Stack",
    },
  },
  ko: {
    toggle: "English",
    toggleHref: "/",
    pdfHref: "/ko/print/",
    pdfLabel: "PDF",
    backHref: "/ko/",
    backLabel: "← 포트폴리오",
    credit: {
      beforeLink: "레이아웃은 ",
      linkText: "이현섭님의 이력서",
      href: "https://hyunseob.github.io/resume/",
      afterLink: "를 참고했습니다.",
    },
    sections: {
      experience: "경력",
      projects: "개인 프로젝트",
      skills: "기술",
      education: "학력",
      contact: "연락처",
    },
    labels: {
      overview: "개요",
      contributions: "한 일",
      problemSolving: "문제 해결",
      stack: "스택",
    },
  },
};

export const resume: Record<Locale, ResumeData> = {
  en: {
    name: "Sunjin Kim",
    tagline:
      "I build web and mobile products end to end — frontend, backend, and the real-time integrations in between. Currently a full-stack developer at Eumtech, working on IoT safety-monitoring systems for railway maintenance.",
    experience: [
      {
        org: "Eumtech (이음텍)",
        role: "Full-stack Developer",
        period: "2025.11 – present",
        projects: [
          {
            title: "Railway maintenance safety-monitoring system",
            period: "2026.01 – present",
            overview:
              "An IoT platform for railway power-cut maintenance that tracks grounding status and worker location in real time, so a work line can be verified de-energized before work begins. Delivered as a control-room web app, a field-worker mobile app, and a backend, with several external systems integrated.",
            contributions: [
              "Field app (Flutter): login, job flow, safety-rule prompts, and real-time sync of worker / equipment location and safe-vs-deviated state.",
              "Control web (React): role-based dashboards, power-cut approval flow, and map-based work-zone display.",
              "Backend (Node.js): a location-based deviation-judgement API and REST / MQTT integration with external systems.",
            ],
            stack: [
              "React",
              "Flutter",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
              "WebSocket",
              "Google Maps API",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title: "Manda — 9×9 Mandalart goal-planning app",
        period: "2026.02 – 2026.04",
        status: "Released on Google Play (v1.0.0+2)",
        overview:
          "A solo project taken from concept to store release: an offline-first mobile app for breaking a goal down with the 9×9 Mandalart technique.",
        contributions: [
          "Modeled the 81-cell, 3-level hierarchy (1 core → 8 sub → 64 detail) as a flat list keyed by `id` / `parentId` / `level` instead of a nested tree, which sped up rendering and local reads.",
          "Centralized every data change in a Provider layer so the 3×3 focus view and 9×9 full view stay in sync in real time.",
          "Wrote state changes to disk immediately on every change, rather than relying on OS lifecycle hooks — removing the data-loss edge case on force-quit.",
          "Applied a `copyWith`-based immutability pattern across the data layer to keep sibling and parent cells from corrupting each other.",
          "Custom KO/EN localization, launcher icons and native splash, release signing, store review and deployment.",
        ],
        stack: ["Flutter", "Dart", "Hive", "Provider", "fl_chart"],
        links: [
          {
            label: "▶ Google Play",
            href: "https://play.google.com/store/apps/details?id=com.mandagolab.manda",
          },
          { label: "GitHub", href: "https://github.com/SJ-1220/flutter-mandalart" },
        ],
        images: [
          { src: "/resume/projects/manda_9x9.jpg", alt: "Manda — 9×9 Mandalart grid" },
          { src: "/resume/projects/manda_3x3.jpg", alt: "Manda — 3×3 focus view" },
          {
            src: "/resume/projects/manda_chart.jpg",
            alt: "Manda — achievement radar chart",
          },
        ],
      },
      {
        title: "NaviyNote v2 — splitting a monolith into web + API",
        period: "2026.05 – present",
        status: "In progress",
        overview:
          "Solo full-stack. Splitting the monolithic Next.js app into an independent frontend (naviynote_web) and backend API (naviynote_api) to practice a real front/back separation.",
        contributions: [
          "Rebuilt auth without NextAuth: an in-memory access token in an `AuthContext`, an `httpOnly` refresh cookie, silent refresh, and an `authFetch` that retries once on a 401.",
          "Stood up the API as a layered Express + TypeScript service (`routes → controller → service → repository`) with Prisma on Neon PostgreSQL and Zod validating env vars at startup.",
          "Moved Supabase direct calls to a fetch-based `todoApi` / `memoApi` client layer; built a dedicated `/naver/callback` route that exchanges the auth code with the backend directly.",
        ],
        problemSolving: [
          {
            title: "Cookie auth blocked across split origins",
            body: "The frontend and API ran on separate origins (different ports), which blocked cookie-based auth. Fixed by enabling cross-origin credentials, adding an explicit origin allow-list, and reworking the callback route for the cross-origin flow.",
          },
          {
            title: "Session strategy migration",
            body: "NextAuth session cookies don't work against an external API, so I moved to an in-memory JWT plus an `httpOnly` refresh token, with automatic re-issue and retry on a 401.",
          },
          {
            title: "Client/server API contract mismatch",
            body: "The frontend authenticated by an email query while the backend expected a JWT. I unified on JWT as the single auth method and am building out the missing `/memos` endpoint.",
          },
        ],
        stack: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL (Neon)",
        ],
        links: [
          {
            label: "GitHub — web",
            href: "https://github.com/SJ-1220/NaviyNote_web",
          },
          {
            label: "GitHub — api",
            href: "https://github.com/SJ-1220/NaviyNote_api",
          },
        ],
        images: [
          {
            src: "/resume/projects/architecture-refactor.en.svg",
            alt: "Architecture refactor: Next.js full-stack monolith split into a Next.js web app and an Express API, joined by a new REST + JWT boundary.",
            wide: true,
          },
        ],
      },
      {
        title: "NaviyNote v1 — offline-first memo & schedule web app",
        period: "2025.02 – 2025.07 (reworked 2026.04 – 2026.05)",
        overview:
          "Solo full-stack. A memo and to-do app with Naver OAuth login, drag-and-drop memo sorting, a 1:1 two-way link between a memo and a to-do, and Naver Calendar sync.",
        contributions: [
          "Next.js 15 App Router with parallel / intercepting routes for modal detail views; custom hooks (`useMemos`, `useToDos`, `useCalendar`) to keep business logic out of view components.",
          "Supabase (PostgreSQL) schema with a 1:1 foreign-key constraint and a dedicated service layer isolating CRUD from the UI.",
          "Zustand as the client source of truth with optimistic updates; Naver OAuth routed through a server-side proxy so the calendar token is never exposed to the client.",
        ],
        problemSolving: [
          {
            title: "Stale closure in the react-dnd drop handler",
            body: "`useDrop` captured the to-do list from mount time, so dropping an event on the calendar broke date sync. Refactored to a `handleDropRef` that always holds the latest state, decoupling the event handler from the React render cycle.",
          },
          {
            title: "Race condition in the 1:1 memo↔schedule link",
            body: "Creating or editing a memo didn't check for an existing link first, so one schedule could briefly hold two memos. Reordered the logic to release the previous link before writing, and added `user_email` scope checks to guarantee the 1:1 relation.",
          },
        ],
        stack: [
          "Next.js 15",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase (PostgreSQL)",
          "Zustand",
          "NextAuth",
          "FullCalendar",
          "react-dnd",
        ],
        links: [{ label: "GitHub", href: "https://github.com/SJ-1220/NaviyNote" }],
        images: [
          {
            src: "/resume/projects/naviynote_v1_memo.png",
            alt: "NaviyNote v1 — memo grid with drag-and-drop sorting",
          },
          {
            src: "/resume/projects/naviynote_v1_calendar.png",
            alt: "NaviyNote v1 — monthly calendar view",
          },
        ],
      },
    ],
    skills: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Dart", "SQL"] },
      {
        label: "Frontend",
        items: [
          "React",
          "Next.js (App Router)",
          "Flutter",
          "Tailwind CSS",
          "Zustand / Provider",
          "MUI",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js",
          "Express",
          "REST APIs",
          "Prisma",
          "Real-time (MQTT / WebSocket)",
        ],
      },
      {
        label: "Data",
        items: [
          "PostgreSQL (Supabase / Neon)",
          "MariaDB",
          "Hive",
        ],
      },
      {
        label: "Auth & infra",
        items: [
          "OAuth 2.0 (Naver)",
          "JWT / session auth",
          "Vercel",
          "GitHub Actions",
          "Git",
        ],
      },
      {
        label: "Practice",
        items: [
          "Offline-first",
          "Optimistic updates",
          "Layered architecture",
          "AI-assisted development (Claude Code)",
        ],
      },
    ],
    education: [
      {
        org: "Kwangwoon University",
        detail: "School of Software",
        period: "2020 – 2025",
      },
    ],
    contact: [
      { label: "Email", value: "mandagolab@gmail.com" },
      { label: "GitHub", href: "https://github.com/SJ-1220" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%EC%84%A0%EC%A7%84-%EA%B9%80-752814406/",
      },
    ],
  },

  ko: {
    name: "김선진",
    tagline:
      "웹과 앱을 프론트엔드부터 백엔드, 그리고 그 사이의 실시간 연동까지 직접 만듭니다. 현재 이음텍에서 풀스택 개발자로 철도 유지보수용 IoT 안전 관제 시스템을 개발하고 있습니다.",
    experience: [
      {
        org: "이음텍",
        role: "풀스택 개발자",
        period: "2025.11 – 현재",
        projects: [
          {
            title: "철도 유지보수 안전 관제 시스템",
            period: "2026.01 – 현재",
            overview:
              "철도 급단전 작업을 위한 IoT 관제 플랫폼. 접지 상태와 작업자 위치를 실시간으로 추적해 작업 전 해당 작업선이 안전하게 단전됐는지 검증합니다. 관제 웹, 작업자 앱, 백엔드로 구성되며 여러 외부 시스템과 연동됩니다.",
            contributions: [
              "작업자 앱(Flutter): 로그인, 작업 흐름, 안전수칙 팝업, 작업자·장비 위치와 정상/이탈 상태 실시간 동기화 구현.",
              "관제 웹(React): 권한별 대시보드, 단전 승인 흐름, 지도 기반 작업구역 표시 구현.",
              "백엔드(Node.js): 위치 기반 이탈 판정 API, 외부 시스템과의 REST / MQTT 연동 구현.",
            ],
            stack: [
              "React",
              "Flutter",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
              "WebSocket",
              "Google Maps API",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title: "Manda — 9×9 만다라트 목표 계획 앱",
        period: "2026.02 – 2026.04",
        status: "Google Play 출시 (v1.0.0+2)",
        overview:
          "기획부터 스토어 출시까지 1인 개발한 9×9 만다라트 기법으로 목표를 쪼개는 오프라인 퍼스트 모바일 앱입니다.",
        contributions: [
          "81칸 3단계 계층(핵심 1 → 하위 8 → 세부 64)을 중첩 트리 대신 `id` / `parentId` / `level` 기반 평면 리스트로 모델링해 렌더링과 로컬 조회를 최적화.",
          "모든 데이터 변경을 Provider 레이어로 중앙집중화해 3×3 집중 뷰와 9×9 전체 뷰를 실시간 동기화.",
          "OS 생명주기 훅에 기대지 않고, 상태가 바뀔 때마다 즉시 디스크에 기록해 강제 종료 시 데이터 손실 방지.",
          "데이터 레이어 전반에 `copyWith` 기반 불변성 패턴을 적용해 형제·부모 셀 간 상태 오염 차단.",
          "커스텀 한/영 다국어, 런처 아이콘·네이티브 스플래시, 릴리스 서명, 스토어 심사·배포.",
        ],
        stack: ["Flutter", "Dart", "Hive", "Provider", "fl_chart"],
        links: [
          {
            label: "▶ Google Play",
            href: "https://play.google.com/store/apps/details?id=com.mandagolab.manda",
          },
          { label: "GitHub", href: "https://github.com/SJ-1220/flutter-mandalart" },
        ],
        images: [
          { src: "/resume/projects/manda_9x9.jpg", alt: "Manda — 9×9 만다라트 그리드" },
          { src: "/resume/projects/manda_3x3.jpg", alt: "Manda — 3×3 집중 뷰" },
          { src: "/resume/projects/manda_chart.jpg", alt: "Manda — 달성률 레이더 차트" },
        ],
      },
      {
        title: "NaviyNote v2 — 모놀리식을 웹 + API로 분리",
        period: "2026.05 – 현재",
        status: "진행 중",
        overview:
          "1인 풀스택 개발입니다. 모놀리식 Next.js 앱을 독립 프론트엔드(naviynote_web)와 백엔드 API(naviynote_api)로 분리해, 실무형 프론트·백엔드 분리 아키텍처를 연습하고 있습니다.",
        contributions: [
          "NextAuth 없이 인증 재구축 — `AuthContext` 인메모리 액세스 토큰, `httpOnly` 리프레시 쿠키, Silent Refresh, 401 응답 시 1회 재시도하는 `authFetch` 구현.",
          "계층형 Express + TypeScript 백엔드(`routes → controller → service → repository`) 구성, Neon PostgreSQL + Prisma 연결, 환경 변수는 Zod로 시작 시점 검증.",
          "Supabase 직접 호출을 fetch 기반 `todoApi` / `memoApi` 클라이언트 레이어로 이관, 인가 코드를 백엔드와 직접 교환하는 `/naver/callback` 라우트 구축.",
        ],
        problemSolving: [
          {
            title: "도메인 분리로 인한 쿠키 인증 차단",
            body: "프론트와 API가 서로 다른 주소(도메인·포트)로 나뉘면서 쿠키 기반 인증이 막혔습니다. 크로스 도메인 쿠키 허용 설정과 명시적 허용 도메인 목록을 두고, 콜백 라우트를 크로스 도메인 흐름에 맞게 정비해 해결했습니다.",
          },
          {
            title: "세션 전략 이관",
            body: "외부 API 환경에서는 기존 NextAuth 세션 쿠키가 동작하지 않았습니다. 인메모리 JWT와 `httpOnly` 리프레시 토큰 구조로 전환하고, 401 응답 시 자동 재발급과 재시도를 구현했습니다.",
          },
          {
            title: "클라이언트와 서버의 API 계약 불일치",
            body: "프론트는 이메일 쿼리로, 백엔드는 JWT로 인증하고 있었습니다. JWT 단일 방식으로 통일했고, 미구현이던 `/memos` 엔드포인트를 구축하고 있습니다.",
          },
        ],
        stack: [
          "Next.js 16",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL (Neon)",
        ],
        links: [
          {
            label: "GitHub — web",
            href: "https://github.com/SJ-1220/NaviyNote_web",
          },
          {
            label: "GitHub — api",
            href: "https://github.com/SJ-1220/NaviyNote_api",
          },
        ],
        images: [
          {
            src: "/resume/projects/architecture-refactor.ko.svg",
            alt: "아키텍처 리팩터링: Next.js 풀스택 모놀리식을 Next.js 웹 앱과 Express API로 분리하고, 그 사이에 REST + JWT 경계를 새로 도입.",
            wide: true,
          },
        ],
      },
      {
        title: "NaviyNote v1 — 오프라인 퍼스트 메모·일정 웹앱",
        period: "2025.02 – 2025.07 (2026.04 – 2026.05 리팩터링)",
        overview:
          "1인 풀스택 개발입니다. 네이버 OAuth 로그인, 드래그 앤 드롭 메모 분류, 메모와 할 일의 1:1 양방향 연결, 네이버 캘린더 동기화를 제공하는 메모·일정 앱입니다.",
        contributions: [
          "Next.js 15 App Router의 Parallel / Intercepting 라우트로 모달 상세 뷰 구현, 커스텀 훅(`useMemos`, `useToDos`, `useCalendar`)으로 비즈니스 로직을 뷰 컴포넌트에서 분리.",
          "Supabase(PostgreSQL) 스키마에 1:1 외래 키 제약, CRUD를 UI에서 격리하는 전용 서비스 레이어 구성.",
          "Zustand를 클라이언트 단일 출처로 삼아 낙관적 업데이트 적용, 네이버 OAuth는 서버 프록시 라우트를 거치게 해 캘린더 토큰이 클라이언트에 노출되지 않도록 처리.",
        ],
        problemSolving: [
          {
            title: "react-dnd 드롭 핸들러의 오래된 클로저",
            body: "`useDrop`이 마운트 시점의 목록 상태를 캡처해, 달력에 드롭할 때 날짜 동기화가 깨졌습니다. 항상 최신 상태를 가리키는 `handleDropRef`로 바꿔 이벤트 핸들러와 렌더 주기를 분리했습니다.",
          },
          {
            title: "메모↔일정 1:1 연결의 경쟁 상태",
            body: "메모를 만들거나 고칠 때 기존 연결을 먼저 확인하지 않아, 한 일정에 메모가 잠깐 두 개 연결될 수 있었습니다. 기록 전에 이전 연결을 먼저 끊도록 순서를 바꾸고, 사용자 이메일 범위 검증을 더해 1:1을 보장했습니다.",
          },
        ],
        stack: [
          "Next.js 15",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase (PostgreSQL)",
          "Zustand",
          "NextAuth",
          "FullCalendar",
          "react-dnd",
        ],
        links: [{ label: "GitHub", href: "https://github.com/SJ-1220/NaviyNote" }],
        images: [
          {
            src: "/resume/projects/naviynote_v1_memo.png",
            alt: "NaviyNote v1 — 드래그 앤 드롭 메모 그리드",
          },
          {
            src: "/resume/projects/naviynote_v1_calendar.png",
            alt: "NaviyNote v1 — 월간 캘린더 뷰",
          },
        ],
      },
    ],
    skills: [
      { label: "언어", items: ["TypeScript", "JavaScript", "Dart", "SQL"] },
      {
        label: "프론트엔드",
        items: [
          "React",
          "Next.js (App Router)",
          "Flutter",
          "Tailwind CSS",
          "Zustand / Provider",
          "MUI",
        ],
      },
      {
        label: "백엔드",
        items: [
          "Node.js",
          "Express",
          "REST API",
          "Prisma",
          "실시간 연동 (MQTT / WebSocket)",
        ],
      },
      {
        label: "데이터",
        items: ["PostgreSQL (Supabase / Neon)", "MariaDB", "Hive"],
      },
      {
        label: "인증 · 인프라",
        items: [
          "OAuth 2.0 (네이버)",
          "JWT / 세션 인증",
          "Vercel",
          "GitHub Actions",
          "Git",
        ],
      },
      {
        label: "작업 방식",
        items: [
          "오프라인 퍼스트",
          "낙관적 업데이트",
          "계층형 아키텍처",
          "AI 보조 개발 (Claude Code)",
        ],
      },
    ],
    education: [
      {
        org: "광운대학교",
        detail: "소프트웨어학부",
        period: "2020 – 2025",
      },
    ],
    contact: [
      { label: "이메일", value: "mandagolab@gmail.com" },
      { label: "GitHub", href: "https://github.com/SJ-1220" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%EC%84%A0%EC%A7%84-%EA%B9%80-752814406/",
      },
    ],
  },
};
