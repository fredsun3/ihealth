import { Metadata } from "next";
import Link from "next/link";
import { Pill, Calendar, Shield, Heart, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "西医治疗",
  description: "了解抗逆转录病毒治疗（ART）方案，科学用药，提高生活质量。",
};

export default function WesternMedicinePage() {
  const treatmentPrinciples = [
    {
      icon: Pill,
      title: "抗逆转录病毒治疗（ART）",
      description: "通过联合使用多种抗病毒药物，抑制 HIV 病毒的复制，保持 CD4 细胞数量，提高免疫力。",
    },
    {
      icon: Calendar,
      title: "早期治疗",
      description: "确诊后应尽早开始治疗，早期治疗可以更好地保护免疫系统，减少并发症风险。",
    },
    {
      icon: Shield,
      title: "终身治疗",
      description: "ART 需要终身坚持，按时服药是治疗成功的关键。中断治疗可能导致病毒耐药。",
    },
    {
      icon: Heart,
      title: "综合关怀",
      description: "除了抗病毒治疗，还需要定期监测、心理健康支持、营养指导等综合关怀。",
    },
  ];

  const drugCategories = [
    {
      name: "核苷类逆转录酶抑制剂（NRTIs）",
      examples: "替诺福韦（TDF/TAF）、恩曲他滨（FTC）、拉米夫定（3TC）",
      role: "基础用药，通常作为组合方案的骨干",
    },
    {
      name: "非核苷类逆转录酶抑制剂（NNRTIs）",
      examples: "依非韦伦（EFV）、利匹韦林（RPV）、多拉韦林（DOR）",
      role: "通过不同机制抑制病毒复制",
    },
    {
      name: "整合酶抑制剂（INSTIs）",
      examples: "多替拉韦（DTG）、拉替拉韦（RAL）、比替拉韦（BIC）",
      role: "目前首选的抗病毒药物，起效快，副作用少",
    },
    {
      name: "蛋白酶抑制剂（PIs）",
      examples: "达芦那韦（DRV）、洛匹那韦（LPV）",
      role: "通常与其他药物联合使用",
    },
  ];

  const sideEffects = [
    {
      name: "常见副作用",
      symptoms: "恶心、头痛、乏力、皮疹",
      management: "通常在治疗初期出现，几天到几周内自行消失。严重时请咨询医生。",
    },
    {
      name: "长期副作用",
      symptoms: "骨质疏松、肾功能障碍、血脂异常",
      management: "定期监测相关指标，必要时调整用药方案。",
    },
    {
      name: "精神方面",
      symptoms: "噩梦、情绪变化、睡眠障碍",
      management: "部分药物可能引起，及时与医生沟通，必要时调整治疗方案。",
    },
  ];

  const treatmentGoals = [
    { metric: "病毒载量", target: "< 50 copies/mL", description: "检测不到病毒" },
    { metric: "CD4 细胞", target: "> 500 cells/μL", description: "免疫功能恢复" },
    { metric: "生活质量", target: "正常", description: "无相关疾病" },
  ];

  const faqs = [
    {
      question: "ART 治疗需要多长时间才能见效？",
      answer: "大多数患者在开始治疗后 1-3 个月内病毒载量会显著下降。持续治疗 6 个月后，多数患者可以达到病毒载量检测不到的水平。",
    },
    {
      question: "如果漏服药物怎么办？",
      answer: "如果发现漏服，应尽快补服。如果已经接近下次服药时间，不要服用双倍剂量。频繁漏服会导致病毒耐药，请尽量按时服药。",
    },
    {
      question: "ART 药物需要终身服用吗？",
      answer: "目前 HIV 感染仍无法治愈，ART 需要终身坚持。随着医学发展，未来可能会有功能性治愈的可能。",
    },
    {
      question: "ART 药物会影响生育吗？",
      answer: "ART 药物不会影响生育能力。相反，有效的病毒抑制可以显著降低母婴传播风险。如有生育计划，应与医生讨论。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              HIV 西医治疗
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              现代医学已经开发出有效的 HIV 治疗方案。通过规范的抗逆转录病毒治疗（ART），
              HIV 感染者可以过上健康、长寿的生活。
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

      {/* Treatment Goals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            治疗目标
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            通过规范治疗，我们可以实现以下目标，让 HIV 感染者过上健康的生活
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentGoals.map((goal) => (
              <div
                key={goal.metric}
                className="text-center p-8 bg-teal-50 rounded-2xl"
              >
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  {goal.target}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {goal.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {goal.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Principles */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            治疗原则
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentPrinciples.map((principle) => (
              <ContentCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Drug Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            常用药物分类
          </h2>
          <div className="space-y-6">
            {drugCategories.map((category, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-teal-600 font-medium mb-3">
                  代表药物：{category.examples}
                </p>
                <p className="text-muted-foreground">{category.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            药物副作用及处理
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sideEffects.map((effect) => (
              <ContentCard
                key={effect.name}
                title={effect.name}
                description={`常见症状：${effect.symptoms}`}
              >
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>处理方法：</strong>
                    {effect.management}
                  </p>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* U=U Campaign */}
      <section className="py-16 lg:py-24 bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">U=U</h2>
            <p className="text-xl text-teal-100 mb-4">
              Undetectable = Untransmittable
            </p>
            <p className="text-teal-100 leading-relaxed mb-6">
              当 HIV 感染者持续接受有效治疗，病毒载量降至检测不到的水平时，
              将无法通过性接触传播 HIV。这就是著名的 U=U 理念，已被全球科学界证实。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-300" />
                <span>有效治疗 = 保护自己</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-300" />
                <span>病毒抑制 = 不传染</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            常见问题
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>重要提示：</strong>所有治疗方案都应在专业医生的指导下进行。
                请勿自行购买或更换药物。本页面提供的健康信息仅供参考，不能替代专业医疗建议。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
