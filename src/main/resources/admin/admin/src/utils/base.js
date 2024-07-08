const base = {
    get() {
        return {
            url : "http://localhost:8080/huaqiangbeiershoushojiushangcheng/",
            name: "huaqiangbeiershoushojiushangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/huaqiangbeiershoushojiushangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "华强北商城二手手机管理系统"
        } 
    }
}
export default base
