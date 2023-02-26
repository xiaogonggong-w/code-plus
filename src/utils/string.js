const _selection = () => {
  const selection = window.getSelection()
  return {
    getRange () {
      return selection.getRangeAt(0)
    },
    haveRange () {
      return selection.rangeCount > 0
    },
    deleteContents () {
      selection.getRangeAt(0).deleteContents()
    },
    getStartContainer () {
      return selection.getRangeAt(0).startContainer
    },
    getEndContainer () {
      return selection.getRangeAt(0).endContainer
    },
    getCursorOffset () {
      return selection.getRangeAt(0).endOffset
    },
    setCursorOffset (element, cursorOffset) {
      if (!cursorOffset && cursorOffset !== 0) return
      const range = document.createRange()
      range.selectNodeContents(element)
      range.setStart(element, cursorOffset)
      range.setEnd(element, cursorOffset)
      selection.removeAllRanges()
      selection.addRange(range)
    },
  }
}

export const selection = _selection()



export const _getFrontOffset = () => {
  let rootTextContent = ''
  let result = ''
  let ok = false
  const checkNodes = (root, rangeContainer, inset, callback, sign) => {

    if (sign !== '_is_not_first_') {
      // windows下换行符是'\r\n', 它的length是2, 但是将它作为dom元素的textContent解析时, 它的length是1, 所以在这里必须将2长度的'\r\n'替换为功能一样的'\n'
      // inset本该需要做同样的处理, 但是除了在粘贴的时候, 其它时候只会是长度为1的字符, 所以这里不处理, 放到重写的粘贴事件里面处理
      rootTextContent = root.textContent.replace(/\r\n/g, '\n')
      result = '';
      console.log(rootTextContent)
      ok = false
    }
    if (rangeContainer === root) {
      ok = true
      if (sign === '_is_not_first_') { // 当不是首次执行且目标容器===根容器时, 说明是在按下enter键时页面产生了div元素且光标正停留在末尾
        // 当只有一个'\n'在rootTextContent末尾时, 不会触发换行(即'\n'后面没有内容时, 最后一个'\n'失效, 不会触发换行), 所以至少保证rootTextContent末尾有2个'\n'
        // 这里的rootTextContent为根容器的原始textContent
        if (!/\n$/.test(rootTextContent)) result += '\n'
        callback && callback(result.length, result)
      } else if (rootTextContent.length) {
        // 尼玛, 当末尾空行被删减至最后一个含有tab原生空格的时候, 页面默认会添加一个<br>标签, 导致Range.startContainer和Range.endContainer为根元素
        // 当首次执行且目标容器===根容器且根容器内有内容时, 表明原光标正停留在末尾空行, 那么直接返回根容器的(textContent的长度 + 1) 和 (rootTextContent + '\n')
        // 由于<br>在被解析后失效, 所以须在rootTextContent后加一个换行符'\n'
        // 但是当只有一个'\n'在rootTextContent末尾时, 不会触发换行(即'\n'后面没有内容时, 最后一个'\n'失效, 不会触发换行), 所以至少保证rootTextContent末尾有2个'\n'
        // 这里的rootTextContent为根容器的原始textContent
        if (/\n$/.test(rootTextContent)) {
          rootTextContent += '\n'
        } else {
          rootTextContent += '\n\n'
        }
        callback && callback(rootTextContent.length, rootTextContent)
      } else {
        // 当目标容器===根容器且根容器内没有内容时, 说明根容器下没有任何节点, 那么直接返回需要插入的内容inset的长度
        callback && callback(inset.length, inset)
      }
      return
    }
    for (let i = 0; i < root.childNodes.length; i += 1) {
      if (ok) return
      if (root.childNodes[i].nodeType !== 3) {
        checkNodes(root.childNodes[i], rangeContainer, inset, callback, '_is_not_first_')
      } else if (root.childNodes[i] === rangeContainer) {
        ok = true
        const offset = selection.getCursorOffset()
        result += root.childNodes[i].textContent.substring(0, offset)
        rootTextContent = `${result}${inset}${rootTextContent.substring(result.length)}`
        result = `${result}${inset}`
        // windows下换行符是'\r\n', 它的length是2, 但是将它作为dom元素的textContent解析时, 它的length是1, 所以在这里必须将2长度的'\r\n'替换为功能一样的'\n'
        result = result.replace(/\r\n/g, '\n')
        callback && callback(result.length, rootTextContent)
        return
      } else {
        result += root.childNodes[i].textContent
      }
    }
    if (sign !== '_is_not_first_' && !ok) {
      callback && callback(0, '')
    }
  }
  return checkNodes
}

export const _getRealDomAndOffset = () => {
  let offset = 0
  let ok = false
  let handleGet = (root, cursorOffset, callback, sign) => {
    if (sign !== '_is_not_first_') {
      offset = cursorOffset
      ok = false
    }
    for (let i = 0; i < root.childNodes.length; i += 1) {
      if (ok) return
      const dom = root.childNodes[i]
      if (dom.nodeType === 3) {
        const ctxLength = dom.textContent.length
        const temporary = offset // 暂存当前的的剩余偏移量offset, 如果后面offset减去ctxLength的值小于等于0, 则这个temporary就是目标元素真正的光标偏移量
        offset -= ctxLength
        if (offset <= 0) { // 当offset的值小于等于0的时候, 当前文本节点dom就是光标所在的目标元素, temporary就是目标元素真正的光标偏移量
          ok = true
          callback && callback(dom, temporary)
          return
        }
      } else {
        handleGet(dom, offset, callback, '_is_not_first_')
      }
    }
    if (sign !== '_is_not_first_' && !ok) {
      callback && callback(null)
    }
  }
  return handleGet
}