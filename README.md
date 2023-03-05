# CodePlus
codeplus工具是Editor.js的块级插件
# 安装
```
npm i --save-dev code-plus

```
或者直接[下载源码](https://github.com/xiaogonggong-w/code-plus.git),使用dist/bundle.js.
# 使用

```
import CodePlus from 'code-plus' 
```

# 使用
```

var editor = EditorJS({
  ...
  
  tools: {
    ...
    code: CodePlus,
  }
  
  ...
});

```

# 配置参数
| 字段  |  类型   | 描述 |
| ---- | ---- | ---- |
| placeholder | string | Code插件的占位文本 |
| languages | Array | 代码语言数组 |

# 输入的数据
```

{
    "time": 1678006102022,
    "blocks": [
        {
            "id": "s-IbXvCx7L",
            "type": "code",
            "data": {
                "code": " System.out.println(\"Java programming is interesting.\");",
                "language": "JavaScript"
            }
        }
    ],
    "version": "2.26.5"
}
```
