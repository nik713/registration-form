const TEXT_NODE_TYPE = 3;
export const h = (type, props = {}, children = []) => {
  return { type, props, children };
};

const patchProp = (node, key, val, nextVal) => {
  if (key.startsWith('on')) {
    const eventName = key.slice(2);

    node[eventName] = nextVal;

    if (!nextVal) {
      node.removeEventListener(eventName, listener);
    } else if (!val) {
      node.addEventListener(eventName, listener);
    }
    return;
  }
  if (node.tagName === 'INPUT') {
    node[key] = nextVal;
  }

  if (nextVal === undefined || nextVal === null || nextVal === false) {
    node.removeAttribute(key);
    return;
  }
  node.setAttribute(key, nextVal);
};

const patchProps = (node, props, nextProps) => {
  const mergedProps = { ...props, ...nextProps };

  Object.keys(mergedProps).forEach((key) => {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, props[key], nextProps[key]);
    }
  });
};

const patchChildren = (parent, vChildren, nextVChildren) => {
  parent.childNodes.forEach((childNode, idx) => {
    if (vChildren[idx] && nextVChildren[idx] && vChildren[idx].type === nextVChildren[idx].type) {
      patchNode(childNode, vChildren[idx], nextVChildren[idx]);
    } else {
      const nextNode = createDOMNode(nextVChildren[idx]);
      childNode.replaceWith(nextNode);
    }
  });
  nextVChildren.slice(vChildren.length).forEach((vChild, idx) => {
    parent.append(createDOMNode(vChild));
  });
};

const createDOMNode = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }
  if (vNode) {
    const { type, props, children } = vNode;
    const node = document.createElement(type);
    patchProps(node, {}, props);
    children.forEach((child) => {
      node.append(createDOMNode(child));
    });
    return node;
  } else {
    return '';
  }
};

const patchNode = (node, vNode, nextVNode) => {
  if (nextVNode === undefined || nextVNode === null || nextVNode === false) {
    node.remove();
    return;
  }
  if (typeof vNode === 'string' || typeof nextVNode === 'string') {
    if (vNode !== nextVNode) {
      const nextNode = createDOMNode(nextVNode);
      node.replaceWith(nextNode);
      return nextNode;
    }
    return node;
  }
  if (vNode.type !== nextVNode.type) {
    const nextNode = createDOMNode(nextVNode);
    node.replaceWith(nextNode);
    return nextNode;
  }
  patchProps(node, vNode.props, nextVNode.props);
  patchChildren(node, vNode.children, nextVNode.children);
  return node;
};

const recycleNode = (node) => {
  if (node.nodeType === TEXT_NODE_TYPE) {
    return node.nodeValue;
  }
  const type = node.nodeName.toLowerCase();
  const children = [].map.call(node.childNodes, recycleNode);
  return h(type, {}, children);
};

export const patch = (nextVNode, node) => {
  const vNode = node.v || recycleNode(node);
  node = patchNode(node, vNode, nextVNode);
  node.v = nextVNode;
  return node;
};

function listener(event) {
  return this[event.type](event);
}
