export function composeAttributes(attributesList) {
  const attributes = {};

  attributesList.forEach(obj => {

    if (!isEmptyObject(obj)) {
      for (let key in obj) {
        attributes[key] = obj[key];
      }
    }
  });

  return attributes;
}

export function composeClassName(cssClassList) {
  return {
    className: cssClassList.filter(cssClass => !isEmptyClassName(cssClass)).join(' ')
  };
}

let globalCssModule;

export function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

export function mapToCssModules(className = '', cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
}


export function isEmptyObject(obj) {
  if ((Object.keys(obj).length === 0) && (obj.constructor === Object)) {
    return true;
  } else {
    return false;
  }
}

export function isEmptyClassName(cssClass) {
  if (cssClass.trim().length <= 0) {
    return true;
  } else {
    return false
  }
}

export function isEmptyAttribute(attribute) {
  if (typeof attribute == 'undefined') {
    return false;
  } else
    if (attribute.toString().trim().length <= 0) {
      return true;
    } else {
      return false;
    }
}

export function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      );
    }

    return propType(props, propName, componentName, ...rest);
  };
}