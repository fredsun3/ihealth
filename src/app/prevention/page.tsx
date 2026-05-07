import { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "HIV 预防",
  description: "了解 HIV 传播途径，掌握科学预防方法，保护自己和他人的健康。",
};

export default function PreventionPage() {
  const transmissionRoutes = [
    {
      title: "性传播",
      content: "HIV 可以通过性接触传播，包括阴道、肛门和口腔性交。使用安全套是预防性传播的最有效方法。",
      risk: "主要传播途径",
    },
    {
      title: "血液传播",
      content: "通过共用针具、输血或接触感染血液传播。避免共用注射器，确保血液制品安全。",
      risk: "高风险",
    },
    {
      title: "母婴传播",
      content: "感染 HIV 的母亲可能在怀孕、分娩或哺乳时将病毒传给婴儿。及时进行母婴阻断可有效降低传播风险。",
      risk: "可预防",
    },
  ];

  const preventionMethods = [
    {
      icon: Shield,
      title: "正确使用安全套",
      description: "每次性行为都正确使用安全套，可有效预防 HIV 和其他性传播疾病。",
    },
    {
      icon: CheckCircle,
      title: "定期检测",
      description: "定期进行 HIV 检测，早发现早治疗，也是对自己和他人负责的表现。",
    },
    {
      icon: AlertTriangle,
      title: "避免共用针具",
      description: "绝不与他人共用注射器、针头或其他尖锐器具。",
    },
    {
      icon: Clock,
      title: "暴露后预防（PEP）",
      description: "在可能暴露后 72 小时内服用阻断药，可有效降低感染风险。",
    },
  ];

  const mythsFacts = [
    {
      myth: "HIV 可以通过蚊虫叮咬传播",
      fact: "错误。HIV 不能通过蚊虫或其他昆虫传播。",
    },
    {
      myth: "与 HIV 感染者日常接触会感染",
      fact: "错误。HIV 不会通过拥抱、握手、共用餐具、游泳池等日常接触传播。",
    },
    {
      myth: "口交不会传播 HIV",
      fact: "虽然风险较低，但口交仍可能传播 HIV。建议使用安全套或牙套。",
    },
    {
      myth: " HIV 感染者不能生育健康宝宝",
      fact: "错误。通过有效的母婴阻断措施，HIV 感染者完全可以生育健康宝宝。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              HIV 预防知识
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              了解 HIV 的传播途径和预防方法，是保护自己和他人健康的关键。
              通过科学预防，我们可以有效降低 HIV 的传播风险。
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/faq">
                了解更多常见问题
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transmission Routes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            HIV 传播途径
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transmissionRoutes.map((route) => (
              <ContentCard
                key={route.title}
                title={route.title}
                description={route.content}
              >
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                  {route.risk}
                </span>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Methods */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            科学预防方法
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {preventionMethods.map((method) => (
              <ContentCard
                key={method.title}
                title={method.title}
                description={method.description}
                icon={method.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PrEP Section */}
      <section className="py-16 lg:py-24 bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">暴露前预防（PrEP）</h2>
              <p className="text-teal-100 leading-relaxed mb-6">
                PrEP 是一种预防性用药，适用于高风险人群。通过每天服用一片药，
                可有效降低性行为或注射药物时的 HIV 感染风险，有效性可达 99% 以上。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>适用于高风险性行为人群</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>需要医生处方和定期检测</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span>需配合安全套使用，预防其他性传播疾病</span>
                </li>
              </ul>
            </div>
            <div className="bg-teal-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">重要提示</h3>
              <p className="text-teal-100 leading-relaxed">
                PrEP 不是疫苗，需要持续服用才能保持有效。开始使用 PrEP 前，
                需要进行 HIV 检测确认阴性，并在使用期间定期检测。
                如有需要，请咨询当地疾控中心或专业医疗机构。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            常见误区与真相
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {mythsFacts.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <span className="text-red-600 font-medium mr-2">误区:</span>
                  {item.myth}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-6">
                    <span className="text-teal-600 font-medium">真相:</span>
                    <p className="text-muted-foreground mt-2">{item.fact}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testing Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  HIV 检测
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  检测是了解自身健康状况的重要方式。建议在高危行为后及时进行检测。
                  现在有多种检测方式可供选择，包括快速检测和实验室检测。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-teal-600 rounded-full"></div>
                    <span>快速检测：15-30 分钟出结果</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-teal-600 rounded-full"></div>
                    <span>实验室检测：1-3 天出结果，更准确</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-teal-600 rounded-full"></div>
                    <span>自检试剂盒：可在家自行检测</span>
                  </li>
                </ul>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/faq">查看检测相关问题</Link>
                </Button>
              </div>
              <div className="bg-teal-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  检测时间窗口
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="text-foreground">核酸检测（RNA）</span>
                    <span className="text-teal-600 font-medium">10-14 天</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="text-foreground">抗原/抗体检测</span>
                    <span className="text-teal-600 font-medium">14-28 天</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="text-foreground">抗体检测</span>
                    <span className="text-teal-600 font-medium">21-42 天</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800">
              <strong>免责声明：</strong>本页面提供的健康信息仅供参考，不能替代专业医疗建议。
              如有健康问题或疑虑，请及时咨询专业医疗机构或医生。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
