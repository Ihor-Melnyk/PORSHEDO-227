function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function onChangeBrand() {
  setRozriz();
}

function onBeforeCardSave() {
  setRozriz();
}

function setRozriz() {
  var Brand = EdocsApi.getAttributeValue("Brand")?.text;
  if (Brand) {
    var Rozriz = EdocsApi.getAttributeValue("Rozriz")?.value;
    if (Brand != Rozriz) {
      setAttrValue("Rozriz", Brand);
    } else {
      setAttrValue("Rozriz", null);
    }
  }
}
