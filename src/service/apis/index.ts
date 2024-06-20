const http = uni.$uv.http
console.log(http.request, 'http.request')
// 获取菜单
// export const fetchMenu = () => http.get('top/mv?limit=10')
export const fetchMenu = () => http.request({ url: 'top/mv?limit=10', method: 'GET' })
