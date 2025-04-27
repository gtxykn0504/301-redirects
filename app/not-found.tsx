import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">域名未配置</h1>
        <p className="text-gray-600 mb-6">您访问的域名尚未在我们的系统中配置，请联系管理员提交接入申请。</p>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">接入申请流程：</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>
              发送邮件至 <span className="font-medium">10010@spircape.com</span>
            </li>
            <li>在邮件中提供您的域名和目标重定向地址</li>
            <li>说明您的使用需求和用途</li>
            <li>等待管理员审核和配置（通常1-3个工作日）</li>
          </ol>
        </div>
        <div className="text-center">
          <Link
            href="mailto:10010@spircape.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            发送接入申请
          </Link>
        </div>
      </div>
    </div>
  )
}
