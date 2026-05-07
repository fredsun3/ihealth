import { Metadata } from "next";
import Link from "next/link";
import { HeartPulse, Utensils, Dumbbell, Brain, Moon, Sun, AlertTriangle, ArrowRight, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/shared/content-card";

export const metadata: Metadata = {
  title: "养生长寿",
  description: "科学养生，合理膳食，适度运动，心理健康指导，延年益寿。",
};

export default function HealthLongevityPage() {
  const nutritionTips = [
    {
      title: "均衡营养",
      description: "摄入足够的蛋白质、碳水化合物、脂肪、维生素和矿物质，保持饮食多样化。",
      icon: Utensils,
    },
    {
      title: "多吃蔬果",
      description: "每天摄入多种颜色的蔬菜和水果，提供丰富的抗氧化物质和膳食纤维。",
      icon: Leaf,
    },
    {
      title: "适量蛋白质",
      description: "优质蛋白有助于维持免疫功能和肌肉质量，如鱼、禽、豆类、坚果等。",
      icon: Heart,
    },
    {
      title: "控制盐糖",
      description: "减少高盐、高糖食物的摄入，预防心血管疾病和代谢问题。",
      icon: AlertTriangle,
    },
  ];

  const exerciseGuidelines = [
    {
      title: "有氧运动",
      description: "每周进行 150 分钟中等强度有氧运动，如快走、游泳、骑自行车等。",
      benefit: "增强心肺功能",
    },
    {
      title: "力量训练",
      description: "每周进行 2-3 次力量训练，维持肌肉质量和骨密度。",
      benefit: "增强肌肉力量",
    },
    {
      title: "柔韧性训练",
      description: "进行拉伸运动和瑜伽，提高身体柔韧性和平衡能力。",
      benefit: "预防跌倒",
    },
    {
      title: "日常活动",
      description: "减少久坐，增加日常活动量，如走路、做家务、园艺等。",
      benefit: "保持活力",
    },
  ];

  const mentalHealth = [
    {
      icon: Brain,
      title: "压力管理",
      description: "学会识别和应对压力，使用冥想、深呼吸、瑜伽等方式放松身心。",
    },
    {
      icon: Moon,
      title: "充足睡眠",
      description: "保持 7-9 小时的优质睡眠，建立规律的作息时间表。",
    },
    {
      icon: Sun,
      title: "阳光沐浴",
      description: "每天适量接受阳光照射，补充维生素 D，改善情绪。",
    },
    {
      icon: HeartPulse,
      title: "社交联系",
      description: "保持与家人、朋友的联系，参与社区活动，获得社会支持。",
    },
  ];

  const lifestyleHabits = [
    {
      title: "戒烟限酒",
      description: "吸烟和过量饮酒都会损害免疫系统，应尽量避免或戒除。",
    },
    {
      title: "定期体检",
      description: "定期进行健康检查，及时发现和处理健康问题。",
    },
    {
      title: "遵医嘱用药",
      description: "按时服药，不要自行停药或换药，有问题及时与医生沟通。",
    },
    {
      title: "保持乐观",
      description: "积极乐观的心态有助于提升免疫力和生活质量。",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              养生长寿
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              健康的生活方式是提高生活质量、延年益寿的关键。
              通过科学的饮食、适度的运动、良好的心理状态，我们可以更好地守护健康。
            </p>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/faq">
                了解更多健康知识
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            营养饮食
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionTips.map((tip) => (
              <ContentCard
                key={tip.title}
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Food Guide */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            每日饮食指南
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-lg">🍞</span>
                </div>
                <h3 className="font-semibold text-foreground">谷薯类</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天 200-300 克主食，以全谷物为主
              </p>
              <div className="text-xs text-orange-600 font-medium">
                推荐：糙米、全麦面包、红薯、燕麦
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-lg">🥬</span>
                </div>
                <h3 className="font-semibold text-foreground">蔬菜水果</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天 500 克蔬菜，200-350 克水果
              </p>
              <div className="text-xs text-green-600 font-medium">
                推荐：深色蔬菜为主，多样化选择
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-lg">🥩</span>
                </div>
                <h3 className="font-semibold text-foreground">蛋白质</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天适量蛋白质，约 1-1.5 克/公斤体重
              </p>
              <div className="text-xs text-red-600 font-medium">
                推荐：鱼、禽、蛋、豆类、坚果
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-lg">🥛</span>
                </div>
                <h3 className="font-semibold text-foreground">奶制品</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天 300 毫升奶或等量奶制品
              </p>
              <div className="text-xs text-blue-600 font-medium">
                推荐：牛奶、酸奶、低脂奶制品
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-lg">🫘</span>
                </div>
                <h3 className="font-semibold text-foreground">豆类坚果</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天适量豆制品和坚果
              </p>
              <div className="text-xs text-yellow-600 font-medium">
                推荐：豆腐、豆浆、杏仁、核桃
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg">💧</span>
                </div>
                <h3 className="font-semibold text-foreground">饮水</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                每天 1500-2000 毫升水
              </p>
              <div className="text-xs text-gray-600 font-medium">
                推荐：白开水、淡茶、少糖饮品
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            适度运动
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exerciseGuidelines.map((exercise) => (
              <ContentCard
                key={exercise.title}
                title={exercise.title}
                description={exercise.description}
                icon={Dumbbell}
              >
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                    {exercise.benefit}
                  </span>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            心理健康
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalHealth.map((item) => (
              <ContentCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Habits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            健康生活习惯
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifestyleHabits.map((habit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {habit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {habit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            养生要点总结
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            养生不是一朝一夕的事，而是需要长期坚持的健康生活方式。
            从饮食、运动、心理、生活习惯等多个方面入手，
            循序渐进地改善，就能收获健康和长寿。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium text-foreground">
                🍎 均衡饮食
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium text-foreground">
                🏃 适度运动
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium text-foreground">
                😊 心理健康
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium text-foreground">
                😴 充足睡眠
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-sm font-medium text-foreground">
                💊 遵医嘱用药
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>免责声明：</strong>本页面提供的养生信息仅供参考，
                不能替代专业医疗建议。如有健康问题或疑虑，请及时咨询专业医疗机构或医生。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
