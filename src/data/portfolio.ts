import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  header: {
    name: "山田 太郎",
    title: "フルスタックエンジニア",
    links: ["About", "Experience", "Projects", "Skills", "Contact"]
  },
  about: {
    expertise: "フルスタック開発に特化し、特にReactとTypeScriptを用いたモダンなWebアプリケーション開発に強みを持っています。",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
    background: "大学時代からプログラミングに携わり、現在はWeb技術を中心に活動しています。新しい技術への探究心を持ち、継続的な学習を心がけています。"
  },
  experiences: [
    {
      title: "フルスタックエンジニア",
      role: "シニアエンジニア",
      description: "大規模ECサイトのフロントエンド開発とバックエンドAPIの設計・実装を担当。Reactを用いたUIの改善により、コンバージョン率が25%向上。",
      company: "テックカンパニー株式会社",
      period: "2020年4月 - 現在"
    },
    {
      title: "バックエンドエンジニア",
      role: "エンジニア",
      description: "Node.jsを用いたマイクロサービスの開発。APIの設計から実装、運用まで担当。",
      company: "スタートアップ企業",
      period: "2018年4月 - 2020年3月"
    }
  ],
  projects: [
    {
      name: "Task Manager Pro",
      description: "React、TypeScript、GraphQLを使用したタスク管理アプリケーション。リアルタイムの更新機能とチーム協業機能を実装。",
      githubUrl: "https://github.com/username/task-manager-pro",
      liveUrl: "https://task-manager-pro.example.com",
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "GraphQL", "Node.js"]
    },
    {
      name: "AI Chat Assistant",
      description: "OpenAI APIを活用したチャットボットアプリケーション。自然言語処理による高度な会話機能を実装。",
      githubUrl: "https://github.com/username/ai-chat-assistant",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "FastAPI", "React", "OpenAI API"]
    }
  ],
  skills: [
    {
      category: "フロントエンド",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "バックエンド",
      items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
    }
  ],
  contact: {
    email: "yamada.taro@example.com",
    github: "https://github.com/username",
    zenn: "https://zenn.dev/username",
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username"
  }
};