import Link from "next/link";
import { Shield, Pill, Leaf, HeartPulse, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "HIV 预防",
      description: "了解 HIV 传播途径，掌握科学预防方法，保护自己和他人的健康。",
      href: "/prevention",
      stats: "预防知识全覆盖",
    },
    {
      icon: Pill,
      title: "西医治疗",
      description: "了解抗逆转录病毒治疗（ART）方案，科学用药，提高生活质量。",
      href: "/western-medicine",
      stats: "最新治疗指南",
    },
    {
      icon: Leaf,
      title: "中医治疗",
      description: "探索中医药在 HIV 治疗中的应用，调理身体，增强免疫力。",
      href: "/traditional-chinese",
      stats: "中西医结合",
    },
    {
      icon: HeartPulse,
      title: "养生长寿",
      description: "科学养生，合理膳食，适度运动，心理健康指导，延年益寿。",
      href: "/health-longevity",
      stats: "健康生活方式",
    },
    {
      icon: HelpCircle,
      title: "科普问答",
      description: "常见问题解答，健康自测，互动问答，帮助您解答健康疑惑。",
      href: "/faq",
      stats: "权威解答",
    },
  ];

  const healthTips = [
    {
      title: "安全性行为",
      content: "正确使用安全套是预防 HIV 性传播的最有效方法之一。",
    },
    {
      title: "定期检测",
      content: "高危行为后应及时进行 HIV 检测，早发现早治疗。",
    },
    {
      title: "健康生活",
      content: "均衡饮食、适量运动、充足睡眠，提升身体免疫力。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-amber-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              守护健康
              <span className="text-teal-600"> 传递关爱</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              专业的 HIV 预防与治疗知识科普平台，为您提供权威、全面的健康信息，
              帮助您了解疾病，预防疾病，科学治疗，健康生活。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/prevention">
                  了解预防知识
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/faq">常见问题解答</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              我们的专业领域
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              涵盖 HIV 预防、治疗、养生等多个方面，为您提供全方位的健康科普服务
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group flex flex-col p-6 rounded-xl border bg-white hover:shadow-xl hover:border-teal-200 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 group-hover:bg-teal-100 transition-colors mb-4">
                  <feature.icon className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-3">
                  {feature.description}
                </p>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full inline-block w-fit">
                  {feature.stats}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              健康小贴士
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              简单实用的健康建议，帮助您建立健康的生活方式
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthTips.map((tip, index) => (
              <ContentCard
                key={index}
                title={tip.title}
                description={tip.content}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-24 bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-teal-100">治疗成功率</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">U=U</div>
              <div className="text-teal-100">检测不到=不传染</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">在线咨询支持</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-teal-100">隐私保护</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            了解更多信息
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            无论是想要了解 HIV 预防知识，还是寻求治疗方案建议，我们都为您提供专业的科普内容。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/prevention">
                开始学习
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">查看问答</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">
              <strong>免责声明：</strong>本平台提供的健康信息仅供参考，不能替代专业医疗建议。
              如有健康问题或疑虑，请及时咨询专业医疗机构或医生。
              我们鼓励所有人在必要时寻求专业医疗帮助。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
