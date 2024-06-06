export const parser = "babel";

const componentsFileNames = [
  "linear-gradient",
  "accordion",
  "actionsheet",
  "alert",
  "alert-dialog",
  "checkbox",
  "avatar",
  "badge",
  "box",
  "button",
  "card",
  "center",
  "divider",
  "fab",
  "flat-list",
  "formcontrol",
  "gluestack-ui-provider",
  "heading",
  "hstack",
  "icon",
  "image",
  "image-background",
  "input",
  "input-accessory-view",
  "keyboard-avoiding-view",
  "linear-gradient",
  "link",
  "menu",
  "modal",
  "popover",
  "pressable",
  "progress",
  "radio",
  "refresh-control",
  "safe-area-view",
  "scroll-view",
  "section-list",
  "select",
  "slider",
  "spinner",
  "status-bar",
  "switch",
  "text",
  "textarea",
  "toast",
  "tooltip",
  "view",
  "virtualized-list",
  "vstack",
];
const exceptionalProperties = [
  "sx",
  "_sm",
  "_md",
  "_lg",
  "_dark",
  "_light",
  "_ios",
  "_android",
  "_web",
  "_mobile",
  "$sm",
  "$md",
  "$lg",
  "$dark",
  "$light",
  "$ios",
  "$android",
  "$web",
  "$mobile",
];
const dissolversClasses = ["light", "base"];
const unalteredClasses = ["bottom", "top", "right", "left"];
const unalteredProperties = [
  "bottom",
  "top",
  "right",
  "left",
  "flex",
  "space-between",
  "center",
  "white",
  "black",
];
const propertyTokenMap = {
  gap: "space",
  gridGap: "space",
  columnGap: "space",
  gridColumnGap: "space",
  rowGap: "space",
  gridRowGap: "space",
  inset: "space",
  insetBlock: "space",
  insetBlockEnd: "space",
  insetBlockStart: "space",
  insetInline: "space",
  insetInlineEnd: "space",
  insetInlineStart: "space",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginBlock: "space",
  marginBlockEnd: "space",
  marginBlockStart: "space",
  marginInline: "space",
  marginInlineEnd: "space",
  marginInlineStart: "space",
  marginHorizontal: "space",
  marginVertical: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  px: "space",
  p: "space",
  m: "space",
  pt: "space",
  pb: "space",
  py: "space",
  pl: "space",
  pr: "space",
  mx: "space",
  my: "space",
  ml: "space",
  mr: "space",
  mt: "space",
  mb: "space",
  display: "display-property",
  flex: "flex-property",
  paddingBlock: "space",
  paddingBlockEnd: "space",
  paddingBlockStart: "space",
  paddingInline: "space",
  paddingInlineEnd: "space",
  paddingInlineStart: "space",
  paddingHorizontal: "space",
  paddingVertical: "space",
  paddingStart: "space",
  paddingEnd: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  scrollMargin: "space",
  scrollMarginTop: "space",
  scrollMarginRight: "space",
  scrollMarginBottom: "space",
  scrollMarginLeft: "space",
  scrollMarginX: "space",
  scrollMarginY: "space",
  scrollMarginBlock: "space",
  scrollMarginBlockEnd: "space",
  scrollMarginBlockStart: "space",
  scrollMarginInline: "space",
  scrollMarginInlineEnd: "space",
  scrollMarginInlineStart: "space",
  scrollPadding: "space",
  scrollPaddingTop: "space",
  scrollPaddingRight: "space",
  scrollPaddingBottom: "space",
  scrollPaddingLeft: "space",
  scrollPaddingX: "space",
  scrollPaddingY: "space",
  scrollPaddingBlock: "space",
  scrollPaddingBlockEnd: "space",
  scrollPaddingBlockStart: "space",
  scrollPaddingInline: "space",
  scrollPaddingInlineEnd: "space",
  scrollPaddingInlineStart: "space",
  // shadowOffset: 'space',
  shadowRadius: "space",
  elevation: "space",
  fontSize: "fontSizes",
  outlineWidth: "sizes",
  background: "colors",
  bg: "colors",
  backgroundColor: "colors",
  backgroundImage: "colors",
  borderImage: "colors",
  border: "colors",
  borderBlock: "colors",
  borderBlockEnd: "colors",
  borderBlockStart: "colors",
  borderBottom: "colors",
  borderBottomColor: "colors",
  borderColor: "colors",
  borderInline: "colors",
  borderInlineEnd: "colors",
  borderInlineStart: "colors",
  borderLeft: "colors",
  borderLeftColor: "colors",
  borderRight: "colors",
  borderRightColor: "colors",
  borderTop: "colors",
  borderTopColor: "colors",
  caretColor: "colors",
  color: "colors",
  columnRuleColor: "colors",
  //   fill: "colors",
  outline: "colors",
  outlineColor: "colors",
  stroke: "colors",
  textDecorationColor: "colors",
  shadowColor: "colors",
  borderBlockColor: "colors",
  borderBlockEndColor: "colors",
  borderBlockStartColor: "colors",
  borderEndEndRadius: "radii",
  borderStartStartRadius: "radii",
  borderStartEndRadius: "radii",
  borderEndStartRadius: "radii",
  rounded: "radii",
  shadowOpacity: "opacity",
  opacity: "opacity",
  shadow: "shadows",
  // Media Query
  condition: "mediaQueries",
  fontFamily: "fonts",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  textAlign: "textAligns",
  letterSpacing: "letterSpacings",
  blockSize: "space",
  minBlockSize: "space",
  maxBlockSize: "space",
  inlineSize: "space",
  minInlineSize: "space",
  maxInlineSize: "space",
  width: "sizes",
  w: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  h: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "space",
  gridTemplateColumns: "space",
  gridTemplateRows: "space",
  borderWidth: "borderWidths",
  borderTopWidth: "borderWidths",
  borderRightWidth: "borderWidths",
  borderBottomWidth: "borderWidths",
  borderLeftWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderTopStyle: "borderStyles",
  borderRightStyle: "borderStyles",
  borderBottomStyle: "borderStyles",
  borderLeftStyle: "borderStyles",
  borderRadius: "radii",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  boxShadow: "colors",
  textShadow: "shadows",
  transition: "transitions",
  zIndex: "zIndices",
  alignItems: "align",
  justifyContent: "justify",
};
const codeToClassNameMap = new Map([
  ["bc", "bg"],
  ["c", "text"],
  ["fs", "text"],
  ["ta", "text"],
  ["d-0", "hidden"],
  ["d-flex", "flex"],
  ["underline-none", "no-underline"],
  ["position-relative", "relative"],
  ["position-absolute", "absolute"],
  ["position-sticky", "sticky"],
  ["position-static", "static"],
  ["position-fixed", "fixed"],
  ["justify-space-between", "justify-between"],
  ["self-flex-start", "self-start"],
  ["_dark", "dark"],
  ["_ios", "ios"],
  ["_android", "andriod"],
  ["mv", "my"],
  ["mh", "mx"],
  ["pv", "py"],
  ["ph", "px"],
  ["fw", "font"],
  ["ai", "items"],
  ["jc", "justify"],
]);
const camelCaseToClassName = (preciditor, property) => {
  let result = "";
  const resultString = property.replace(/([A-Z])/g, " $1");
  const resultArray = resultString.split(" ");
  let outputArray = [];
  resultArray.forEach((word) => {
    if (preciditor.length) {
      let code = word.toLowerCase().substring(0, 1);
      outputArray.push(code);
    } else {
      //non-normal styling cases
      if (["min", "max"].includes(word)) {
        result = result + word.toLowerCase() + "-";
      } else {
        //checking the classname unalteredness
        if (unalteredClasses.includes(word)) {
          result = result + word;
        } else {
          result = result + word.toLowerCase().substring(0, 1);
        }
      }
    }
  });
  //checking & assuming the proper classname.
  if (codeToClassNameMap.has(result)) {
    result = codeToClassNameMap.get(result);
  }
  if (outputArray.length) {
    //updating valid classnames in output array.
    outputArray.forEach((code) => {
      if (codeToClassNameMap.has(code)) {
        let indexToModify = outputArray.indexOf(code);
        outputArray[indexToModify] = codeToClassNameMap.get(code);
      }
    });
    result = outputArray.join("-");
  }
  //final classname!
  if (preciditor.length) {
    return preciditor + result;
  } else {
    return result;
  }
};
const propertyStyleTransformer = (property) => {
  let result = "";
  if (property === undefined || !property.length) {
    return "";
  } else {
    //guessing the stylings types
    property = property.replace(/[`@$%/]/gi, "");
    if (property.includes("_") || property.includes(":")) {
      return property.replace(/[`_:/]/gi, "");
    } else if (property === "color") {
      return "text";
    } else if (property.match(/flex([a-zA-Z])*/)) {
      return "flex";
    } else if (property.match(/rounded([a-zA-Z])*/)) {
      return "rounded";
    } else if (property.match(/border([a-zA-Z])*/)) {
      if (property.includes("Radius")) {
        property = property.replace("Radius", "");
        return camelCaseToClassName(
          "rounded",
          property.substring(6).replace("Width", "")
        );
      } else {
        const propertyModified = property.replace("Color", "");
        return camelCaseToClassName(
          "border",
          propertyModified.substring(6).replace("Width", "")
        );
      }
    } else {
      //if property lenght is less than a natural word we will return property itself!
      if (property.length <= 3) {
        return property;
      } else if (!property.match(/[\s_-]/g)) {
        //send to convertor func
        if (dissolversClasses.includes(property)) {
          return property;
        } else {
          return camelCaseToClassName("", property);
        }
      } else {
        //normalcased ie.., single word!
        result = property.substring(0, 1);
        return result;
      }
    }
  }
};
const convertColorToken = (input) => {
  //converting colors $primaryLight100 - > primaryLight-100
  let result = input.replace(/^\$/, "").replace(/(\D)(\d+)$/, "$1-$2");
  if (result.includes("text")) {
    result = result.replace("text", "typography");
  }
  return result;
};
const checkLiteralStyling = (nodeValue) => {
  let modifiedTokenValue = nodeValue;
  //if color matches version 1
  const regex = /^\$[a-zA-Z]+(Light)?(Dark)?\d+$/;
  if (nodeValue.toString().includes("$")) {
    if (regex.test(nodeValue)) {
      //modifying color to version 2
      modifiedTokenValue = convertColorToken(nodeValue);
    } else {
      modifiedTokenValue = nodeValue.substring(1);
    }
  } else {
    if (
      typeof nodeValue !== "number" &&
      !unalteredProperties.includes(nodeValue)
    ) {
      modifiedTokenValue = `[${nodeValue}]`;
    }
  }
  //universal none to 0 !
  if (modifiedTokenValue === "none") {
    modifiedTokenValue = "0";
  }
  return modifiedTokenValue;
};
const recursiveStyleConverter = (prevKey, valueNode) => {
  const treeTraverseArray = [];
  let initialValue = "";
  if (valueNode.type === "ObjectExpression") {
    valueNode.properties.forEach((item) => {
      let currentValue = "";
      let newModifiedStyle = "";
      let newStyle = "";
      let property = "";
      //normal literal, so modifying the style
      if (item.key.type === "Identifier") {
        property = item.key.name;
      } else {
        property = item.key.value;
      }
      const modifiedProperty = propertyStyleTransformer(property);
      //if nested level 2
      if (item.value.type === "ObjectExpression") {
        const valueNode = item.value;
        //passing the nested style to recursive func & modifying
        const expressionNodeMap = recursiveStyleConverter(
          modifiedProperty,
          valueNode
        );

        //remove sx if any
        if (prevKey === "sx") {
          treeTraverseArray.push(`${expressionNodeMap}`);
        } else {
          //if property is nested then it's pseudo class
          if (expressionNodeMap.includes(modifiedProperty)) {
            //remove the light from light mode style
            if (dissolversClasses.includes(prevKey)) {
              treeTraverseArray.push(`${expressionNodeMap}`);
            } else {
              treeTraverseArray.push(`${prevKey}:${expressionNodeMap}`);
            }
          } else {
            //remove the light from light mode style
            if (dissolversClasses.includes(prevKey)) {
              treeTraverseArray.push(
                `${modifiedProperty}:${expressionNodeMap}`
              );
            } else if (dissolversClasses.includes(modifiedProperty)) {
              treeTraverseArray.push(`${prevKey}:${expressionNodeMap}`);
            } else {
              treeTraverseArray.push(
                `${prevKey}:${modifiedProperty}:${expressionNodeMap}`
              );
            }
          }
        }
      } else {
        //if not nested in level 2
        if (item.value.type === "Literal" || item.value.type === "Identifier") {
          let modifiedProperty = propertyStyleTransformer(item.key.name);
          const modifiedTokenValue = checkLiteralStyling(item.value.value);

          //non nested so basic property-value class
          if (dissolversClasses.includes(prevKey)) {
            //removing the light className
            let newStyleProp = `${modifiedProperty}-${modifiedTokenValue}`;
            if (codeToClassNameMap.has(newStyleProp)) {
              newStyleProp = codeToClassNameMap.get(newStyleProp);
            }
            treeTraverseArray.push(newStyleProp);
          } else {
            let newStyleProp = `${modifiedProperty}-${modifiedTokenValue}`;
            if (codeToClassNameMap.has(newStyleProp)) {
              newStyleProp = codeToClassNameMap.get(newStyleProp);
            }
            treeTraverseArray.push(`${prevKey}:${newStyleProp}`);
          }
        }
      }
    });
    //updating the classnames with separator
    treeTraverseArray.forEach((item) => {
      initialValue += item + " ";
    });
  }
  return initialValue.trim();
};

