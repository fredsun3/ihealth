import Link from "next/link";
import { Heart, Shield, Pill, Leaf, HeartPulse, HelpCircle } from "lucide-react";

const footerLinks = [
  {
    title: "快速导航",
    links: [
      { href: "/prevention", label: "HIV 预防" },
      { href: "/western-medicine", label: "西医治疗" },
      { href: "/traditional-chinese", label: "中医治疗" },
      { href: "/health-longevity", label: "养生长寿" },
      { href: "/faq", label: "科普问答" },
    ],
  },
];

const categories = [
  { icon: Shield, label: "HIV 预防", href: "/prevention" },
  { icon: Pill, label: "西医治疗", href: "/western-medicine" },
  { icon: Leaf, label: "中医治疗", href: "/traditional-chinese" },
  { icon: HeartPulse, label: "养生长寿", href: "/health-longevity" },
  { icon: HelpCircle, label: "科普问答", href: "/faq" },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* 分类导航 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <category.icon className="h-6 w-6 text-teal-600" />
              <span className="text-sm font-medium text-foreground">
                {category.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="border-t pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 平台介绍 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-teal-600" />
                <span className="font-bold text-foreground">健康科普平台</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                致力于提供权威、科学的 HIV 预防与治疗知识，传播健康生活方式，帮助更多人了解健康、守护健康。
              </p>
            </div>

            {/* 快速链接 */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">快速导航</h3>
              <ul className="space-y-2">
                {footerLinks[0].links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-teal-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 免责声明 */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">免责声明</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                本平台提供的健康信息仅供参考，不能替代专业医疗建议。如有健康问题，请咨询专业医疗机构或医生。
              </p>
            </div>
          </div>

          {/* 底部版权 */}
          <div className="border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 健康科普平台. 守护健康，传递关爱。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
