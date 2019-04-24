根据是否需要复用性 将组件划分为DUMB和SMART.
Dumb组件：
1. 根据props进行渲染
2. 对数据的力量一无所知
Smart组件:
1. 负责应用逻辑、数据
2. 组合相关的DUMB和SMART
3. 通过props控制它们
4. 复用性依赖场景