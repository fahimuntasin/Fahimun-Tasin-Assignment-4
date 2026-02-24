1. Difference between selectors

* getElementById("id") > for single element
* getElementsByClassName("class") > multiple element by class
* querySelector("selector") > first matching element

2.Create and insert element
const div = document.createElement("div");
div.textContent = "javaaascipt";
document.body.appendChild(div);

1. Event Bubbling
Event starts at inner element and bubbles up to parents.

2. Event Delegation
Attach one event to parent to handle all child events; useful for dynamic elements.

3. preventDefault() vs stopPropagation()
preventDefault() > stop actions like link click

stopPropagation() > stop bubbling
