export const UI = {
    nElement : (element, attributes, text) => {
        let el = null;
        el = document.createElement(element.toLowerCase());
    
        if (attributes) {
            attributes.forEach(attribute => {
                el.setAttribute(attribute[0], attribute[1]);
            });
        }

        if (text) {
            el.innerHTML = text
        }
    
        return el;
    },
    join : (container, elements) => {
        console.log(elements);
        elements.forEach(element => {
            container.appendChild(element);
        });

        return container;
    },
    print : (code) => {
        document.body.appendChild(code);
    }
}