import Header from "./Header/Header"
import { Button } from "./ui/button"

export default function Index() {
  return (
    <>
      <div className="bg-[url('/src/assets/images/welcome-bg.png')] bg-cover bg-center h-screen relative">
        <Header />
        <div className="w-full h-[500px] flex justify-evenly items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[100px]">
          {/* 左边 */}
          <div className="flex flex-col justify-around h-full">
            <div>
              <h1 className="text-[52px] font-bold text-white tracking-[8px] ">
                将您的数据快速搭建为您的<br />智能可视化大屏
              </h1>
              <p className="text-white mt-[20px]">
                通过拖拽和配置，快速构建数据大屏,打造你的专属数据大屏
              </p>
            </div>
            
            {/* 两个按钮 */}
            <div className="flex gap-[20px]">
              <Button className="w-[200px] h-[40px] font-[600] tracking-[2px] rounded-[20px] bg-gradient-to-r from-[#409ff8] to-[#38cdf1]">
                开始使用
              </Button>
              <Button variant="outline" className="w-[150px] h-[40px] rounded-[20px]">
                查看模板
              </Button>
            </div>  
          </div>

          {/* 右边 */}
          <div className="w-[450px] h-[380px] flex flex-col gap-[20px] justify-center items-center border border-[#3be4fe] shadow-lg rounded-[20px] bg-[rgba(32,38,47,0.85)] p-[25px] ">
            <h1 className="text-[36px] font-[600] text-[#3be4fe] tracking-[2px] ">
              数据可视化新纪元：将复杂信息转化为智能视觉盛宴
            </h1>
            <p className="text-[#fff] text-[14px] opacity-80">
              告别繁琐代码，通过直观的拖拽式编辑器，快速、灵活地构建专业级数据大屏。一站式连接您的多源数据，实现实时监控与深度洞察，为每一次决策提供强有力的数据支持。
            </p>
            <Button className="w-full h-[40px] font-[600] tracking-[2px] rounded-[20px] bg-gradient-to-r from-[#409ff8] to-[#38cdf1]">
              立即尝试
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}