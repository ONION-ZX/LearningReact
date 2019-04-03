---
title: state vs props
---
# state的特性:
1. 组件保存、控制、修改自己的可变状态。
2. 可以被组件自身修改，外部不能访问也不能修稿。
3. 局部的、只能被组件自身控制的数据源。
4. 通过this.setState方法进行更新，setState会导致组件的重新渲染。

# props的特性:
1. 使组件可配置。
2. 外部传入，组件内部无法修改。

# props vs state:
1. 它们都可以决定组件的行为和显示形态。
2. state是让组件控制自己的状态，props是让外部对最贱进行配置。
3. 尽量少用state，尽量多用props。

>没有state的组件叫无状态组件，有state的叫做有状态组件。由于前端状态管理的复杂性，所以尽量多地写无状态组件，少些有状态组件，可以降低代码维护的难度，增强组件的可复用性。