// fetch 函数接受两个参数
fetch(
    // 第一个是一个请求地址（其中的文件 key 换成你自己的）
    'figma-linkcode',
    // 第二个是请求的额外参数
    {
      headers: {
        'X-Figma-Token': 'figma-token'
      }
    }
  )
.then(res => res.json())
.then(data => {
  // 取到 data.document，等同于 document = data.document
  const { document } = data
  const home = document.children[0].children[2]
  const introduction = home.children[1]
  // 取到 title 和 description
  // 等同于 title = introduction.children[0]，description = introduction.children[1]
  const [title, description] = introduction.children
})