export default function transformer(file, api) {
  const ast = api.jscodeshift;
  const source = ast(file.source);

  const map = new Map();
  const importsArray = [];
  //array of all importedComponents
  source.find(ast.ImportDeclaration).forEach((path) => {
    if (path.value.source.value === "@gluestack-ui/themed") {
      path.value.specifiers.forEach((component) => {
        importsArray.push(component.imported.name);
      });
    }
  });
  //add imports to map
  source
    .find(ast.ImportDeclaration)
    .filter((path) => path.value.source.value === "@gluestack-ui/themed")
    .forEach((iterator) => {
      for (const item of iterator.value.specifiers) {
        //assuming the filename based on component name.
        let key = item.imported.name.toLowerCase();
        for (const name of componentsFileNames) {
          if (key.includes(name)) {
            key = name;
            break;
          }
        }
        //grouping components based on filenames
        if (map.has(key)) {
          const value = Array.isArray(map.get(key))
            ? [...map.get(key), item.imported.name]
            : [map.get(key), item.imported.name];
          map.set(key, value);
        } else {
          map.set(key, item.imported.name);
        }
      }
    });
  //updating the imports
  map.forEach((value, key) => {
    let arrayVal = Array.isArray(value) ? value : [value];
    const importSpecifiers = arrayVal.map((currVal) => {
      return ast.importSpecifier(ast.identifier(currVal));
    });
    let updatedImportFile = key;
    //formcontrol fix for now.
    if (key === "formcontrol") {
      updatedImportFile = "form-control";
    }
    const newImport = ast.importDeclaration(
      importSpecifiers,
      ast.stringLiteral("@/components/ui/" + updatedImportFile)
    );
    source.get().node.program.body.unshift(newImport);
  });
  //remove all the old imports
  source
    .find(ast.ImportDeclaration)
    .filter((path) => path.value.source.value === "@gluestack-ui/themed")
    .remove();

  //props transformation
  source.find(ast.JSXElement).forEach((item) => {
    let currentElementStylings = "";
    let nonStylingProps = [];
    let nonStylingClassNames = "";
    let nestedStylingClassNames = "";
    if (importsArray.includes(item.node.openingElement.name.name)) {
      item.node.openingElement.attributes.map((item) => {
        let unStyleableProp = true;
        if (Object.keys(propertyTokenMap).includes(item.name.name)) {
          unStyleableProp = false;
          let newStyleProp = "";
          //if there exist any expression can be sx or _dark or any other
          if (item.value.expression) {
            //normal sx or _dark
            if (item.value.expression.type === "Literal") {
              newStyleProp = `${propertyStyleTransformer(item.name.name)}-${
                item.value.expression
                  ? checkLiteralStyling(item.value.expression.value)
                  : checkLiteralStyling(item.value.value)
              }`;
            }
            //other stylings - conditional , terinary
            else {
              nonStylingProps.push(item.name.name);
            }
          }
          //not an expression - if normal literal !
          else {
            newStyleProp = `${propertyStyleTransformer(
              item.name.name
            )}-${checkLiteralStyling(item.value.value)}`;
          }
          //correcting classNames
          if (codeToClassNameMap.has(newStyleProp)) {
            newStyleProp = codeToClassNameMap.get(newStyleProp);
          }
          if (currentElementStylings.length) {
            currentElementStylings =
              currentElementStylings + " " + newStyleProp;
          } else {
            currentElementStylings = newStyleProp;
          }
        }
        //checking the non normal stylings - sx,etc.., !
        const exceptionalPropertiesRegex = /^[\$_]\w*/;

        if (unStyleableProp) {
          if (
            item.name.name === "sx" ||
            exceptionalPropertiesRegex.test(item.name.name)
          ) {
            //matched for atleast one condition
            let preciditor = item.name.name;
            //if there exist nested styling!
            const valueNode = item.value.expression;
            //recursive for this nested container!
            const styledClassNames = recursiveStyleConverter(
              preciditor,
              valueNode
            );
            //assigning obtained classnames to global nestedstylings
            nestedStylingClassNames = styledClassNames;
          } else {
            nonStylingProps.push(item.name.name);
          }
        }
      });

      //adding updated props
      item.node.openingElement.attributes = [
        //getting all the unchanged styling
        ...item.node.openingElement.attributes.filter((item) =>
          nonStylingProps.includes(item.name.name)
        ),
        //adding the className stylings to dom !
        (currentElementStylings.length || nestedStylingClassNames.length) &&
          ast.jsxAttribute(
            ast.jsxIdentifier("className"),
            ast.stringLiteral(
              currentElementStylings + " " + nestedStylingClassNames
            )
          ),
      ];
    }
  });
  return source.toSource();
}
