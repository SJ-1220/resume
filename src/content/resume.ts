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
      certifications: "Certifications",
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
      certifications: "자격증 및 어학",
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
            title: "Human-error management system for railway workers",
            period: "2026.01 – present",
            overview:
              "A full-stack control system to analyze, assess, and prevent human error at railway work sites. A React/MUI admin dashboard, a Flutter field-worker app, and a Node.js backend collecting real-time equipment telemetry over MQTT / WebSocket.",
            contributions: [
              "Pulled freight data from an external logistics system by real-time crawl and merged it with on-site manual entry into one view.",
              "Ported the worker / location / equipment / organization management features — web-only until then — into the Flutter field app.",
              "Built the MQTT pipeline that receives device telemetry — from broker / router / topic modules through event handlers, checkout/return identification, and event-identifier mapping.",
              "Physically split the database from a parallel control system and migrated dummy data to real operational data.",
            ],
            problemSolving: [
              {
                title: "3-party integration: mismatched event identifier",
                body: "The interface spec, the external system's code, and the key we needed all disagreed, so receive tests failed. Traced the change history to a commented-out early mapping that had been reused and hardened, and had the sending team correct it.",
              },
              {
                title: "Misjudged a stateful external server as a passthrough",
                body: "Reusing fixed test-device data caused repeated \"already checked out\" conflicts. Found the server keeps device state internally; switched to a fresh device-ID pair per run with strict 1:1 checkout/return, and pre-blocked duplicate requests on our side.",
              },
            ],
            stack: [
              "React 19",
              "MUI",
              "Flutter",
              "Dio",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
              "Puppeteer",
            ],
          },
          {
            title: "Railway power-cut work safety-monitoring system",
            period: "2026.05 – present",
            overview:
              "Monitors, during railway power-cut work, the connection of grounding hooks and the real-time location-based safety state (normal / deviated) of workers and equipment. A React / Google Maps control web, a Flutter app, and a Node.js backend relaying MQTT telemetry over WebSocket. Eumtech led the software.",
            contributions: [
              "Rebuilt my assigned app screens on a new layered architecture (`Widget → ViewModel → Service → Repository`), referencing a handed-over legacy app.",
              "Job start/complete flow, safety-rule popups, responsible-worker execution gating, de-energize timer, 1-second polling sync.",
              "Multi-role control dashboards; Google Maps rendering of work zones, grounding points, and hazard radius.",
              "Real-time deviation-judgement API — distance & sustain-time based, 8 state groups, hysteresis, FSM guards.",
              "External grounding-hook checkout/return REST + MQTT event integration.",
            ],
            problemSolving: [
              {
                title: "Triplicated judgement → one server-authoritative source",
                body: "App, web, and server each computed the safety judgement, so screens could disagree and every criteria change meant editing three places. Redefined the conditions along time / distance / subject axes and moved the logic to the server; clients now just display the result, and later criteria changes only touched server thresholds.",
              },
              {
                title: "Deciding to rebuild the legacy app",
                body: "The handed-over app was flat and partly mock-driven — a poor base for the incoming features and UI swap. The team agreed on a layered architecture; I reimplemented my screens against the real API, and they're still the codebase's core.",
              },
            ],
            stack: [
              "React 19",
              "MUI",
              "Google Maps JS API",
              "Flutter",
              "Provider",
              "Dio",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title: "Manda — 9×9 Mandalart goal-planning app",
        period: "2026.02 – 2026.04",
        status: "Released on Google Play (v1.0.0)",
        overview:
          "A solo project taken from concept to store release: an offline-first mobile app for breaking a goal down with the 9×9 Mandalart technique.",
        contributions: [
          "Modeled the 81-cell, 3-level hierarchy (1 core → 8 sub → 64 detail) as a flat list keyed by `id` / `parentId` / `level` instead of a nested tree, which sped up rendering and local reads.",
          "Centralized every data change in a Provider layer so the 3×3 focus view and 9×9 full view stay in sync in real time; zoom-in / zoom-out navigation between the two, plus pinch-zoom / pan.",
          "Wrote state changes to disk immediately on every change, rather than relying on OS lifecycle hooks — removing the data-loss edge case on force-quit.",
          "Custom KO/EN localization, Dark/Light theme, launcher icons and native splash, release signing, store review and deployment.",
          "Set up a GitHub Actions pipeline (static analysis, format check, build) and a comment-triggered Claude-based automatic PR code review.",
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
    certifications: [
      {
        label: "Certifications",
        items: [
          { label: "Big Data Analysis Engineer", period: "2024.12" },
          { label: "Advanced Data Analytics Semi-Professional (ADsP)", period: "2024.09" },
          { label: "SQL Developer (SQLD)", period: "2024.09" },
          { label: "Data Architecture Semi-Professional (DAsP)", period: "2024.10" },
        ],
      },
      {
        label: "Language",
        items: [{ label: "TOEIC 860", period: "2024.04" }],
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
            title: "철도 작업 인적오류 관리 시스템",
            period: "2026.01 – 현재",
            overview:
              "철도 작업 현장의 인적오류를 분석·평가·예방하는 풀스택 관제 시스템입니다. 관리자 대시보드(React/MUI), 현장 작업자 앱(Flutter), 실시간 장비 데이터를 MQTT/WebSocket으로 수집하는 백엔드(Node.js)로 구성됩니다.",
            contributions: [
              "외부 물류 시스템의 화물 데이터를 실시간 크롤링으로 받아 오고, 현장의 수동 입력과 한 화면에서 통합.",
              "웹에만 있던 작업자·위치·장비·조직 관리 기능을 현장 앱(Flutter)으로 이식.",
              "장비 원격 데이터를 수신하는 MQTT 파이프라인 구현 — 브로커·라우터·토픽 모듈부터 이벤트 핸들러, 장비 불출/반납 식별, 식별자 매핑까지 담당.",
              "함께 개발하던 다른 관제 시스템과 DB를 물리적으로 분리하고, 더미 데이터를 실운영 데이터로 전환.",
            ],
            problemSolving: [
              {
                title: "3자 연동에서 이벤트 식별자 불일치",
                body: "명세서 정의, 외부 시스템 코드, 우리가 필요한 키가 모두 달라 수신 테스트가 실패했습니다. Git 이력을 추적해 주석 처리됐던 옛 매핑이 재사용돼 굳어진 것을 규명하고, 외부 팀에 수정을 요청해 정상화했습니다.",
              },
              {
                title: "Stateful 외부 서버를 단순 중계로 오판",
                body: "고정 테스트 장비 데이터를 반복 사용해 '이미 불출됨' 충돌이 계속 났습니다. 외부 서버가 장비 상태를 내부에 저장한다는 것을 규명하고, 테스트마다 새 장비 ID 쌍으로 불출–반납을 1:1로 맞추고 우리 쪽 중복 불출도 사전 차단했습니다.",
              },
            ],
            stack: [
              "React 19",
              "MUI",
              "Flutter",
              "Dio",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
              "Puppeteer",
            ],
          },
          {
            title: "철도 급단전 작업 안전 관제 시스템",
            period: "2026.05 – 현재",
            overview:
              "철도 급단전 작업에서 접지걸이 연동과 작업자·장비의 위치 기반 실시간 안전 상태(정상/이탈)를 관제하는 시스템입니다. 관제 웹(React/Google Maps), 앱(Flutter), MQTT 텔레메트리를 WebSocket으로 중계하는 백엔드(Node.js)로 구성되며, 이음텍이 SW 개발을 담당했습니다.",
            contributions: [
              "인수한 레거시 앱을 참고해 새 계층 아키텍처(`Widget → ViewModel → Service → Repository`)로 담당 화면 재구현.",
              "작업 시작/완료 흐름, 안전수칙 팝업, 작업 책임자 실행 제한, 단전 타이머, 1초 폴링 동기화 구현.",
              "다중 권한 관제 대시보드, Google Maps 기반 작업구역·접지포인트·위험구역 표시.",
              "거리·지속시간 기반 실시간 이탈 판정 API 구축 — 8개 상태 그룹, 히스테리시스, FSM 가드.",
              "외부 접지걸이 불출/반납 REST + MQTT 이벤트 연동.",
            ],
            problemSolving: [
              {
                title: "앱·웹·서버 3중 판정을 서버 단일 소스로 전환",
                body: "앱·웹·서버가 안전 판정을 각자 계산해 화면이 어긋났고, 기준을 바꿀 때마다 세 곳을 수정해야 했습니다. 판정 조건을 시간·거리·대상 세 축으로 재정의해 서버로 일원화하고 클라이언트는 결과만 표시하도록 바꿔, 이후 기준이 여러 번 바뀌어도 서버 값만 고치면 됐습니다.",
              },
              {
                title: "레거시 앱 재구현 판단",
                body: "인수한 앱은 평면 구조에 일부 목데이터 기반이라 추가될 기능과 UI 교체를 감당하기 어려웠습니다. 팀이 계층 구조를 합의한 뒤 제가 맡은 화면을 실 API 연동으로 새로 구현했고, 지금도 코드베이스의 핵심으로 유지되고 있습니다.",
              },
            ],
            stack: [
              "React 19",
              "MUI",
              "Google Maps JS API",
              "Flutter",
              "Provider",
              "Dio",
              "Node.js",
              "Express",
              "MariaDB",
              "MQTT",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        title: "Manda — 9×9 만다라트 목표 계획 앱",
        period: "2026.02 – 2026.04",
        status: "Google Play 출시 (v1.0.0)",
        overview:
          "기획부터 스토어 출시까지 1인 개발한 9×9 만다라트 기법으로 목표를 쪼개는 오프라인 퍼스트 모바일 앱입니다.",
        contributions: [
          "81칸 3단계 계층(핵심 1 → 하위 8 → 세부 64)을 중첩 트리 대신 `id` / `parentId` / `level` 기반 평면 리스트로 모델링해 렌더링과 로컬 조회를 최적화.",
          "모든 데이터 변경을 Provider 레이어로 중앙집중화해 3×3 집중 뷰와 9×9 전체 뷰를 실시간 동기화, 두 뷰 간 zoom-in/zoom-out 네비게이션과 pinch-zoom·pan 제스처 구현.",
          "OS 생명주기 훅에 기대지 않고, 상태가 바뀔 때마다 즉시 디스크에 기록해 강제 종료 시 데이터 손실 방지.",
          "커스텀 한/영 다국어, 다크/라이트 테마, 런처 아이콘·네이티브 스플래시, 릴리스 서명, 스토어 심사·배포.",
          "GitHub Actions로 정적 분석·포매팅 검사·빌드 파이프라인 구성, 코멘트로 트리거되는 Claude 기반 자동 PR 코드 리뷰 직접 설계·적용.",
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
    certifications: [
      {
        label: "자격증",
        items: [
          { label: "빅데이터분석기사", period: "2024.12" },
          { label: "데이터분석 준전문가(ADsP)", period: "2024.09" },
          { label: "SQL개발자(SQLD)", period: "2024.09" },
          { label: "데이터아키텍처 준전문가(DAsP)", period: "2024.10" },
        ],
      },
      {
        label: "어학",
        items: [{ label: "TOEIC 860점", period: "2024.04" }],
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
