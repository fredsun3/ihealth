import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Search, Shield, Pill, Leaf, HeartPulse, AlertTriangle, CheckCircle, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ContentCard } from "@/components/shared/content-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "科普问答",
  description: "常见问题解答，健康自测，互动问答，帮助您解答健康疑惑。",
};

export default function FAQPage() {
  const categories = [
    {
      icon: Shield,
      title: "HIV 基础",
      href: "/prevention",
      description: "了解 HIV 是什么、传播途径等基础知识",
    },
    {
      icon: Pill,
      title: "治疗相关",
      href: "/western-medicine",
      description: "ART 治疗、药物副作用、治疗效果等问题",
    },
    {
      icon: Leaf,
      title: "中医调理",
      href: "/traditional-chinese",
      description: "中医药在 HIV 治疗中的应用",
    },
    {
      icon: HeartPulse,
      title: "养生保健",
      href: "/health-longevity",
      description: "营养、运动、心理等健康生活方式",
    },
  ];

  const basicFAQs = [
    {
      question: "HIV 和 AIDS 有什么区别？",
      answer: "HIV 是人类免疫缺陷病毒（Human Immunodeficiency Virus），攻击人体免疫系统。AIDS 是获得性免疫缺陷综合征（Acquired Immunodeficiency Syndrome），是 HIV 感染的最后阶段。感染 HIV 不等于患有 AIDS，通过规范治疗，感染者可以避免发展为 AIDS。",
    },
    {
      question: "HIV 感染者可以活多久？",
      answer: "随着现代医学的发展，HIV 感染者通过规范的抗逆转录病毒治疗（ART），可以拥有与正常人相当的寿命和生活质量。关键在于早期检测、规范治疗、持续用药。",
    },
    {
      question: "HIV 可以治愈吗？",
      answer: "目前 HIV 尚无法被彻底治愈，但可以通过 ART 有效控制病毒复制，使感染者过上正常生活。科学家们仍在不断研究功能性治愈和根除性治愈的方法。",
    },
    {
      question: "感染 HIV 后有哪些症状？",
      answer: "感染初期可能出现类似流感的急性症状（如发热、咽喉痛、淋巴结肿大等），但很多人可能没有任何症状。确诊需要通过血液检测。",
    },
    {
      question: "安全套可以 100% 预防 HIV 吗？",
      answer: "正确使用安全套可以有效预防 HIV 传播，但并非 100%。正确使用意味着每次性行为都使用新的安全套、正确佩戴、避免破裂等。结合其他预防方法（如 PrEP）可以提供更高保护。",
    },
  ];

  const testingFAQs = [
    {
      question: "什么时候可以进行 HIV 检测？",
      answer: "不同的检测方法有不同的窗口期：核酸检测 10-14 天、抗原/抗体检测 14-28 天、抗体检测 21-42 天。如果有高危行为，建议在高危行为后 2 周先做核酸检测，之后根据需要复查。",
    },
    {
      question: "HIV 检测是免费的吗？",
      answer: "在各地的疾病预防控制中心，可以获得免费的 HIV 咨询和检测服务。部分医院和社区卫生服务中心也提供检测服务。",
    },
    {
      question: "自我检测结果准确吗？",
      answer: "正规渠道购买的 HIV 自检试剂盒是经过国家审批的，准确率较高。但自我检测可能因操作不当影响结果，建议阳性结果到专业机构复查确认。",
    },
  ];

  const lifeFAQs = [
    {
      question: "HIV 感染者可以正常工作和生活吗？",
      answer: "当然可以。HIV 感染者有权正常工作和生活。在接受规范治疗、病毒得到有效抑制后，感染者可以从事绝大多数工作，不会影响工作能力。",
    },
    {
      question: "HIV 感染者可以结婚生子吗？",
      answer: "HIV 感染者完全可以结婚，法律保护感染者的婚姻权利。关于生育，通过有效的母婴阻断措施，HIV 感染者可以生育健康宝宝。在计划生育前应与医生详细讨论。",
    },
    {
      question: "HIV 感染者在生活中需要注意什么？",
      answer: "坚持规范治疗、按时服药；保持健康的生活方式（均衡饮食、适度运动、充足睡眠）；定期体检；保护他人（如使用安全套、不共用针具）；保持积极乐观的心态。",
    },
  ];

  const preventionFAQs = [
    {
      question: "哪些行为不会传播 HIV？",
      answer: "以下行为不会传播 HIV：拥抱、握手、共用餐具、蚊虫叮咬、游泳池游泳、眼泪、汗液、空气等。HIV 主要通过血液、精液、阴道分泌物、直肠液和母乳传播。",
    },
    {
      question: "PrEP 和 PEP 有什么区别？",
      answer: "PrEP（暴露前预防）是高危人群在可能暴露前服用的预防性药物，需要每天服用。PEP（暴露后预防）是在可能的暴露后 72 小时内服用的阻断药物，越早越好，需连续服用 28 天。两者都需在医生指导下使用。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              科普问答
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              关于 HIV 预防、治疗、养生等常见问题的专业解答。
              如果您有其他问题，欢迎参考我们的专业内容或咨询医生。
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="搜索问题..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            浏览分类
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <category.icon className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-teal-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Basic FAQs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            HIV 基础知识
          </h2>
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl">
            {basicFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`basic-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testing FAQs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            检测相关问题
          </h2>
          <Accordion type="single" collapsible className="w-full bg-gray-50 rounded-xl">
            {testingFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`testing-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Prevention FAQs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            预防相关问题
          </h2>
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl">
            {preventionFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`prevention-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Life FAQs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            日常生活问题
          </h2>
          <Accordion type="single" collapsible className="w-full bg-gray-50 rounded-xl">
            {lifeFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`life-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24 bg-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            相关内容推荐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/prevention"
              className="p-6 bg-teal-700 rounded-xl hover:bg-teal-800 transition-colors"
            >
              <Shield className="h-8 w-8 mb-4" />
              <h3 className="font-semibold text-lg mb-2">HIV 预防</h3>
              <p className="text-teal-100 text-sm">
                了解 HIV 传播途径和科学预防方法
              </p>
            </Link>
            <Link
              href="/western-medicine"
              className="p-6 bg-teal-700 rounded-xl hover:bg-teal-800 transition-colors"
            >
              <Pill className="h-8 w-8 mb-4" />
              <h3 className="font-semibold text-lg mb-2">西医治疗</h3>
              <p className="text-teal-100 text-sm">
                了解抗逆转录病毒治疗方案
              </p>
            </Link>
            <Link
              href="/health-longevity"
              className="p-6 bg-teal-700 rounded-xl hover:bg-teal-800 transition-colors"
            >
              <HeartPulse className="h-8 w-8 mb-4" />
              <h3 className="font-semibold text-lg mb-2">养生长寿</h3>
              <p className="text-teal-100 text-sm">
                科学养生，健康生活
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-amber-800 font-medium mb-2">
                  <strong>免责声明：</strong>
                </p>
                <p className="text-sm text-amber-800">
                  本页面提供的健康信息仅供参考，不能替代专业医疗建议。
                  如有健康问题或疑虑，请及时咨询专业医疗机构或医生。
                  如遇紧急情况，请立即就医。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
