import { Metadata } from "next";
import Link from "next/link";
import { Leaf, Heart, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "中医治疗",
  description: "探索中医药在 HIV 治疗中的应用，调理身体，增强免疫力。",
};

export default function TraditionalChineseMedicinePage() {
  const treatmentApproaches = [
    {
      icon: Heart,
      title: "辨证论治",
      description: "中医强调个体化治疗，根据患者的具体症状、体质进行辨证论治，制定个性化的调理方案。",
    },
    {
      icon: Sparkles,
      title: "扶正祛邪",
      description: "通过中药调理，增强人体正气（免疫力），祛除病邪，达到标本兼治的效果。",
    },
    {
      icon: Leaf,
      title: "整体调理",
      description: "中医注重整体平衡，通过调理脾胃、肝肾等功能，改善整体健康状况。",
    },
  ];

  const commonSymptoms = [
    {
      symptom: "乏力、气虚",
      tcmApproach: "益气健脾",
      herbs: "人参、黄芪、党参、白术",
    },
    {
      symptom: "盗汗、潮热",
      tcmApproach: "滋阴清热",
      herbs: "知母、黄柏、生地、麦冬",
    },
    {
      symptom: "消化不良",
      tcmApproach: "健脾和胃",
      herbs: "山药、陈皮、茯苓、鸡内金",
    },
    {
      symptom: "失眠、焦虑",
      tcmApproach: "养心安神",
      herbs: "酸枣仁、远志、合欢皮、夜交藤",
    },
  ];

  const healthMaintenance = [
    {
      title: "情志调节",
      content: "保持心情舒畅，避免情绪波动过大。中医认为情志内伤可导致脏腑功能失调。",
    },
    {
      title: "饮食调理",
      content: "均衡饮食，多食用易消化、富含营养的食物。避免辛辣刺激、油腻生冷食物。",
    },
    {
      title: "起居有常",
      content: "规律作息，保证充足睡眠。避免过度劳累，适当休息和运动相结合。",
    },
    {
      title: "适度运动",
      content: "选择适合的运动方式，如太极拳、八段锦、散步等，增强体质。",
    },
  ];

  const importantPoints = [
    {
      title: "中西医结合",
      content: "中医药调理应与西医 ART 治疗相结合，不应替代抗病毒治疗。",
    },
    {
      title: "专业指导",
      content: "使用中药应在有资质的中医师指导下进行，避免自行用药。",
    },
    {
      title: "药物相互作用",
      content: "某些中药可能与抗病毒药物产生相互作用，务必告知医生正在使用的所有药物。",
    },
  ];

  const faqs = [
    {
      question: "中医能治愈 HIV 吗？",
      answer: "目前 HIV 仍无法被任何医学手段彻底治愈，中医也不例外。但是，中医药可以作为辅助治疗，帮助调理身体、改善症状、提高生活质量。",
    },
    {
      question: "服用中药期间可以继续 ART 治疗吗？",
      answer: "可以，但需要告知医生您正在使用的所有药物，包括中药。中医师在开方时会考虑与西药的相互作用。",
    },
    {
      question: "如何选择合适的中医师？",
      answer: "应选择有执业资格的中医师，最好选择有艾滋病治疗经验的中医机构。",
    },
    {
      question: "有哪些常见的中医养生方法？",
      answer: "太极拳、八段锦、艾灸、按摩、药膳等都是常用的中医养生方法，可以帮助调理身体、增强体质。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              中医治疗与调理
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              中医药学源远流长，在调理身体、增强体质方面有着独特优势。
              中西医结合治疗可以为 HIV 感染者提供更全面的健康支持。
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

      {/* Treatment Approaches */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            中医治疗特点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentApproaches.map((approach) => (
              <ContentCard
                key={approach.title}
                title={approach.title}
                description={approach.description}
                icon={approach.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Symptom Management */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            常见症状的中医调理
          </h2>
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {commonSymptoms.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border-b md:border-r last:border-r-0 border-gray-200"
                >
                  <div className="text-sm text-teal-600 font-medium mb-2">
                    症状
                  </div>
                  <div className="text-foreground font-semibold mb-4">
                    {item.symptom}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        调理原则
                      </div>
                      <div className="text-sm text-green-700 font-medium">
                        {item.tcmApproach}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">
                        常用中药
                      </div>
                      <div className="text-sm text-foreground">
                        {item.herbs}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Maintenance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            中医养生之道
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthMaintenance.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                description={item.content}
                icon={Sparkles}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="py-16 lg:py-24 bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            重要注意事项
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importantPoints.map((point, index) => (
              <div key={index} className="bg-teal-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                <p className="text-teal-100 leading-relaxed">{point.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-gray-50">
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

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>重要提示：</strong>中医药治疗应在有资质的中医师指导下进行。
                中医调理不能替代西医 ART 治疗，两者可以结合使用，但需遵医嘱。
                本页面提供的健康信息仅供参考，不能替代专业医疗建议。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
