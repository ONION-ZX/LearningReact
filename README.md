>吐血推荐这本react小书: http://huziketang.mangojuice.top/books/react/

# 学习进度
## 第一阶段: 2019-04-02————2019-04-04
连续加班两天完成第一阶段的学习，基本可以构建简单的功能模块。
跟着小书做了个评论功能。    
贴张图：       
![''](https://ws3.sinaimg.cn/large/005BYqpggy1g1qhomdufxj30ha0b8dfz.jpg)

## 第二阶段: 2019-04-06————2019-04-09
优化评论组件，新增如下功能：
1. 页面加载完成自动聚焦到评论输入框。
2. 用户名持久化，存到LocalStorage中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。
3. 评论持久化，存到LocalStorage中。页面加载时会把已经保存的评论加载出来，显示到页面的评论列表上。
4. 评论显示发布日期，如“1 秒前”，”30 分钟前”，并且每隔5秒更新发布日期。
5. 评论可以被删除。
6. 类似 Markdown 的行内代码块显示功能，用户输入的用 `` 包含起来的内容都会被处理成用 <code> 元素包含。例如输入 `console.log` 就会处理成 <code>console.log</code> 再显示到页面上。

贴张图：
![''](https://ws3.sinaimg.cn/large/005BYqpgly1g1wtkl71ypj30vy0ioq43.jpg)